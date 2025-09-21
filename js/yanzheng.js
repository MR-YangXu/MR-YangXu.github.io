$(function() {
    $('.yanzheng button').on('click', function() {
        var yanzheng = $('.yanzheng input').val();
        if (yanzheng == '195' || yanzheng == '295' || yanzheng == '395' || yanzheng == '495' || yanzheng == '595' || yanzheng == '695' || yanzheng == '795' || yanzheng == '895' || yanzheng == '995' || yanzheng == '129' || yanzheng == '229' || yanzheng == '329' || yanzheng == '429' || yanzheng == '529' || yanzheng == '629' || yanzheng == '729' || yanzheng == '829' || yanzheng == '929') {
            $(".bd").show();
            $('.yanzheng').hide()
        } else {
            $(".bd").hide();
            $('.yanzheng').show()
        }
    })

    // 禁止
    document.addEventListener('contextmenu', function(e) { //事件是鼠标右键菜单
        e.preventDefault();
    });
    document.addEventListener('selectstart', function(e) { //事件是鼠标选取
        e.preventDefault();
    });

})