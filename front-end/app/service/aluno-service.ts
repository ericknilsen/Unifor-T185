import {Injectable} from 'angular2/core';
import {Aluno} from '../models/aluno';
import {Http, Headers, RequestOptions } from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class AlunoService {

    urlServico: string = "http://localhost:8080/ExemploRest/rest/alunos";

    constructor(private http: Http) {

    }

    listar() {
        return this.http.get(this.urlServico).map(res => res.json());
    }

    excluir(id: number) {
        let url = this.urlServico + '/' + id;
        return this.http.delete(url).map(res => res.text());
    }

    cadastrar(aluno: Aluno) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(aluno);
        return this.http.post(this.urlServico, body, options).map(res => res.text());
    }

    atualizar(aluno: Aluno) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(aluno);
        return this.http.put(this.urlServico, body, options).map(res => res.text());
    }

}
