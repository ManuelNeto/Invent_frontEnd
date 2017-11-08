angular.module('Invent').controller('ThingController', function($scope, $state, ThingFactory, $stateParams) {

	var myScope = $scope;

	$scope.thing;
    var idThing = $stateParams.idThing;
    
    myScope.getThing = function (id) {
        console.log(id);
        ThingFactory.getThing(id).then(function(result){
            console.log(result);
            $scope.thing = result;
        }).catch(function(result){
            console.log("Error");
        })
    };




    if($stateParams.idThing){
        myScope.getThing(idThing);
    }



	//go to any state
	myScope.goTo = function(state) {
		$state.go(state);
	};

	myScope.addThing = function(thing){
		ThingFactory.addThing(thing).then(function(result){
			console.log("Sucesso");
		}).catch(function(result){
			console.log("Error");
		})
	}

	$scope.currentThing = 'Cadeira';


});
