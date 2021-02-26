$(function () {
    //点击全选按钮时
    $(".checkall").on("click", function () {
        let check = $(this).prop("checked")
        $(".j-checkbox, .checkall").prop("checked", check)
    });
    //点击单个按钮时
    $(".j-checkbox").on("click", function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)
        }

    });
    //点击+时
    $(".increment").on("click", function () { 
        $(this).parents(".p-num").children(".")
    })
})