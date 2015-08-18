(function(angular) {
  "use strict";

  angular.module("services.equipmentAssociationBinder", [
    "services.equipmentImage",
    "services.exam"
  ])

    .service("equipmentAssociationBinder", function(
      equipmentImageService,
      examService
    ) {
      this.bindAssociations = function(equipment) {
        equipment.exams = equipment.examIds.map(function(id) {
          return examService.findById(id);
        });

        equipment.images = equipment.imageIds.map(function(id) {
          return equipmentImageService.findById(id)
        });
      };
    });

})(window.angular);
