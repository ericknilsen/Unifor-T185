System.register([], function(exports_1) {
    var EmailValidator;
    return {
        setters:[],
        execute: function() {
            EmailValidator = (function () {
                function EmailValidator() {
                }
                EmailValidator.validate = function (control) {
                    if (EmailValidator.EMAIL_REGEX.test(control.value)) {
                        return null;
                    }
                    return { 'email': true };
                };
                EmailValidator.EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                return EmailValidator;
            })();
            exports_1("EmailValidator", EmailValidator);
        }
    }
});
//# sourceMappingURL=email-validator.js.map