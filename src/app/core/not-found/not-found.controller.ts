class NotFoundController implements ng.IController {
    // Controller dependency injection
    static $inject: ReadonlyArray<string> = [

    ];

    // Controller constructor
    constructor() {

    }
}

angular.module('voya')
    .controller('notFoundController', NotFoundController);