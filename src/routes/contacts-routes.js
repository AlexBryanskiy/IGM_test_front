App.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'ContactsListController',
                templateUrl: 'src/templates/contacts-list.html'
            }
        )
        .when('/create',
            {
                controller: 'ContactCreateController',
                templateUrl: 'src/templates/contact-create.html'
            }
        )
        .otherwise( { redirectTo: '/' } );
});
