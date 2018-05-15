var app = angular.module("app", []);

app.controller('mainCtrl', function($scope){
	$scope.generateBanner = generateBanner;
	function generateBanner() {
		domtoimage.toBlob(document.getElementById('wrapper'))
	    .then(function(blob) {
	      console.log("blob", blob)
	      window.saveAs(blob, 'my-node.png');
	    });
	}
})
