<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Welcome To FaceMo</title>
</head>
<body main>
	<h1>Talk to the Wall</h1>

	<section
		wall-area>
	</section>

	<section wall-post>
		Name: <input type="text" ng-model="post.user" /><br />
		Caption: <textarea ng-model="post.caption"></textarea><br />
		<input type="submit" ng-click="postNow()" value="Post" />
	</section>

	<script type="text/javascript" src="<?php echo base_url('assets/library/jquery.min.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/library/angular.min.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/library/lodash.min.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/script/app.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/script/factory.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/script/directive.js') ?>"></script>
	<script type="text/javascript" src="<?php echo base_url('assets/script/controllers.js') ?>"></script>
</body>
</html>