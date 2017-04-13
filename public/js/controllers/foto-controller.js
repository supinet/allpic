angular.module('alurapic').controller('FotoController', function($scope, cadastroDeFotos, recursoFoto, $routeParams) {

	$scope.foto = {};
	$scope.mensagem = '';

	// var recursoFoto = $resource('v1/fotos/:fotoId', null, {
	// 	update : {
	// 		method : 'PUT'
	// 	}
	// });

	if($routeParams.fotoId) {
		recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto) {
			$scope.foto = foto;
		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possível obter a foto' + $routeParams.fotoId; 
		});
	}

	$scope.submeter = function() {
		if($scope.formulario.$valid){
			// if($scope.foto._id) {

			// 	recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function(){
			// 		$scope.mensagem = 'A foto ' + $scope.foto.titulo + ' alterada com sucesso' ;
			// 	}, function(erro) {
			// 		console.log(erro);
			// 		$scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo; 
			// 	});
			// } else {
			// 	recursoFoto.save($scope.foto, function() {
			// 		$scope.foto = {};
			// 		$scope.mensagem = 'Foto incluída com sucesso';
			// 	}, function(erro) {
			// 		$scope.mensagem = 'Não foi possível incluir a Foto';
			// 		console.log(erro);
			// 	});
			// }

			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) $scope.foto = {};
				$scope.focado = true;
			})
			.catch(function(dados){
				$scope.mensagem = dados.mensagem;
			})
		}
	};
});