System.register([], function(exports_1) {
    var Aluno;
    return {
        setters:[],
        execute: function() {
            Aluno = (function () {
                function Aluno(id, nome, email, idade, curso) {
                    this.id = id;
                    this.nome = nome;
                    this.email = email;
                    this.idade = idade;
                    this.curso = curso;
                }
                return Aluno;
            })();
            exports_1("Aluno", Aluno);
        }
    }
});
//# sourceMappingURL=aluno.js.map