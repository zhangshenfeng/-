$(function () {
    //点击全选按钮时
    $(".checkall").on("change", function () {
        let check = $(this).prop("checked")
        $(".j-checkbox, .checkall").prop("checked", check);

        //点击全选按钮添加背景
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item")
        } else {
            $(".cart-item").removeClass("check-cart-item")
        }
    });
    //点击单个按钮时
    $(".j-checkbox").on("change", function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)
        };
        //点击单个按钮添加背景
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item")
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item")
        }

    });
    //点击+时

    $(".increment").on("click", function () {
        let num = $(this).siblings(".itxt").val();
        num++;
        //数值改变
        $(this).siblings(".itxt").val(num);


        //价格改变
        $(this).siblings(".itxt").val(num);

        let itxts = $(this).siblings(".itxt").val()
        //价格改变
        let pPrice = $(this).parents(".p-num").siblings(".p-price").html().slice(1)

        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (pPrice * itxts).toFixed(2))
        sum()
    });
    //点击-时
    $(".decrement").on("click", function () {
        let num = $(this).siblings(".itxt").val();
        //数值改变
        if (num <= 1) {
            return false
        } else {
            num--;
        }
        $(this).siblings(".itxt").val(num);

        let itxts = $(this).siblings(".itxt").val()
        //价格改变
        let pPrice = $(this).parents(".p-num").siblings(".p-price").html().slice(1)

        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (pPrice * itxts).toFixed(2))
        sum()
    });

    //直接修改itxt文本框的值
    $(".itxt").on("change", function () {
        console.log();
        let itxtChange = $(this).val()
        let pPrice = $(this).parents(".p-num").siblings(".p-price").html().slice(1)
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (itxtChange * pPrice).toFixed(2));
        sum()
    });
    sum()
    //制作一个求总件数和总加钱的函数
    function sum() {
        let count = 0;
        let money = 0;
        //总件数
        $(".itxt").each((idx, item) => {
            count += parseInt($(item).val())
        });
        $(".amount-sum em").text(count);

        //总价钱
        $(".p-sum").each((idx, item) => {
            money += parseFloat($(item).text().slice(1))
        })
        $(".price-sum em").text("￥" + money.toFixed(2))

    };


    //删除商品模块
    //1.商品后面的删除按钮
    $(".p-action a").on("click", function () {
        $(this).parents(".cart-item").remove();
        sum()
    })
    //2.删除选中的商品
    $(".remove-batch").on("click", function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        sum()
    })
    //3.情空购物车，删除全部商品
    $(".clear-all").on("click", function () {
        $(".cart-item").remove();
        sum()
    })


})