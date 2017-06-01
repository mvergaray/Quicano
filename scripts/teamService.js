angular.module("app")
    .factory("teamService", function () {
        return {
            data: [
                { src: "../images/image1.jpg", title: "Hola", content: "fdsfsd" },
                { src: "../images/image1.jpg", title: "Hola", content: "fdsfsd" }
            ]
        };
    });