App.controller('ContactUpdateController', [
    '$scope', 'contactsService', '$location', '$route', function ($scope, contactsService, $location, $route) {

        $scope.contact = {};

        $scope.init = function () {
            contactsService.getContactInfo($route.current.params.id)
                .then(function (response) {
                    $scope.contact = response.data;
                }).catch(function (err) {
                console.error(err);
            })
        };

        $scope.submitForm = function () {
            contactsService.updateContact($scope.contact)
                .then(function () {
                    $location.path('/');
                });
        }
    }
]);
