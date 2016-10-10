geodash.directives["geodasheditorModalWelcome"] = function(){
  return {
    controller: geodash.controllers.GeoDashControllerModalEditorWelcome,
    restrict: 'EA',
    replace: true,
    scope: true,
    templateUrl: 'modal_editor_welcome.tpl.html',
    link: function ($scope, $element, attrs)
    {
      setTimeout(function(){
        geodash.init.typeahead($element);
        $scope.welcome();
      }, 10);

    }
  };
};
