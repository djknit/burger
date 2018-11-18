// `$(()=>...)` is short for `$(document).on("ready", ()=>...)`
$(() => {

    $(".devour").on("click", function() {
        const burgerId = $(this).attr("burger");
        $.ajax(`/api/burgers/${burgerId}`, { type: "PUT" })
            .then(response => {
                // Logs error from the server if any
                console.log(response);
                // Reload the page to get the updated list
                location.reload();
            });
    });

    $("#submit-burger").on("click", function() {
        const burgerName = $("#burger-name").val().trim();
        if (!burgerName) return console.log("Empty name. Burger not submitted.");
        $.ajax("/api/burgers/", {
            type: "POST",
            data: { name: burgerName }
        }).then(response => {
            console.log(response);
            // Reload the page to get the updated list
            location.reload();
        });
    });

});