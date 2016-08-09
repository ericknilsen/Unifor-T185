import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';

@Component({
	selector: 'logout',
	template: '',
	providers: [ LoginService ]
})
export class LogoutComponent implements OnInit {

	constructor(private router: Router, private loginService: LoginService) {
	}

	ngOnInit() {
		this.sair();
	}

	sair() {
		this.loginService.sair();
		this.router.navigate(['/login']);
	}
}