angular
  .module('MarketApp')
  .factory('Skill', SkillFactory);

SkillFactory.$inject = ['API', '$resource'];
function SkillFactory(API, $resource){
  return $resource(`${API}/skills/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
