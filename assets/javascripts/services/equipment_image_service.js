(function(angular) {
  "use strict";

  angular.module("services.equipmentImage", ["models.equipmentImage"])

    .service("equipmentImageService", function(EquipmentImage) {
      var equipmentImages;

      this.loadData = function(equipmentImagesData) {
        equipmentImages = equipmentImagesData.map(function(equipmentImageData) {
          return EquipmentImage.fromJSON(equipmentImageData);
        });

        return equipmentImages;
      };

      this.findById = function(id) {
        return equipmentImages.find(function(equipmentImage) {
          return equipmentImage.id == id;
        });
      };
    });

})(window.angular);
