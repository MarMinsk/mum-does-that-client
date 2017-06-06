angular
.module('MarketApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams'];

function UsersShowCtrl (User, $stateParams) {
  const vm = this;

  vm.user = User.get({ id: $stateParams.id });

}
