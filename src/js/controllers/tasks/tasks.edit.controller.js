angular
.module('MarketApp')
.controller('TasksEditCtrl', TasksEditCtrl);

TasksEditCtrl.$inject = ['Task', '$stateParams', '$state' ];
function TasksEditCtrl(Task, $stateParams, $state) {
  const vm    = this;

  vm.user     = Task.get($stateParams);
  console.log('TASKS EDIT PAGE', vm.task);
  vm.update   = tasksUpdate;

  function tasksUpdate() {
    Task
      .update({ id: $stateParams.id }, vm.task)
      .$promise
      .then(task => {
        $state.go('tasksShow', { id: task.id });
      });

  }
}
