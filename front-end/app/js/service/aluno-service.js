System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var AlunoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AlunoService = (function () {
                function AlunoService(http) {
                    this.http = http;
                    this.urlServico = "http://localhost:8080/ExemploRest/rest/alunos";
                }
                AlunoService.prototype.listar = function () {
                    return this.http.get(this.urlServico).map(function (res) { return res.json(); });
                };
                AlunoService.prototype.excluir = function (id) {
                    var url = this.urlServico + '/' + id;
                    return this.http.delete(url).map(function (res) { return res.text(); });
                };
                AlunoService.prototype.cadastrar = function (aluno) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var body = JSON.stringify(aluno);
                    return this.http.post(this.urlServico, body, options).map(function (res) { return res.text(); });
                };
                AlunoService.prototype.atualizar = function (aluno) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var body = JSON.stringify(aluno);
                    return this.http.put(this.urlServico, body, options).map(function (res) { return res.text(); });
                };
                AlunoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AlunoService);
                return AlunoService;
            })();
            exports_1("AlunoService", AlunoService);
        }
    }
});
//# sourceMappingURL=aluno-service.js.map