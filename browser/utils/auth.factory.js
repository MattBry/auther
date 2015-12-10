app.factory('Auth', function($http){
	var Auth = {};

	Auth.signup = function(email, password){
		$http.post('/auth/signup', { password: password, email: email })
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