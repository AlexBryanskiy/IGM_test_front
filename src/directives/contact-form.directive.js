App.directive('contactForm', function () {
    return {
        restrict: 'E',
        scope: {
            ngModel: '='
        },
        template: `
<!--        <form>-->
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" ng-model="ngModel.firstName">
          </div>
         <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" ng-model="ngModel.lastName">
          </div>
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" class="form-control" id="fullName" ng-model="ngModel.fullName">
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input type="text" class="form-control" id="phoneNumber" ng-model="ngModel.phoneNumber">
          </div>
          <div class="form-group">
            <label for="cellPhoneNumber">Cell Phone Number</label>
            <input type="text" class="form-control" id="cellPhoneNumber" ng-model="ngModel.cellPhoneNumber">
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" ng-model="ngModel.address">
          </div>
      `
    }
});
