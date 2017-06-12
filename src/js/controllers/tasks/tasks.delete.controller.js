angular
  .module('MarketApp')
  .controller('TasksDeleteCtrl', TasksDeleteCtrl);

TasksDeleteCtrl.$inject = ['Task', '$state'];
function TasksDeleteCtrl(Task, $state) {

  var vm = this;
  vm.task = Task;


}
