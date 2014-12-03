app
	.directive('main' , [
		function directive ( ) {
			return {
				"restrict": "A",
				"scope": true,				
				"link": function onLink ( scope , element , attributeSet ) {
					scope.main = scope;					
				}
			}
		}
	] )
	.directive('loginAuth' , [
		function directive ( ) {
			return {
				"restrict": "A",
				"scope": true,
				"controller": "loginController",				
				"link": function onLink ( scope , element , attributeSet ) {
				}
			}
		}
	] )
	.directive('wallArea' , [
		function directive ( ) {
			return {
				"restrict": "A",
				"scope": true,
				"templateUrl": "/ci_mvc/assets/template/wall-area.html",
				"controller": "postController",
				"link": function onLink ( scope , element , attributeSet ) {					
				}
			}
		}
	] )
	.directive('wallPost' , [
		function directive ( ) {
			return {
				"restrict": "A",
				"scope": true,
				"controller": "addPostController",
				"link": function onLink ( scope , element , attributeSet ) {					
				}
			}
		}
	] )
	.directive('navigator' , [
		function directive ( ) {
			return {
				"restrict": "A",
				"scope": true,
				"controller": "navController",
				"templateUrl": "/ci_mvc/assets/template/navigator.html"
			}
		}
	] )
	.directive('notification', [
		function directive ( ) {
			return {
				"restrict": "A",
				"scope": true,
				"controller": "navController",
				"templateUrl": "/ci_mvc/assets/template/notification.html",
				"link": function onLink ( scope , element , attributeSet ) {					
					element.addClass( "hidden" );
					scope.main.$on( 'show-notification' , 
						function on ( ) {
							element.removeClass( "hidden" );
						} );

					scope.main.$on( 'hide' , 
						function on ( ) {
							element.addClass( "hidden" );
						} );
				}
			}
		}
	] )
	.directive('listGraduates' , [
		"getGraduates",
		function directive ( getGraduates ) {
			return {
				"restrict": "A",
				"scope": true,
				"controller": "navController",
				"templateUrl": "/ci_mvc/assets/template/list-graduates.html",
				"link": function onLink ( scope , element , attributeSet ) {
					element.addClass( "hidden" );
					scope.main.$on( 'show-list' , 
						function on ( ) {
							element.removeClass( "hidden" );
							getGraduates.get( function ( list ) {
								scope.graduates = list;								
							} );
						} );

					scope.main.$on( 'hide' , 
						function on ( ) {
							element.addClass( "hidden" );													
						} );
				}
			}
		}
	] )
	.directive('addGraduates' , [
		function directive ( ) {
			return {
				"restrict": "A",
				"scope": true,
				"controller": "navController",
				"templateUrl": "/ci_mvc/assets/template/add-graduates.html",
				"link": function onLink ( scope , element , attributeSet ) {
					element.addClass( "hidden" );
					scope.main.$on( 'show-add' , 
						function on ( ) {
							element.removeClass( "hidden" );
						} );

					scope.main.$on( 'hide' , 
						function on ( ) {
							element.addClass( "hidden" );
						} );
				}
			}
		}
	] );