import {Component, OnInit} from 'angular2/core';
import {Curso} from './models/curso';
import {Aluno} from './models/aluno';
import {ControlGroup, FormBuilder, Validators, AbstractControl} from 'angular2/common';
import {EmailValidator} from './validators/email-validator';
import {AlunoService} from './service/aluno-service';


@Component({
    selector: 'form-aluno',
    templateUrl: 'app/view/form-aluno.html',
    providers: [AlunoService]
})
export class FormAlunoComponent implements OnInit {
    sucesso: boolean = false;
    cursos: Curso[];
    aluno: Aluno;
    alunoForm: ControlGroup;
    idEditar: number;
    alunos: Aluno[];
    error: string;
    mensagem: string = "";

    constructor(private fb: FormBuilder, private alunoService: AlunoService) {

    }


    ngOnInit() {
        this.listar();

        this.aluno = new Aluno();
        this.cursos = [
            new Curso('angular2', 'Angular 2'),
            new Curso('javaee', 'Java EE')
        ];
        this.buildForm(this.fb);

        this.idEditar = -1;
    }

    buildForm(fb: FormBuilder): void {
        this.alunoForm = fb.group({
            nome: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, EmailValidator.validate])],
            curso: ['', Validators.required]
        });
    }

    listar() {
        this.alunoService.listar().subscribe(
            data => this.alunos = data,
            error => this.error = "Erro ao listar alunos"
        );
    }

    excluir(aluno: Aluno) {
        this.alunoService.excluir(aluno.id).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao excluir aluno",
            () => this.listar()
        );
    }

    cadastrar() {
        this.alunoService.cadastrar(this.aluno).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao cadastrar aluno",
            () => this.listar()
        );

        this.aluno = new Aluno();
    }

    editar(aluno: Aluno) {
        this.idEditar = aluno.id;
        this.aluno = aluno;
    }

    atualizar() {
        this.alunoService.atualizar(this.aluno).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao atualizar aluno",
            () => this.listar()
        );
        this.aluno = new Aluno();
        this.idEditar = -1;
    }

}