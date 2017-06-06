angular
.module('MarketApp')
.controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['$stateParams', '$state', 'User'];
function UsersEditCtrl($stateParams, $state, User) {
  const vm    = this;

  vm.user     = User.get($stateParams);
  console.log('USERS EDIT PAGE', vm.user);
  vm.update   = usersUpdate;

  function usersUpdate() {
    User
      .update({ id: $stateParams.id }, vm.user)
      .$promise
      .then(user => {
        $state.go('usersShow', { id: user._id });
      });

  }
}
