angular.module("config.jsonData", [
  "services.equipment",
  "services.equipmentAssociationBinder",
  "services.equipmentImage",
  "services.exam",
  "services.examAssociationBinder",
  "services.medicalSpecialty",
  "services.medicalSpecialtyAssociationBinder"
]);

function loadData(json) {
  angular.module("config.jsonData").constant("JSON", json);
}

angular.module("config.jsonData").run(function(
  equipmentAssociationBinder,
  equipmentImageService,
  equipmentService,
  examAssociationBinder,
  examService,
  JSON,
  medicalSpecialtyAssociationBinder,
  medicalSpecialtyService
) {
  var medicalSpecialties = medicalSpecialtyService.loadData(JSON.medical_specialties),
      exams = examService.loadData(JSON.exams),
      equipments = equipmentService.loadData(JSON.equipment),
      equipmentImages = equipmentImageService.loadData(JSON.equipment_images);

  medicalSpecialties.forEach(function(medicalSpecialty) {
    medicalSpecialtyAssociationBinder.bindAssociations(medicalSpecialty);
  });

  exams.forEach(function(exam) {
    examAssociationBinder.bindAssociations(exam);
  });

  equipments.forEach(function(equipment) {
    equipmentAssociationBinder.bindAssociations(equipment);
  });
});
