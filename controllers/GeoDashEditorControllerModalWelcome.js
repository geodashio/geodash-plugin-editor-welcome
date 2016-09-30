geodash.controllers["controller_modal_geodasheditor_welcome"] = function($scope, $element, $controller, $interpolate)
{
  angular.extend(this, $controller('GeoDashControllerModal', {$element: $element, $scope: $scope}));
  var m = $.grep(geodash.meta.modals, function(x, i){ return x['name'] == 'geodasheditor_welcome';})[0];
  $scope.config = m.config;
  $scope.ui = m.ui;
  $scope.html5data = geodasheditor.html5data;
  $scope.updateValue = geodash.api.updateValue;
  $scope.showOptions = geodash.ui.showOptions;

  $scope.welcome = function()
  {
    var scope = geodash.api.getScope("geodash-main");
    var intentData = {
      "id": "geodash-modal-geodasheditor-welcome",
      "modal": {
        "backdrop": "static",
        "keyboard": false
      },
      "dynamic": {},
      "static": {
        "welcome": extract("welcome", scope.config || scope.map_config)
      }
    };
    geodash.api.intend("toggleModal", intentData, scope);
  };

  $scope.link_go = function()
  {
    if(angular.isString($scope.dashboard) && $scope.dashboard.length > 0)
    {
      var template = geodash.api.getPage("dashboard");
      if(template != undefined)
      {
        return $interpolate(template)({ 'slug': $scope.dashboard });
      }
      else
      {
        geodash.log.error("controller_modal_geodasheditor_welcome", 'Could not find object for page "dashboard".');
        return "#";
      }
    }
    else
    {
      return "#";
    }
  };
};
