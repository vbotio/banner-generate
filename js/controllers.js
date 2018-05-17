var app = angular.module("app", []);

app.controller('mainCtrl', function($scope){
	$scope.bg = 1;
	$scope.generateBanner = generateBanner;
	function generateBanner() {
		domtoimage.toBlob(document.getElementById('wrapper'))
	    .then(function(blob) {
	      console.log("blob", blob)
	      window.saveAs(blob, 'my-node.png');
	    });
	}
})
