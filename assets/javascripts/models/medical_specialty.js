(function(angular) {
  "use strict";

  angular.module("models.medicalSpecialty", [])

    .factory("MedicalSpecialty", function() {
      function MedicalSpecialty(params) {
        if (!params) params = {};

        this.id = params.id;
        this.name = params.name;
        this.subtitle = params.subtitle;
        this.description = params.description;
        this.icon = params.icon;
        this.color = params.color;
        this.examIds = params.examIds;
        this.defaultExamsIds = params.defaultExamsIds;
      }

      MedicalSpecialty.fromJSON = function(json) {
        if (!json) json = {};

        return new MedicalSpecialty({
          id: json.id,
          name: json.name,
          subtitle: json.subtitle,
          description: json.description,
          icon: json.icon,
          color: json.color,
          examIds: json.exam_ids,
          defaultExamsIds: json.default_exam_ids
        });
      };

      return MedicalSpecialty;
    });

})(window.angular);
