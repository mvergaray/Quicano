angular.module("app")
    .factory("contactService", function () {
        return {
            data: [
                { title: "Contact1", content: "fdsfsd" },
                { title: "Contact2", content: "fdsfsd" }
            ]
        };
    });