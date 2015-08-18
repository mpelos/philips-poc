(function(angular) {
  "use strict";

  angular.module("controllers.equipmentList", ["services.equipment"])

    .controller("EquipmentListController", function($scope, equipmentService) {
      $scope.equipments = equipmentService.list();
    });

})(window.angular);
