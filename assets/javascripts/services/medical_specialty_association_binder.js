(function(angular) {
  "use strict";

  angular.module("services.medicalSpecialtyAssociationBinder", ["services.exam"])

    .service("medicalSpecialtyAssociationBinder", function(examService) {
      this.bindAssociations = function(medicalSpecialty) {
        medicalSpecialty.exams = medicalSpecialty.examIds.map(function(id) {
          return examService.findById(id);
        });
      };
    });

})(window.angular);
