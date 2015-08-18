(function(angular) {
  "use strict";

  angular.module("models.exam", [])

    .factory("Exam", function() {
      function Exam(params) {
        if (!params) params = {};

        this.id = params.id;
        this.description = params.description;
        this.defaultExam = params.defaultExams;
        this.name = params.name;
        this.medicalSpecialtyId = params.medicalSpecialtyId;
        this.parentId = params.parentId;
        this.portableEquipment = params.portableEquipment;
        this.transducerIds = params.transducerIds;
        this.softwareIds = params.softwareIds;
        this.equipmentIds = params.equipmentIds;
      }

      Exam.fromJSON = function(json) {
        if (!json) json = {};

        return new Exam({
          id: json.id,
          description: json.description,
          defaultExam: json.defaultExams,
          name: json.name,
          medicalSpecialtyId: json.medical_specialty_id,
          parentId: json.parent_id,
          portableEquipment: json.portable_equipment,
          transducerIds: json.transducer_ids,
          softwareIds: json.software_ids,
          equipmentIds: json.equipment_ids
        });
      };

      return Exam;
    });

})(window.angular);
