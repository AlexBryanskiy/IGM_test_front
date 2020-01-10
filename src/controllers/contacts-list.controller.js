App.controller('ContactsListController', [
    '$scope', '$location', 'contactsService', function ($scope, $location, contactsService) {

        $scope.contactList = [];

        $scope.openCreatePage = function () {
            $location.path('/create');
        };

        $scope.openContactInfo = function (id) {
            console.log(id, 'id');
            $location.path('/' + id);
        };

        $scope.openUpdatePage = function (id) {
            $location.path('/update/' + id);
        };

        $scope.deleteContact = function (id) {
            contactsService.deleteContact(id)
                .then(function () {
                    console.log("Contact successfully deleted")
                }).catch(function (err) {
                console.error(err);
            })
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
