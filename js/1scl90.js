$(function() {

    $('input').on('click', function() {
        localStorage.setItem('QTH', getQth());
        localStorage.setItem('QP', getQp());
        localStorage.setItem('RJ', getRj());
        localStorage.setItem('YY', getYy());
        localStorage.setItem('JL', getJl());
        localStorage.setItem('DD', getDd());
        localStorage.setItem('KB', getKb());
        localStorage.setItem('PZ', getPz());
        localStorage.setItem('JSB', getJsb());
        localStorage.setItem('SM', getSm());
        localStorage.setItem('YXS', getYxs());
        localStorage.setItem('YX', getYx());
        localStorage.setItem('TOT', getTotal());
    })


    // 提交
    $('.submit a').on('click', function() {
        if (getLength() == 90) {
            $('.submit a').prop('href', '1scl90_report.html')
        } else {
            alert('提交失败,您有未完成的题目')
        }
    })

    // 检查矫正

    // $.each($('.sm_kind strong'), function(i, ele) {
    //     console.log(ele);
    // })

    //计数
    function getQth() {
        var qthsum = 0;
        $.each($('.qth_kind input'), function(i, ele) {
            if ($(ele).prop('checked')) {
                qthsum += parseInt($(ele).val());
            }
        })
        return qthsum
    }

    function getQp() {
        var qpsum = 0;
        $.each($('.qp_kind input'), function(i, ele) {
            if ($(ele).prop('checked')) {
                qpsum += parseInt($(ele).val());
            }
        })
        return qpsum
    }

    function getRj() {
        var rjsum = 0;
        $.each($('.rj_kind input'), function(i, ele) {
            if ($(ele).prop('checked')) {
                rjsum += parseInt($(ele).val());
            }
        })
        return rjsum
    }

    function getYy() {
        var yysum = 0;
        $.each($('.yy_kind input'), function(i, ele) {
            if ($(ele).prop('checked')) {
                yysum += parseInt($(ele).val());
            }
        })
        return yysum
    }

    function getJl() {
        var jlsum = 0;
        $.each($('.jl_kind input'), function(i, ele) {
            if ($(ele).prop('checked')) {
                jlsum += parseInt($(ele).val());
            }
        })
        return jlsum
    }

    function getDd() {
        var ddsum = 0;
        $.each($('.dd_kind input'), function(i, ele) {
            if ($(ele).prop('checked')) {
                ddsum += parseInt($(ele).val());
            }
        })
        return ddsum
    }

    function getKb() {
        var kbsum = 0;
        $.each($('.kb_kind input'), function(i, ele) {
            if ($(ele).prop('checked')) {
                kbsum += parseInt($(ele).val());
            }
        })
        return kbsum
    }

    function getPz() {
        var pzsum = 0;
        $.each($('.pz_kind input'), function(i, ele) {
            if ($(ele).prop('checked')) {
                pzsum += parseInt($(ele).val());
            }
        })
        return pzsum
    }

    function getJsb() {
        var jsbsum = 0;
        $.each($('.jsb_kind input'), function(i, ele) {
            if ($(ele).prop('checked')) {
                jsbsum += parseInt($(ele).val());
            }
        })
        return jsbsum
    }

    function getSm() {
        var smsum = 0;
        $.each($('.sm_kind input'), function(i, ele) {
            if ($(ele).prop('checked')) {
                smsum += parseInt($(ele).val());
            }
        })
        return smsum
    }

    // 计数
    function getTotal() {
        var totalsum = 0;
        $.each($('input'), function(i, ele) {
            if ($(ele).prop('checked')) {
                totalsum += parseInt($(ele).val());
            }
        })
        return totalsum
    }

    function getYxs() {
        var yxssum = 0;
        $.each($('input'), function(i, ele) {
            if ($(ele).prop('checked') && $(ele).val() >= 2) {
                yxssum++
            }
        })
        return yxssum
    }

    function getYx() {
        var yxsum = 0;
        $.each($('input'), function(i, ele) {
            if ($(ele).prop('checked') && $(ele).val() >= 2) {
                yxsum += parseInt($(ele).val());
            }
        })
        return yxsum
    }

    function getLength() {
        var length = $("input[type='radio']:checked").length //求长度，也就是被选中的个数
        return length
    }
    // 结论
    var qth = localStorage.getItem('QTH');
    var qp = localStorage.getItem('QP');
    var rj = localStorage.getItem('RJ');
    var yy = localStorage.getItem('YY');
    var jl = localStorage.getItem('JL');
    var dd = localStorage.getItem('DD');
    var kb = localStorage.getItem('KB');
    var pz = localStorage.getItem('PZ');
    var jsb = localStorage.getItem('JSB');
    var sm = localStorage.getItem('SM');
    var yx = localStorage.getItem('YX');
    var yxs = localStorage.getItem('YXS');
    var total = localStorage.getItem('TOT');

    // jufen
    var qth_jufen = parseFloat(qth / 12).toFixed(1)
    var qp_jufen = parseFloat(qp / 10).toFixed(1)
    var rj_jufen = parseFloat(rj / 9).toFixed(1)
    var yy_jufen = parseFloat(yy / 13).toFixed(1)
    var jl_jufen = parseFloat(jl / 10).toFixed(1)
    var dd_jufen = parseFloat(dd / 6).toFixed(1)
    var kb_jufen = parseFloat(kb / 7).toFixed(1)
    var pz_jufen = parseFloat(pz / 6).toFixed(1)
    var jsb_jufen = parseFloat(jsb / 10).toFixed(1)
    var sm_jufen = parseFloat(sm / 7).toFixed(1)
    var yx_jufen = parseFloat(yx / yxs).toFixed(1)
    var total_jufen = parseFloat(total / 90).toFixed(1)

    console.log(yx);
    console.log(yxs);


    // 赋值
    $('.qth td').eq(1).text(qth).next().text(qth_jufen);
    if (qth_jufen >= 4) {
        $('.qth td').eq(3).text('严重').css('color', 'red')
    } else if (qth_jufen >= 3) {
        $('.qth td').eq(3).text('比较严重').css('color', 'red')
    } else if (qth_jufen >= 2) {
        $('.qth td').eq(3).text('轻度异常').css('color', 'green')
    } else {
        $('.qth td').eq(3).text('无异常')
    }
    if (qth_jufen >= 2) {
        $('.qth_con p').html('<span>该项目阳性。</span><br>躯体化主要反映身体不适感，包括心血管、胃肠道、呼吸和其他系统的不适，和头痛、背痛、肌肉酸痛，以及焦虑等躯体不适表现。<br>该分量表均分3分以上，表明个体在身体上有较明显的不适感，并常伴有头痛、肌肉酸痛等症状。<br>均分2分以下，躯体症状表现不明显。<br>总的说来，得分越高，躯体的不适感越强；得分越低，症状体验越不明显。')
    }

    $('.qp td').eq(1).text(qp).next().text(qp_jufen);
    if (qp_jufen >= 4) {
        $('.qp td').eq(3).text('严重').css('color', 'red')
    } else if (qp_jufen >= 3) {
        $('.qp td').eq(3).text('比较严重').css('color', 'red')
    } else if (qp_jufen >= 2) {
        $('.qp td').eq(3).text('轻度异常').css('color', 'green')
    } else {
        $('.qp td').eq(3).text('无异常')
    }
    if (qp_jufen >= 2) {
        $('.qp_con p').html('<span>该项目阳性。</span><br>强迫症状主要指那些明知没有必要，但又无法摆脱的无意义的思想、冲动和行为，还有一些比较一般的认知障碍的行为征象也在这一因子中反映。<br>该分量表均分3分以上，强迫症状较明显。<br>均分2分以下，强迫症状不明显。<br>总的说来，得分越高，表明个体越无法摆脱一些无意义的行为、思想和冲动，并可能表现出一些认知障碍的行为征兆。得分越低，表明个体在此种症状上表现越不明显，没有出现强迫行为。')
    }

    $('.rj td').eq(1).text(rj).next().text(rj_jufen);
    if (rj_jufen >= 4) {
        $('.rj td').eq(3).text('严重').css('color', 'red')
    } else if (rj_jufen >= 3) {
        $('.rj td').eq(3).text('比较严重').css('color', 'red')
    } else if (rj_jufen >= 2) {
        $('.rj td').eq(3).text('轻度异常').css('color', 'green')
    } else {
        $('.rj td').eq(3).text('无异常')
    }
    if (rj_jufen >= 2) {
        $('.rj_con p').html('<span>该项目阳性。</span><br>人际关系敏感主要是指某些人际的不自在与自卑感，特别是与其他人相比较时更加突出。在人际交往中的自卑感，心神不安，明显的不自在，以及人际交流中的不良自我暗示，消极的期待等是这方面症状的典型原因。<br>该分量表均分3分以上，表明个体人际关系较为敏感，人际交往中自卑感较强，并伴有行为症状（如坐立不安，退缩等）。<br>均分2分以下，表明个体在人际关系上较为正常。<br>总的说来，得分越高，个体在人际交往中表现的问题就越多，自卑，自我中心越突出，并且已表现出消极的期待。得分越低，个体在人际关系上越能应付自如，人际交流自信、胸有成竹，并抱有积极的期待。')
    }

    $('.yy td').eq(1).text(yy).next().text(yy_jufen);
    if (yy_jufen >= 4) {
        $('.yy td').eq(3).text('严重').css('color', 'red')
    } else if (yy_jufen >= 3) {
        $('.yy td').eq(3).text('比较严重').css('color', 'red')
    } else if (yy_jufen >= 2) {
        $('.yy td').eq(3).text('轻度异常').css('color', 'green')
    } else {
        $('.yy td').eq(3).text('无异常')
    }
    if (yy_jufen >= 2) {
        $('.yy_con p').html('<span>该项目阳性。</span><br>抑郁是以苦闷的情感与心境为代表性症状，还以生活兴趣的减退，动力缺乏，活力丧失等为特征。还表现出失望、悲观以及与抑郁相联系的认知和躯体方面的感受，另外，还包括有关死亡的思想和自杀观念.<br>该分量表均分3分以上，表明个体的抑郁程度较强，生活缺乏足够的兴趣，缺乏运动活力，极端情况下，可能会有想死亡的思想和自杀的观念。 <br>均分2分以下，表明个体抑郁程度较弱，生活态度乐观积极，充满活力，心境愉快。<br>总的说来，得分越高，抑郁程度越明显，得分越低，抑郁程度越不明显。')
    }

    $('.jl td').eq(1).text(jl).next().text(jl_jufen);
    if (jl_jufen >= 4) {
        $('.jl td').eq(3).text('严重').css('color', 'red')
    } else if (jl_jufen >= 3) {
        $('.jl td').eq(3).text('比较严重').css('color', 'red')
    } else if (jl_jufen >= 2) {
        $('.jl td').eq(3).text('轻度异常').css('color', 'green')
    } else {
        $('.jl td').eq(3).text('无异常')
    }
    if (jl_jufen >= 2) {
        $('.jl_con p').html('<span>该项目阳性。</span><br>焦虑一般指那些烦躁，坐立不安，神经过敏，紧张以及由此产生的躯体征象，如震颤等。<br>该分量表均分3分以上，表明个体较易焦虑，易表现出烦躁、不安静和神经过敏，极端时可能导致惊恐发作。<br>均分2分以下，表明个体不易焦虑，易表现出安定的状态。<br>总的说来，得分越高，焦虑表现越明显。得分越低，越不会导致焦虑。')
    }

    $('.dd td').eq(1).text(dd).next().text(dd_jufen);
    if (dd_jufen >= 4) {
        $('.dd td').eq(3).text('严重').css('color', 'red')
    } else if (dd_jufen >= 3) {
        $('.dd td').eq(3).text('比较严重').css('color', 'red')
    } else if (dd_jufen >= 2) {
        $('.dd td').eq(3).text('轻度异常').css('color', 'green')
    } else {
        $('.dd td').eq(3).text('无异常')
    }
    if (dd_jufen >= 2) {
        $('.dd_con p').html('<span>该项目阳性。</span><br>敌对主要从三方面来反映敌对的表现：思想、感情及行为。其项目包括厌烦的感觉，摔物，争论直到不可控制的脾气暴发等各方面。<br>该分量表均分3分以上，表明个体易表现出敌对的思想、情感和行为。<br>均分2分以下，表明个体容易表现出友好的思想、情感和行为。 <br>总的说来，得分越高，个体越容易敌对，好争论，脾气难以控制。得分越低，个体的脾气越温和，待人友好，不喜欢争论、无破坏行为。')
    }

    $('.kb td').eq(1).text(kb).next().text(kb_jufen);
    if (kb_jufen >= 4) {
        $('.kb td').eq(3).text('严重').css('color', 'red')
    } else if (kb_jufen >= 3) {
        $('.kb td').eq(3).text('比较严重').css('color', 'red')
    } else if (kb_jufen >= 2) {
        $('.kb td').eq(3).text('轻度异常').css('color', 'green')
    } else {
        $('.kb td').eq(3).text('无异常')
    }
    if (kb_jufen >= 2) {
        $('.kb_con p').html('<span>该项目阳性。</span><br>恐惧的对象包括出门旅行，空旷场地，人群或公共场所和交通工具。此外，还有社交恐怖。<br>该分量表均分3分以上，表明个体恐怖症状较为明显，常表现出社交、广场和人群恐惧。<br>均分2分以下，表明个体的恐怖症状不明显。<br>总的说来，得分越高，个体越容易对一些场所和物体发生恐惧，并伴有明显的躯体症状。得分越低，个体越不易产生恐怖心理，越能正常的交往和活动。')
    }

    $('.pz td').eq(1).text(pz).next().text(pz_jufen);
    if (pz_jufen >= 4) {
        $('.pz td').eq(3).text('严重').css('color', 'red')
    } else if (pz_jufen >= 3) {
        $('.pz td').eq(3).text('比较严重').css('color', 'red')
    } else if (pz_jufen >= 2) {
        $('.pz td').eq(3).text('轻度异常').css('color', 'green')
    } else {
        $('.pz td').eq(3).text('无异常')
    }
    if (pz_jufen >= 2) {
        $('.pz_con p').html('<span>该项目阳性。</span><br>偏执主要指投射性思维，敌对，猜疑，妄想，被动体验和夸大等。<br>该分量表均分3分以上，表明个体的偏执症状明显，较易猜疑和敌对。<br>均分2分以下，表明个体的偏执症状不明显。<br>总的说来，得分越高，个体越易偏执，表现出投射性的思维和妄想，得分越低，个体思维越不易走极端。')
    }

    $('.jsb td').eq(1).text(jsb).next().text(jsb_jufen);
    if (jsb_jufen >= 4) {
        $('.jsb td').eq(3).text('严重').css('color', 'red')
    } else if (jsb_jufen >= 3) {
        $('.jsb td').eq(3).text('比较严重').css('color', 'red')
    } else if (jsb_jufen >= 2) {
        $('.jsb td').eq(3).text('轻度异常').css('color', 'green')
    } else {
        $('.jsb td').eq(3).text('无异常')
    }
    if (jsb_jufen >= 2) {
        $('.jsb_con p').html('<span>该项目阳性。</span><br>精神病性反映各式各样的急性症状和行为，即限定不严的精神病性过程的症状表现，例如幻听、思维离散，被控制感，思维被插入等放映精神分裂症状项目。<br>该分量表均分3分以上，表明个体的精神病性症状较为明显。<br>均分2分以下，表明个体的精神病性症状不明显。 总的说来，得分越高，越多的表现出精神病性症状和行为。得分越低，就越少表现出这些症状和行为。')
    }

    $('.sm td').eq(1).text(sm).next().text(sm_jufen);
    if (sm_jufen >= 4) {
        $('.sm td').eq(3).text('严重').css('color', 'red')
    } else if (sm_jufen >= 3) {
        $('.sm td').eq(3).text('比较严重').css('color', 'red')
    } else if (sm_jufen >= 2) {
        $('.sm td').eq(3).text('轻度异常').css('color', 'green')
    } else {
        $('.sm td').eq(3).text('无异常')
    }
    // 总体
    $('.total td').eq(1).text(total).next().text(total_jufen);
    if (total >= 250) {
        $('.total td').eq(3).text('严重异常').css('color', 'red')
    } else if (total >= 160) {
        $('.total td').eq(3).text('存在异常').css('color', 'green')
    } else {
        $('.total td').eq(3).text('未见异常')
    }
    $('.yx td').eq(0).text(yxs).next().text(yx_jufen);
    if (yxs >= 43) {
        $('.yx td').eq(2).text('存在异常').css('color', 'red')
    } else {
        $('.yx td').eq(2).text('未见异常')
    }







    //入口函数
})