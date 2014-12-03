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
	] );