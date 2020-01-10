App.controller('ContactInfoController', [
    '$scope', 'contactsService', '$route', function ($scope, contactsService, $route) {

        $scope.contact = {};

        $scope.init = function () {
            contactsService.getContactInfo($route.current.params.id)
             .then(function (response) {
                $scope.contact = response.data;
            }).catch(function (err) {
                console.error(err);
            })
        }
    }
]);
