$(function () {
    // 1. 准备相关数据
    var hotData = [
        {
            city: "北京", // 城市
            sales: "25, 179", // 销售额
            flag: true, //  上升还是下降
            brands: [
                //  品牌种类数据
                { name: "可爱多", num: "9,086", flag: true },
                { name: "娃哈哈", num: "8,341", flag: true },
                { name: "喜之郎", num: "7,407", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "6,724", flag: false },
                { name: "好多鱼", num: "2,170", flag: true }
            ]
        },
        {
            city: "河北",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "3,457", flag: false },
                { name: "娃哈哈", num: "2,124", flag: true },
                { name: "喜之郎", num: "8,907", flag: false },
                { name: "八喜", num: "6,080", flag: true },
                { name: "小洋人", num: "1,724", flag: false },
                { name: "好多鱼", num: "1,170", flag: false }
            ]
        },
        {
            city: "上海",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "2,345", flag: true },
                { name: "娃哈哈", num: "7,109", flag: true },
                { name: "喜之郎", num: "3,701", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "2,724", flag: false },
                { name: "好多鱼", num: "2,998", flag: true }
            ]
        },
        {
            city: "江苏",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "2,156", flag: false },
                { name: "娃哈哈", num: "2,456", flag: true },
                { name: "喜之郎", num: "9,737", flag: true },
                { name: "八喜", num: "2,080", flag: true },
                { name: "小洋人", num: "8,724", flag: true },
                { name: "好多鱼", num: "1,770", flag: false }
            ]
        },
        {
            city: "山东",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "9,567", flag: true },
                { name: "娃哈哈", num: "2,345", flag: false },
                { name: "喜之郎", num: "9,037", flag: false },
                { name: "八喜", num: "1,080", flag: true },
                { name: "小洋人", num: "4,724", flag: false },
                { name: "好多鱼", num: "9,999", flag: true }
            ]
        }
    ];
    //sup添加li
    let sups = "";
    $.each(hotData, function (idx, item) {
        sups += `
                <li>
                    <span>${item.city}</span>
                    <span>${item.sales} <s class=${item.flag ? "icon-up" : "icon-down"}></s></span>
                </li>
               
        `
    });
    $(".sup").html(sups);

    //鼠标划上sup的li显示右边的sub内容


    $(".sup").on("mouseenter", "li", function () {
        index = $(this).index()
        render($(this))
    });
    //封装mouseenter函数
    function render(that) {
        //sup里的li高亮显示
        that.addClass("active")
            .siblings()
            .removeClass()
        //sub添加li
        let subs = "";
        $.each(hotData[that.index()].brands, function (idx, item) {
            subs += `
                 <li>
                     <span>${item.name}</span>
                     <span>${item.num}<s class=${item.flag ? "icon-up" : "icon-down"}></s></span>
                 </li>
             `
        });
        $(".sub").html(subs)
    }
    $(".sup li").eq(0).mouseenter()

    //开启定时器
    var index = 0;
    let timer = setInterval(function () {

        index++;
        if (index > $(".sup li").length - 1) {
            index = 0
        };
        // $(".sup li").eq(index).mouseenter()
        //sup里的li高亮显示
        render($(".sup li").eq(index))
    }, 2000)

    //鼠标经过事件
    $(".sup").hover(function () {
        clearInterval(timer)
    }, function () {
        clearInterval(timer)
        timer = setInterval(function () {
            index++;
            if (index > $(".sup li").length - 1) {
                index = 0
            };
            render($(".sup li").eq(index))
        }, 2000)
    })
})