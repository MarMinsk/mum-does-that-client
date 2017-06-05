angular
.module('MarketApp')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state) {
  const vm    = this;

  vm.register = () => {
    console.log('clicked');
    User
      .register(vm.user).$promise
      .then(() => {
        CurrentUserService.getUser();
        $state.go('usersIndex');
      }, err => {
        console.log(err);
      });
  };
}
