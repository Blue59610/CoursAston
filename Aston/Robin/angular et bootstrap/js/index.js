var app = angular.module("myApp", [])
.controller("myCtrl", function($scope)
{
    $scope.prenom = "Robin";
    $scope.nom = "Fromentin";
    $scope.tab = new Array();

   $scope.number = 0;
   $scope.isOk = true;
   $scope.negative = false;
   var operateur = "+";
   var coef = 1;
   $scope.actionLabel = "Ajouter";

   $scope.action = function()
   {
     if (!isNaN(parseInt($scope.choice)))
     {
       var number_temp = $scope.number;
       $scope.number =  $scope.number + parseInt($scope.choice) * coef;
       $scope.tab.push({firstNumber: number_temp, operator: operateur, secondNumber: $scope.choice, result: $scope.number});
     }
   }

   $scope.verify = function()
   {
     if (!isNaN(parseInt($scope.choice)) || $scope.choice.length == 0)
     {
       $scope.isOk = true;
     }
     else
     {
       $scope.isOk = false;
     }
   }

   $scope.checkChange = function()
   {
     var doc = document.getElementById("remove");

     if(doc.checked == true)
     {
       $scope.negative = true;
       coef = -1;
       operateur = "-";
       $scope.actionLabel = "Retirer";
     }
     else
     {
       $scope.negative = false;
       coef = 1;
       operateur = "+";
       $scope.actionLabel = "Ajouter";
     }
   }
});
