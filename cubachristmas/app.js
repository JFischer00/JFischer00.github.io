var cicApp = angular.module('cicApp', [])
.run(function($rootScope) {
    $rootScope.similarities = [
        {
            id: 0,
            name: 'Importance',
            content: 'Cuba and the US both take Christmas very importantly. In each country, it is clearly the most important holiday of the year.',
            isActive: 'active'
        },
        {
            id: 1,
            name: 'Quantity of Food',
            content: 'In the US, food is often an important part of any Christmas party, whether it be a Christmas cookie exchange or Christmas Day Dinner. Cubans also enjoy plenty of good food at Christmastime, including roasted pig, nuts, cheeses, and grapefruit.',
            isActive: ''
        },
        {
            id: 2,
            name: 'Decorations',
            content: 'Americans love to decorate for Christmas. We decorate both inside and outside our houses, businesses, parks, and neighborhoods. Cubans also decorate with lights and Christmas trees, inside and outside.',
            isActive: ''
        }
    ];
    $rootScope.differences = [
        {
            id: 0,
            name: 'Importance of Christmas Eve',
            content: 'Much of the Cuban celebration of Christmas comes on Christmas Eve, whereas in America the main celebration is on Christmas Day.',
            isActive: 'active'
        },
        {
            id: 1,
            name: 'Type of Food',
            content: 'American and Cubans have different menus for Christmas parties and meals. Americans have lots of Christmas parties throughout December, always with plenty of dessert. The star of Cuban Christmas food is the roasted pig, served during Christmas Eve feasts.',
            isActive: ''
        },
        {
            id: 2,
            name: 'Focus',
            content: 'Many (althought not all) Americans tend to focus on presents at Christmas. It\'s all about what we give and especially what we get. Cubans focus mre on friends, family, and enjoying the Christmas season.',
            isActive: ''
        }
    ];
});

cicApp.controller('MainController', function MainController($scope, $rootScope) {
    $scope.items = [];
    $scope.current = [];

    $scope.setData = function(reverse) {
        if (reverse)
            $scope.items = $rootScope.differences;
        else
            $scope.items = $rootScope.similarities;

        $scope.current = $scope.items[0];
    };

    $scope.changeItem = function(id) {
        $scope.items.forEach(function(item) {
            if (item.isActive != '')
                item.isActive = '';

            if (item.id == id) {
                item.isActive = 'active';
                $scope.current = item;
            }
        });
    };
});