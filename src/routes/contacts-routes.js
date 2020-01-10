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
        .when('/:id',
            {
                controller: 'ContactInfoController',
                templateUrl: 'src/templates/contact-info.html'
            }
        )
        .when('/update/:id',
            {
                controller: 'ContactUpdateController',
                templateUrl: 'src/templates/contact-update.html'
            }
        )
        .otherwise( { redirectTo: '/' } );
});
