angular.module("app")
    .factory("newsService", function () {
        return {
            data: [
                { title: "News1", content: "fdsfsd" },
                { title: "News2", content: "fdsfsd" }
            ]
        };
    });