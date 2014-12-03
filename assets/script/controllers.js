app
	.controller('loginController' , [
		"$scope",
		"$http",
		"getServerData",
		function controller ( $scope , $http , getServerData ) {
			$scope.user;

			$scope.submitted = function submitted ( ) {
				$http.post( getServerData.url + 'login/auth' , $scope.user )
				.success( function onSuccess ( response ) {
					if ( response.status ) {
						window.location = getServerData.url + 'home';
					}else {
						$scope.user = {};
					}
				} );
			};
		}
	] )
	.controller('postController' , [
		"$scope",
		"$http",
		"getServerData",
		function controller ( $scope , $http , getServerData ) {
			$scope.posts = [];			

			$http.get(getServerData.url + 'api/get/posts')
			.success( function onSuccess ( response ) {
				$scope.posts = response;				
			} );

			$scope.main.$on( 'add-post' , 
				function on ( evt , data ) {
					$scope.posts.unshift( data );					
				} );
		}
	] )
	.controller('addPostController' , [
		"$scope",
		"$http",
		"getServerData",
		function controller ( $scope , $http , getServerData ) {			
			$scope.postNow = function postNow ( ) {
				$http.post(getServerData.url + 'api/post/add' , $scope.post )
				.success ( function onSuccess ( response ) {
					$scope.main.$broadcast( 'add-post' , response );
					$scope.post = {};
				} );
			};	
		}
	] )
	.controller('navController' , [
		"$scope",
		"$http",
		"getServerData",
		function controller ( $scope , $http , getServerData ) {			
			$scope.nav = function nav ( tab ) {
				$scope.main.$broadcast( "hide" );
				if ( tab == 1 ) {					
					$scope.main.$broadcast( "show-notification" );
				}else if ( tab == 2 ) {
					$scope.main.$broadcast( "show-list" );					
				}else if ( tab == 3 ) {
					$scope.main.$broadcast( "show-add" );
				}
			};
		}
	] );
