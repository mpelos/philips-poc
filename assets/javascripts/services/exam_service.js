(function(angular) {
  "use strict";

  angular.module("services.exam", ["models.exam"])

    .service("examService", function(Exam) {
      var exams = [];

      this.loadData = function(examsData) {
        exams = examsData.map(function(examData) {
          return Exam.fromJSON(examData);
        });

        return exams;
      };

      this.findById = function(id) {
        return exams.find(function(exam) {
          return exam.id == id;
        });
      };
    });

})(window.angular);
