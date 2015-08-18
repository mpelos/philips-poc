(function(angular) {
  "use strict";

  angular.module("services.equipment", ["models.equipment"])

    .service("equipmentService", function(Equipment) {
      var equipments;

      this.loadData = function(equipmentsData) {
        equipments = equipmentsData.map(function(equipmentData) {
          return Equipment.fromJSON(equipmentData);
        });

        return equipments;
      };

      this.findById = function(id) {
        return equipments.find(function(equipment) {
          return equipment.id == id;
        });
      };

      this.list = function() {
        return equipments;
      };
    });

})(window.angular);
