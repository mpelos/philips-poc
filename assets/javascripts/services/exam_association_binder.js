(function(angular) {
  "use strict";

  angular.module("services.examAssociationBinder", ["services.equipment"])

    .service("examAssociationBinder", function(equipmentService) {
      this.bindAssociations = function(exam) {
        exam.equipments = exam.equipmentIds.map(function(id) {
          return equipmentService.findById(id);
        });
      };
    });

})(window.angular);
