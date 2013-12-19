var app = angular.module("twitListView", ['ngRoute'])

//TODO: When I make this a component, move to example module.
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/app/partials/twitListView.html',
        controller: 'twitListController' //TODO: WHen I make this a component, make it the new controller.
    })
    .otherwise({
        redirectTo: '/'
    });
})
.service('twitListModelService', function () {

    var getMockTwitListModel = function () {
        return [{
            id: 'aRandomId1',
            conversationId: 'aRandomId',
            createDate: new Date(),
            createUser: {
                fullName: 'Christian Bale',
                id: '@baleBatman',
                profilePictureUrl: '/assets/images/ChristianBale.jpeg'
            },
            message: 'I love Batman',
            favorites: [{
                fullName: 'Sachin Tendulkar',
                id: '@sachinGod',
                profilePictureUrl: '/assets/images/sachin.jpg'
            },
            {
                fullName: 'Christopher Nolan',
                id: '@nolanBug',
                profilePictureUrl: '/assets/images/christopher.jpg'
            }]
        },
        {
            id: 'aRandomId2',
            conversationId: 'aRandomId2',
            createDate: new Date(),
            createUser: {
                fullName: 'Sachin Tendulkar',
                id: '@sachinGod',
                profilePictureUrl: '/assets/images/sachin.jpg'
            },
            message: 'Am I still a God?',
            favorites: [{
                fullName: 'Rahul Dravid',
                id: '@wallRahul',
                profilePictureUrl: '/assets/images/dravid.jpg'
            }]
        },
        {
            id: 'aRandomId3',
            conversationId: 'aRandomId2',
            createDate: new Date(),
            createUser: {
                fullName: 'Sourav Ganguly',
                id: '@theDadaSourav',
                profilePictureUrl: '/assets/images/sourav.jpg'
            },
            message: 'Yes, everywhere but Kolkatta',
            favorites: [{
                fullName: 'Yuvraj Singh',
                id: '@fighterYuvi',
                profilePictureUrl: '/assets/images/yuvi.jpg'
            }]
        },
        {
            id: 'aRandomId4',
            conversationId: 'aRandomId4',
            createDate: new Date(),
            createUser: {
                fullName: 'Heath Ledger',
                id: '@jokerAlive',
                profilePictureUrl: '/assets/images/heath.jpg'
            },
            message: 'Has anyone realized I\'m still alive?',
            favorites: [{
                fullName: 'Christian Bale',
                id: '@baleBatman',
                profilePictureUrl: '/assets/images/ChristianBale.jpeg'
            }]
        },
        {
            id: 'aRandomId5',
            conversationId: 'aRandomId4',
            createDate: new Date(),
            createUser: {
                fullName: 'Christian Bale',
                id: '@baleBatman',
                profilePictureUrl: '/assets/images/ChristianBale.jpeg'
            },
            message: 'We all miss you! An artist lives on !!!',
            favorites: []
        }
        ];
    }

    this.getAllModelObjects = function () {
        return getMockTwitListModel();
    };
})

//TODO: When I make this a component, move to directive controller
.controller('twitListController', function ($scope, twitListModelService) {
    $scope.twits = twitListModelService.getAllModelObjects();
});