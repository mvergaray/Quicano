angular.module("app", [])
    .controller("MainController",["$scope", "$filter", "$sce", "aboutService", "articlesService", "contactService", "newsService", "servicesService", "teamService",
    function($scope, $filter, $sce, aboutService, articlesService, contactService, newsService, servicesService, teamService) {
        $scope.menu = {
            about: { active: true, template: "about.html", name: "about", breadcrumb: "Home > Quienes Somos" },
            team: { active: false, template: "team.html", name: "team", breadcrumb: "Equipo" },
            services: { active: false, template: "services.html", name: "services", breadcrumb: "Servicios" },
            news: { active: false, template: "news.html", name: "news", breadcrumb: "Noticias" },
            contact: { active: false, template: "contact.html", name: "contact", breadcrumb: "Contacto" },
            general: { active: false, template: "general.html", name: "general", breadcrumb: "" },
            articles: { active: false, name: "articles", breadcrumb: "Artículos" }
        };
        $scope.breadcrumb = $scope.menu.about.breadcrumb;

        $scope.footerArticles = articlesService.data;

        $scope.sliderImages = aboutService.data;

        $scope.team = teamService.data;

        $scope.services = servicesService.data;

        $scope.news = newsService.data;

        $scope.contact = contactService.data;

        $scope.general = [];

        $scope.updateContent = function (item, section) {
            $scope.template = item.template;
            Object.keys($scope.menu).forEach(function (obj) {
                if ($scope.menu[obj].template == item.template) {
                    $scope.menu[obj].active = true;
                    $scope.breadcrumb = $scope.menu[obj].breadcrumb;
                } else if (item == "articles" && obj == "articles") {
                    $scope.menu[obj].active = true;
                    $scope.breadcrumb = "Artículos";
                } else {
                    $scope.menu[obj].active = false;
                }
            });

            if (["services", "news", "contact"].indexOf(item.name) > -1) {
                $scope.general = $scope[item.name];
                $scope.menu.general.active = true;
            } else if (item == "articles") {
                $scope.general = [$scope.footerArticles[section - 1]];
                $scope.menu.general.active = true;
            } else {
                $scope.menu.general.active = false;
            }
        };

        $scope.drawCanvas = function () {
            var canvas = $(".top-triangle");

            if (canvas && canvas.length) {
                for(var i in canvas) {
                    item = canvas[i];
                    if (item.getContext){
                        var ctx = item.getContext("2d");

                        ctx.beginPath();
                        ctx.moveTo(96,0);
                        ctx.lineTo(0, 0);
                        ctx.lineTo(48,10);
                        ctx.fillStyle = "#ccc";
                        ctx.fill();
                      }
                }
            }
        };

        $scope.print = function () {
            window.print();
        }
        $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };

        $scope.showMessage = function () {
            alert("Gracias, pronto nos pondremos en contacto");
            angular.element("#name").text("");
            angular.element("#email").text("");
            angular.element("#question").text("");
        }
    }]);