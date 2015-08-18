(function(angular) {
  "use strict";

  angular.module("models.equipmentImage", [])

    .factory("EquipmentImage", function() {
      function EquipmentImage(params) {
        if (!params) params = {};

        this.id = params.id;
        this.name = params.name;
        this.category = params.category;
        this.image = params.image;
        this.equipmentId = params.equipmentId;
      }

      EquipmentImage.fromJSON = function(json) {
        if (!json) json = {};

        return new EquipmentImage({
          id: json.id,
          name: json.name,
          category: json.category,
          image: json.image,
          equipmentId: json.equipment_id
        });
      };

      return EquipmentImage;
    });

})(window.angular);
