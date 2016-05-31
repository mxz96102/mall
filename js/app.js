/**
 * Created by 明多牧 on 2016/5/15.
 */
((function () {
    window['changeTit']=function changeTit(title) {
        if(typeof title==='string'){
            document.title=title;
            document.getElementsByClassName('header-title')[0].innerHTML=title;
        }else{
            console.log('invalid title type')
        }
    };

    var headerItem={
        'cart':$('#header-item-cart'),
        'search':$('#header-item-search'),
        'share':$('#header-item-share'),
        'back':$('#header-item-back'),
        'null':null
    };

    window['changeButt']=function changeButton(leftItem,rightItem) {
        $('.header-back').html(headerItem[leftItem]);
        $('.header-share').html(headerItem[rightItem]);
        if(leftItem==='search'){
            $('.header').css({'background':'white','color':'black'})
        }else{
            $('.header').css({'background':'transparent','color':'white'})
            }
    };

    window['changeBg']=function (img) {

    }
})());

var mallApp = angular.module('mallApp', ['ngRoute', 'ngResource'])
    //route
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'pages/index.html',
                    controller: 'indexCtrl'
                })
                .when('/item/:id', {
                    templateUrl: 'pages/item.html',
                    controller: 'itemCtrl'
                })
                .when('/cart', {
                    templateUrl: 'pages/cart.html',
                    controller: 'cartCtrl'
                })
                .when('/search', {
                    templateUrl: 'pages/search.html',
                    controller: 'searchCtrl'
                })
                .when('/searchRes/:info', {
                    templateUrl: 'pages/searchRes.html',
                    controller: 'searchResCtrl'
                })
                .when('/order/:id', {
                    templateUrl: 'pages/order.html',
                    controller: 'orderCtrl'
                })
                .when('/buy=:ads', {
                    templateUrl: 'pages/buy.html',
                    controller: 'buyCtrl'
                })
                .when('/pay=:id', {
                    templateUrl: 'pages/pay.html',
                    controller: 'payCtrl'
                })
                .when('/ads', {
                    templateUrl: 'pages/ads.html',
                    controller: 'adsCtrl'
                })
                .when('/adsEdit=:id', {
                    templateUrl: 'pages/adsEdit.html',
                    controller: 'adsEditCtrl'
                })
                .when('/slide', {
                    templateUrl: 'pages/slide.html',
                    controller: 'slideCtrl'
                })
                .when('/slideIn=:id', {
                    templateUrl: 'pages/slideIn.html',
                    controller: 'slideInCtrl'
                })
                .when('/slide3d=:id', {
                    templateUrl: 'pages/slide3d.html',
                    controller: 'slide3dCtrl'
                })
                .when('/404', {
                    templateUrl: 'pages/404.html',
                    controller: 'to404Ctrl'
                })
                .otherwise('/404', {
                    templateUrl: 'pages/404.html',
                    controller: 'to404Ctrl'
                });
        }])

        .factory(
            'itemServe',
            ['$resource',
                function ($resource) {
                    return $resource("http://localhost:10086", {}, {
                        
                    })
                }]
        )

        //controller
        .controller('indexCtrl', ['$scope', function ($scope) {
            changeTit('商城首页');
            changeButt('search','cart');
            setTimeout(function () {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    slidesPerView: 1,
                    paginationClickable: true,
                    spaceBetween: 0,
                    loop: true,
                    autoplay: 3000
                });
            }, 10);

            var itemList={
                'hot': [
                    {
                        id:1,
                        img:'img/item.jpg',
                        title:'商品1',
                        sale:51,
                        price:'45.00'
                    },
                    {
                        img:'img/item.jpg',
                        title:'商品2',
                        sale:52,
                        price:'45.00'
                    },
                    {
                        img:'img/item.jpg',
                        title:'商品3',
                        sale:53,
                        price:'45.00'
                    },
                    {
                        img:'img/item.jpg',
                        title:'商品4',
                        sale:54,
                        price:'45.00'
                    },
                    {
                        img:'img/item.jpg',
                        title:'商品5',
                        sale:55,
                        price:'45.00'
                    },
                    {
                        img:'img/item.jpg',
                        title:'商品6',
                        sale:65,
                        price:'45.00'
                    },
                    {
                        img:'img/item.jpg',
                        title:'商品7',
                        sale:75,
                        price:'45.00'
                    }
                ],
                'clothes': [
                    {
                        img:'img/item.jpg',
                        title:'衣服1',
                        sale:51,
                        price:'45.00'
                    },{
                        img:'img/item.jpg',
                        title:'衣服2',
                        sale:51,
                        price:'45.00'
                    }],
                'skin':[
                    {
                        img:'img/item.jpg',
                        title:'护肤1',
                        sale:51,
                        price:'45.00'
                    },{
                        img:'img/item.jpg',
                        title:'护肤2',
                        sale:51,
                        price:'45.00'
                    }],
                'life':[
                    {
                        img:'img/item.jpg',
                        title:'生活1',
                        sale:51,
                        price:'45.00'
                    },{
                        img:'img/item.jpg',
                        title:'生活2',
                        sale:51,
                        price:'45.00'
                    }]
            };

            $('.index-divide-name').click(function (event) {
                $('.index-divide-name').removeClass('index-divide-select');
                $(event.target).addClass('index-divide-select');
                $scope.$apply(function () {
                    $scope.items=itemList[$(event.target).attr('di-data')]
                })
            });
            
            $scope.items=[
                {
                    id:1,
                    img:'img/item.jpg',
                    title:'商品1',
                    sale:51,
                    price:'45.00'
                },
                {
                    img:'img/item.jpg',
                    title:'商品2',
                    sale:52,
                    price:'45.00'
                },
                {
                    img:'img/item.jpg',
                    title:'商品3',
                    sale:53,
                    price:'45.00'
                },
                {
                    img:'img/item.jpg',
                    title:'商品4',
                    sale:54,
                    price:'45.00'
                },
                {
                    img:'img/item.jpg',
                    title:'商品5',
                    sale:55,
                    price:'45.00'
                },
                {
                    img:'img/item.jpg',
                    title:'商品6',
                    sale:65,
                    price:'45.00'
                },
                {
                    img:'img/item.jpg',
                    title:'商品7',
                    sale:75,
                    price:'45.00'
                }
            ]
        }])
        .controller('itemCtrl', ['$scope', '$routeParams',function ($scope,$routeParams) {
            changeTit('商品'+$routeParams.id);
            changeButt('back','share');
        }])
        .controller('cartCtrl', ['$scope', function ($scope) {
            changeTit('购物车');
            changeButt('back','null');
            $('.cart-item-body-foot').click(function () {
                $('.cart-item-body-foot').toggleClass('cart-item-body-foot-check')
            })
        }])
        .controller('searchCtrl', ['$scope', function ($scope) {
            changeTit('搜索');
            changeButt('back','null');
        }])
        .controller('searchResCtrl', ['$scope', function ($scope) {
        }])
        .controller('orderCtrl', ['$scope', function ($scope) {
        }])
        .controller('buyCtrl', ['$scope', function ($scope) {
        }])
        .controller('payCtrlCtrl', ['$scope', function ($scope) {
        }])
        .controller('adsCtrl', ['$scope', function ($scope) {
        }])
        .controller('adsEditCtrl', ['$scope', function ($scope) {
        }])
        .controller('slideCtrl', ['$scope', function ($scope) {
        }])
        .controller('slideInCtrl', ['$scope', function ($scope) {
        }])
        .controller('slide3dCtrl', ['$scope', function ($scope) {
        }])
        .controller('to404Ctrl', ['$scope', function ($scope) {
            changeTit('404 Not Found');
            changeButt('null','null');
            setTimeout(function () {
                history.back(-1);
            },1000)
        }])
    ;
