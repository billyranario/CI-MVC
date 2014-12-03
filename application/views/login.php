<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Login</title>
</head>
<body>
	<h1>Login</h1>
	<form login-auth ng-submit="submitted()" method="post">
		Username: <input type="text" name="username" ng-model="user.username" /><br />
		Password: <input type="password" name="password" ng-model="user.password" /><br />
		<input type="submit" value="Login" />
	</form>

	<script type="text/javascript" src="<?php echo base_url('assets/library/jquery.min.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/library/angular.min.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/library/lodash.min.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/script/app.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/script/factory.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/script/directive.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/script/controllers.js') ?>"></script>	
</body>
</html>