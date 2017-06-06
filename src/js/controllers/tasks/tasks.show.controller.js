angular
.module('MarketApp')
.controller('TasksShowCtrl', TasksShowCtrl);

TasksShowCtrl.$inject = ['Task', '$stateParams'];

function TasksShowCtrl (Task, $stateParams) {
  const vm = this;

  vm.task = Task.get({ id: $stateParams.id });

}
