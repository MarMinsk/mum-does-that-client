angular
  .module('MarketApp')
  .factory('Task', TaskFactory);

TaskFactory.$inject = ['API', '$resource'];
function TaskFactory(API, $resource){
  return $resource(`${API}/tasks/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
