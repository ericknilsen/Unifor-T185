"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const login_service_1 = require('../../services/login-service');
let LoginComponent = class LoginComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.usuario = 'admin';
        this.senha = 'admin';
    }
    logar() {
        this.loginService.logar();
        this.router.navigate(['']);
    }
};
LoginComponent = __decorate([
    core_1.Component({
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
        providers: [login_service_1.LoginService]
    }), 
    __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login-component.js.map