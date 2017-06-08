angular
.module('MarketApp')
.controller('UsersContactCtrl', UsersContactCtrl);

UsersContactCtrl.$inject = ['User', '$stateParams', '$state' ];
function UsersContactCtrl(User, $stateParams, $state) {
  const vm    = this;

  vm.user     = User.get($stateParams);
  vm.contact   = usersContact;

  function usersContact() {
    User
      .submit({ id: $stateParams.id }, vm.user, vm.contact)
      .$promise
      .then(user => {
        $state.go('usersShow', { id: user.id });
      });

  }
}
