angular
.module('MarketApp')
.controller('TaskNewCtrl', TaskNewCtrl);

TaskNewCtrl.$inject = ['Task', '$state'];

function TaskNewCtrl (Task, $state) {
  const vm = this;
  vm.create= taskCreate;
  function taskCreate(){
    Task
      .save(vm.task)
      .$promise
      .then(() => {
        $state.go('tasksIndex');
      })
      .catch(err => {
        console.log(err);
      });
  }
}
