$(() => {
    //todo: task 1 ✅
    const url = $(".link").attr("href");

    if (/https/.test(url)) {
        $(".link").attr("target", "_blank");
    }

    //todo: task 2 ✅
    $(".head").css("background-color", "green");
    $(".inner").css("font-size", "35px");

    //todo: task 3 ✅
    $("h3").next().css("background-color", "blue");

    $("div").each((index, element) => {
        if ($(element).prev()[0].nodeName === "H3") {
            $(element).prev().before(element);
        }
    });

    //todo: task 4 ✅
    $("#form").change(() => {
        if ($(":checked").length === 3) {
            console.log("STOP")
            $(":not(:checked)").attr("disabled", "true");
        }
    });
});