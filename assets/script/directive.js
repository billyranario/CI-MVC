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
	] );