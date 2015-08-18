(function(angular) {
  "use strict";

  angular.module("services.medicalSpecialty", ["models.medicalSpecialty"])

    .service("medicalSpecialtyService", function(MedicalSpecialty) {
      var medicalSpecialties;

      this.loadData = function(medicalSpecialtiesData) {
        medicalSpecialties = medicalSpecialtiesData.map(function(medicalSpecialtyData) {
          return MedicalSpecialty.fromJSON(medicalSpecialtyData);
        });

        return medicalSpecialties;
      };

      this.findById = function(id) {
        return medicalSpecialties.find(function(medicalSpecialty) {
          return medicalSpecialty.id == id;
        });
      };
    });

})(window.angular);
