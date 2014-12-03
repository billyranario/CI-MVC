app
	.factory('getServerData' , [
		function factory ( ) {
			return {
				url: 'http://localhost/ci_mvc/index.php/',
				header: {
					headers : {
						'Content-Type': 'application/json'
					}
				}
			}
		}
	] )
	.factory('getGraduates' , [
		"$http",
		"getServerData",
		function factory ( $http , getServerData ) {
			return {
				get: function get ( callback ) {
					$http.get(getServerData.url + 'api/get/graduates')
					.success( function onSuccess ( response ) {						
						callback( response );
					} );
				}
			};
		}
	] );