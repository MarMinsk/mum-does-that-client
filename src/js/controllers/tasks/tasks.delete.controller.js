angular
  .module('MarketApp')
  .controller('TasksDeleteCtrl', TasksDeleteCtrl);

TasksDeleteCtrl.$inject = ['Task', '$state'];
function TasksDeleteCtrl(Task, $state) {

  var vm = this;
  vm.task = Task;

  function tasksDelete(task) {
    console.log('task delete clicked');
    vm.task
      .$remove({id: task.id})
      .$promise
      .then(() => {
        $state.go('tasksIndex');
      });
  }
  vm.delete = tasksDelete;
}
