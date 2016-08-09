import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';

@Injectable()
export class AlunoService {

	listarTodos() {
		var alunos:string = sessionStorage['alunos'];
		return alunos ? JSON.parse(alunos) : [];
	}

	cadastrar(aluno: Aluno) {
		var alunos:Aluno[] = this.listarTodos();
		alunos.push(aluno);
		sessionStorage['alunos'] = JSON.stringify(alunos);
	}

	atualizar(id: number, aluno: Aluno) {
		var alunos:Aluno[] = this.listarTodos();
		alunos[id].nome = aluno.nome;
		alunos[id].email = aluno.email;
		sessionStorage['alunos'] = JSON.stringify(alunos);
	}

	excluir(id: number) {
		var alunos:Aluno[] = this.listarTodos();
		alunos.splice(id, 1);
		sessionStorage['alunos'] = JSON.stringify(alunos);
	}

	buscarPorId(id: number) {
		var alunos:Aluno[] = this.listarTodos();
		return alunos[id];
	}
}