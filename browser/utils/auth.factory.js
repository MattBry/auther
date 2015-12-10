app.factory('Auth', function($http){
	var Auth = {};

	Auth.signup = function(payload){
		$http.post('/auth/signup', payload)
		.then(function(response){
			console.log(response);
		})
	}

	Auth.login = function(payload){
		$http.post('/auth/login', payload)
		.then(function(response){
			console.log(response);
		})
	}
	return Auth;
})