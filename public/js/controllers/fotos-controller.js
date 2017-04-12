angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){
	
	//array fotos
	$scope.fotos = [];

	//filter
	$scope.filtro = "";

	//mesage
	$scope.mensagem = "";

	// var recursoFoto = $resource('v1/fotos/:fotoId');

	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	}, function(erro){
		console.log(erro);
	});

	//get info on backend
	// var promise = $http.get('v1/fotos')
	// .success(function(fotos){
	// 	$scope.fotos = fotos;
	// }).error(function(erro){
	// 	console.log(erro);
	// });

	$scope.remover = function(foto) {
		recursoFoto.delete({fotoId : foto._id}, function() {
			var i = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(i, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;
		});
	};
	//remove
	// $scope.remover = function(foto) {
	// 	$http.delete('v1/fotos/' + foto._id)
	// 	.success(function(){
	// 		var i = $scope.fotos.indexOf(foto);
	// 		$scope.fotos.splice(i, 1);
	// 		$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
	// 	})
	// 	.error(function(erro){
	// 		console.log(erro);
	// 		$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;
	// 	});
	// };


});