angular
.module('MarketApp')
.controller('TasksIndexCtrl', TasksIndexCtrl);

TasksIndexCtrl.$inject = ['Task'];
function TasksIndexCtrl(Task) {
  const vm = this;
  vm.tasks = Task.query();
}
