angular.module('app').controller('MainController', function(){
	var vm = this;
	vm.title = "AngularJS";
	vm.searchInput = '';
	vm.shows = [
		{title: 'Juegos ', year: 2011, favorite: true},
		{title: 'Televisión ', year: 1999, favorite: false},
		{title: 'Películas ', year: 2013, favorite: true},
		{title: 'Series ', year: 2014, favorite: true},
		{title: 'Novelas ', year: 1996, favorite: true},
		{title: 'Cortometrajes ', year: 1987, favorite: false},
	];

	vm.orders = [
		{id: 1, title: 'Año ascendente', key: 'year', reverse: false},
		{id: 2, title: 'Año descendente', key: 'year', reverse: true},
		{id: 3, title: 'Título ascendente', key: 'title', reverse: false},
		{id: 4, title: 'Título descendente', key: 'title', reverse: true}
	];

	vm.order = vm.orders[0];

	vm.new = {};
	vm.addShow = function(){
		vm.shows.push(vm.new);
		vm.new = {};
	};
});