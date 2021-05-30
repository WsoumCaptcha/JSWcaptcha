$(document).ready(function () {
    $("#submit_captcha").on("click", function () {
        if ($("#wcaptcha_input").val().length > 0) {
            var a = encodeURI($("#wcaptcha_input").val()),
                c = $("#wcaptcha_challenge").val(),
                t = wcaptcha_options.language,
                k = wcaptcha_options.key;
				$.get(wcaptcha_server + "/api/verify_wcaptcha.php?key=" + k + "&input=" + a + "&challenge=" + c + "&lang=" + t, function(a){
                "true" == a ? $("#captcha_result").html($("#captcha_success").html()) : $("#captcha_result").html($("#captcha_faild").html()), wcaptcha_reload();
		});
        } else $("#wcaptcha_input").focus();
    });
});
