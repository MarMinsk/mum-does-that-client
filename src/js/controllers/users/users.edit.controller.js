angular
.module('MarketApp')
.controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', '$stateParams', '$state' ];
function UsersEditCtrl(User, $stateParams, $state) {
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
