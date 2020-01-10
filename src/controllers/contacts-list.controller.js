App.controller('ContactsListController', [
    '$scope', '$location', 'contactsService', function ($scope, $location, contactsService) {

        $scope.contactList = [];

        $scope.openCreatePage = function () {
            $location.path('/create');
        };

        $scope.init = function () {
            contactsService.getContactsList().then(function (response) {
               $scope.contactList = response.data;
            }).catch(function (err) {
                console.error(err);
            })
        }
    }
]);
