angular.module('minhasDiretivas',[])
.directive('meuPainel', function() {

	/*dynamic directive object*/
	var ddo = {};

	ddo.restric = "AE"; //atribute element

	//create isolated directive to be independentment anywhere
	ddo.scope = {
		titulo: '@' //same name tag only use @
	};

	//keep child elements of directive
	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';
		
	return ddo;
})
.directive('minhaFoto', function() {
	var ddo = {};
	ddo.restric = "AE";
	ddo.scope = {
		titulo: '@',
		url: '@'
	};
	ddo.templateUrl = 'js/directives/minha-foto.html';
	return ddo;
})
.directive('dangerButton', function() {
	var ddo = {}
	ddo.restric = "E";

	ddo.scope = {
		nome: '@',
		acao: '&' //to expression
	};

	ddo.template = ' <button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

	return ddo;
});
