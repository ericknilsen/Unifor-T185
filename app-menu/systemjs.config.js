/**
 * Arquivo de configuração do SystemJS, responsável por 
 * carregar os arquivos JS e dependências da aplicação.
 */
(function(global) {

  // mapeia onde o SystemJS deve buscar as dependências
  var map = {
    'app':      'app/js',
    '@angular': 'node_modules/@angular',
    'rxjs':     'node_modules/rxjs'
  };

  // mapeia os arquivos/extensões que o SystemJS deverá carregar
  var packages = {
    'app':  { main: 'main.js',  defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

  // nome dos pacotes/módulos a serem carregados pelo SystemJS
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Função utilizada para carregamento dos arquivos dinamicamente
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Função utilizada para carregamento dos arquivos UMD dinamicamente
  // UMD (Universal Module Definition) garante compatilidade entre módulos JS distintos
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Verifica se deve ser carregado arquivo UMD ou somente o index
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Itera e adiciona os arquivos do Angular 2
  ngPackageNames.forEach(setPackageConfig);

  // Configuração adicional para o carregamento do módulo de rotas
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
