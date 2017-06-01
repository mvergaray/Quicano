angular.module("app")
    .factory("aboutService", function () {
        return {
            data: [
                { src: "../images/image1.jpg", alt: "Texto informativo referencial del tema"},
                { src: "../images/image2.jpg", alt: ""},
                { src: "../images/image3.jpg", alt: ""}
            ]
        };
    });