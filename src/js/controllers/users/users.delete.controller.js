angular
  .module('MarketApp')
  .controller('UsersDeleteCtrl', UsersDeleteCtrl);

UsersDeleteCtrl.$inject = ['user', '$state'];
function UsersDeleteCtrl(user, $state) {
  var vm = this;
  vm.user = user;

  function usersDelete() {
    vm.user
      .$remove()
      .$promise
      .then(() => {
        $state.go('home');
      });
  }

  vm.delete = usersDelete;
}
