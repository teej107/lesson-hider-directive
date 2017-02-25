app.controller('lessonCtrl', function ($scope, lessonService)
{
    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    $scope.announceDay = function (lesson, day)
    {
        alert(day === undefined ? lesson + ' is not set for a date yet.' : lesson + ' is active on ' + day + '.');
    }
    $scope.remove = function (index)
    {
        $scope.lessons.splice(index, 1);
    }
});