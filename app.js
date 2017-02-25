var app = angular.module('directivePractice', []);

app.directive('lessonHider', function ()
{
    return {
        templateUrl: 'lessonHider.html',
        restrict: 'E',
        scope: {
            lesson: '=',
            dayAlert: '&',
            remove: '&',
            i: '@'
        },
        controller: function ($scope, $timeout, lessonService)
        {
            $scope.getSchedule = lessonService.getSchedule;
        },
        link: function (scope, element, attr)
        {
            scope.getSchedule().then(function (result)
            {
                scope.schedule = result;
                scope.schedule.some(function (e)
                {
                    if (e.lesson === scope.lesson)
                    {
                        //element.css('text-decoration', 'line-through');
                        scope.lessonDay = e.weekday;
                        scope.strikethrough = {'text-decoration': 'line-through'};
                        return true;
                    }
                    return false;
                });
            });
            scope.updateView = function ()
            {
                scope.strikethrough = scope.strikethrough ? null : {'text-decoration': 'line-through'}
            }
        }
    };
});