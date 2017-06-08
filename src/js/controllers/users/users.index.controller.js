angular
.module('MarketApp')
.controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User', 'Skill'];
function UsersIndexCtrl(User, Skill) {
  const vm = this;

  vm.skills = Skill.query();
  vm.users = User.query();

  vm.selectedSkills = [];
  vm.skillCount = 0;

  vm.numberOfSkills = (n) => {
    return new Array(n);
  };

  vm.increaseSkillCount = () => {
    vm.skillCount++;
  };

  vm.decreaseSkillCount = () => {
    vm.selectedSkills.pop();
    if (vm.selectedSkills.length === 0) {
      vm.users = User.query();
    }
    vm.skillCount--;
  };

  vm.runFilter = () => {
    // Update the users with a filtered version of the users...
    // which will change the view with two-way data-binding
    vm.users = vm.users.filter(user => {
      // For each user, loop through their array of skills
      // Create a temporary count of the number of matching skills
      let skillMatch = 0;
      if (user.skills.filter(skill => {
        // Check if that skill id of theirs is included in the array of
        // skills that have been selected
        if (vm.selectedSkills.indexOf(skill.id) >= 0) {
          // If the skill has been matched, then increment the skillMatch count
          skillMatch++;
          return true;
        }
      }).length > 0) {
        // Add the skillMatch as a virtual property of the user
        return user.skillMatch = skillMatch;
      }
    }).sort((prevUser, nextUser) => {
      // Sort by the highest skillMatch count
      return nextUser.skillMatch - prevUser.skillMatch;
    });


  };
}
