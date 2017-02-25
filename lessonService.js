app.service('lessonService', function ($q, $http)
{
    var data = null;
    this.getSchedule = function ()
    {
        var deferrer = $q.defer();
        if(data === null)
        {
            $http({
                method: 'GET',
                url: 'schedule.json'
            }).then(function (result)
            {
                data = result.data;
                deferrer.resolve(data);
            });
        }
        else
        {
            deferrer.resolve(data);
        }
        return deferrer.promise;
    }
});