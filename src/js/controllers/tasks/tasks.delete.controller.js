angular
  .module('MarketApp')
  .controller('TasksDeleteCtrl', TasksDeleteCtrl);

TasksDeleteCtrl.$inject = ['task', '$state'];
function TasksDeleteCtrl(task, $state) {
  var vm = this;
  vm.task = task;

  function tasksDelete() {
    vm.task
      .$remove()
      .then(() => {
        $state.go('home');
      });
  }

  vm.delete = tasksDelete;
}
