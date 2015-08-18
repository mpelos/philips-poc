(function(angular) {
  "use strict";

  angular.module("models.equipment", [])

    .factory("Equipment", function() {
      function Equipment(params) {
        if (!params) params = {};

        this.id = params.id;
        this.name = params.name;
        this.portable = params.portable;
        this.description = params.description;
        this.proposal = params.proposal;
        this.competitorIds = params.competitorIds;
        this.transducerIds = params.transducerIds;
        this.softwareIds = params.softwareIds;
        this.examIds = params.examIds;
        this.imageIds = params.imageIds;
        this.kitIds = params.kitIds;
        this.documentIds = params.documentIds;
        this.videoIds = params.videoIds;
      }

      Equipment.fromJSON = function(json) {
        if (!json) json = {};

        return new Equipment({
          id: json.id,
          name: json.name,
          portable: json.portable,
          description: json.description,
          proposal: json.proposal,
          competitorIds: json.competitor_ids,
          transducerIds: json.transducer_ids,
          softwareIds: json.software_ids,
          examIds: json.exam_ids,
          imageIds: json.image_ids,
          kitIds: json.kit_ids,
          documentIds: json.document_ids,
          videoIds: json.video_ids
        });
      };

      return Equipment;
    });

})(window.angular);
