angular
.module('MarketApp')
.controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', 'Skill', '$stateParams', '$state' ];
function UsersEditCtrl(User, Skill, $stateParams, $state) {
  const vm    = this;

  User
  .get($stateParams)
  .$promise
  .then(user => {
    vm.user = user;
    vm.user.skill_ids = vm.user.skills.map(skill => skill.id);
  }, err => {
    console.error(err);
  });

  vm.skills   = Skill.query();

  vm.update   = usersUpdate;

  function usersUpdate() {
    User
      .update({ id: $stateParams.id }, { user: vm.user })
      .$promise
      .then(user => {
        $state.go('usersShow', { id: user.id });
      });

  }

  vm.increaseSkillCount = () => {
    vm.user.skill_ids.push(undefined);
  };

  vm.decreaseSkillCount = () => {
    vm.user.skill_ids.pop();
  };
}
