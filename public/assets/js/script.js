$(function () {
    $(".change-devour").on("click", function (e) {
        const id = $(this).data("id");
        const newDevoured = $(this).data("newdevour");


        const newDevouredState = {
            devoured: newDevoured
        };
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function () {
            console.log("changed devoured to", newDevoured)
            location.reload();
        })
    });

    $(".create-form").on("submit", function (e) {
        e.preventDefault();

        const newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {

            location.reload()
        })
    });

    $(".delete-burger").on("click", function (e) {
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {

            location.reload();
        })
    });
});
