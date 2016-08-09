import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';

@Component({
	selector: 'login',
	template: `
		<h1>Login</h1>
		<div class="well">
		    <form role="form">
		        <div class="form-group">
		            <label class="control-label" for="usuario">Usuário</label>
		            <input type="text" class="form-control" name="usuario" 
		                id="usuario" [(ngModel)]="usuario">
		        </div>
		        <div class="form-group">
		            <label class="control-label" for="senha">Senha</label>
		            <input type="password" class="form-control" name="senha" 
		                id="senha" [(ngModel)]="senha">
		        </div>
		        <div class="form-group text-center">
		            <button class="btn btn-success" (click)="logar()">
		                Entrar
		            </button>
		        </div>
		    </form>
		</div>`,
	providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

	private usuario: string;
	private senha: string;

	constructor(private router: Router, private loginService: LoginService) {
	}

	ngOnInit() {
		this.usuario = 'admin';
		this.senha = 'admin';
	}

	logar() {
		this.loginService.logar();
		this.router.navigate(['']);
	}
}