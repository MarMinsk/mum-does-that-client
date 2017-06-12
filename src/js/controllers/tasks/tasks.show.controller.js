angular
.module('MarketApp')
.controller('TasksShowCtrl', TasksShowCtrl);

TasksShowCtrl.$inject = ['Task', '$stateParams', '$state'];

function TasksShowCtrl (Task, $stateParams, $state) {
  const vm = this;

  vm.task = Task.get({ id: $stateParams.id });

  function tasksDelete(task) {
    console.log('task delete clicked');
    Task
      .remove({id: task.id})
      .$promise
      .then(() => {
        $state.go('tasksIndex');
      });
  }
  vm.delete = tasksDelete;
}
