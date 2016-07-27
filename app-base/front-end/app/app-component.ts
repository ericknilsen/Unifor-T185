import {Component} from 'angular2/core';
import {FormAlunoComponent} from './form-aluno-component';


@Component({
  selector: 'meu-app',
  template: '<form-aluno></form-aluno>',
  directives: [FormAlunoComponent]
})
export class AppComponent{}