const LOGGING_STYLES = "background: navy; padding: 5px; font-weight: bold;";

$(() => {
    //todo: task 1 ✅
    const url = $(".link").attr("href");

    if (/https/.test(url)) {
        $(".link").attr("target", "_blank");
    }

    //todo: task 2 ✅
    $(".head").css("background-color", "green");
    $(".inner").css("font-size", "35px");

    //todo: task 3 ---
    const el = $("h3");
    $("h3").next().css("background-color", "blue") //.insertBefore(el)

    $("div").each((index, element) => {
        //todo
        if ($(element).prev()[0].nodeName === "H3") {
            console.log('$("div").prev(): ', $("div").prev());
            //$(element).insertBefore("h3")
            $(element).prev().before(element);

        }

    })

    //or
    $()

    (function relocate() {


    }());


    //todo: task 4 ✅
    $("#form").change(() => {
        if ($(":checked").length === 3) {
            console.log("STOP")
            $(":not(:checked)").attr("disabled", "true");
        }
    });
});