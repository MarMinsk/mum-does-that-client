angular
.module('MarketApp')
.controller('TasksNewCtrl', TaskNewCtrl);

TaskNewCtrl.$inject = ['Task', '$state', 'CurrentUserService'];

function TaskNewCtrl (Task, $state, CurrentUserService) {
  const vm = this;
  vm.create = taskCreate;
  function taskCreate(){
    vm.task.company_logo = CurrentUserService.currentUser.company_logo;
    console.log(vm.task);
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
