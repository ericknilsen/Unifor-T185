import { RouterConfig } from '@angular/router'; 
import { LoginComponent } from './login-component';
import { LogoutComponent } from './logout-component';
//import { LoginGuard } from '../../login-guard';
import { LoginService } from '../../services/login-service';

export const LoginRoutes: RouterConfig = [
	{ path: 'login', component: LoginComponent }, 
	{ path: 'logout', component: LogoutComponent }
];

//export const AUTH_PROVIDERS = [ LoginGuard, LoginService ];