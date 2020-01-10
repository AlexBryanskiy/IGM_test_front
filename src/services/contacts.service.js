App.service('contactsService',
    ['$http', function ($http, apiBaseUrl) {
        this.getContactsList = function () {
            return $http.get(apiBaseUrl + "contacts");
        };

        this.getContactInfo = function (id) {
            return $http.get(apiBaseUrl + "contacts/" + id);
        };

        this.createContact = function (contact) {
            return $http.post(apiBaseUrl + "contacts", JSON.stringify(contact));
        };

        this.updateContact = function (contact) {
            return $http.put(apiBaseUrl + "contacts/" + contact.id, JSON.stringify(contact));
        };

        this.deleteContact = function (id) {
            return $http.delete(apiBaseUrl + "contacts/" + id);
        };
      }
    ]
);
