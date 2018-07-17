/**
jQuery-picon v0.1
Crated by OFG in 2018/6/29
*/

(function ($) {
    var drawCons = {
        'lineCons' : 30,
        'fontSize' : 25,
        'xAxis': 11,
        'yAxis': 11,
        'px': 'px',
        'content': '<div id="pic1"><canvas id="picon"></canvas><div id="picon_con"></div></div>'
    }


    /**
     *初始化方法
     */
    drawCons.Init = function(start, middle){
        $('body').prepend(drawCons.content);
    }


    //绘制引导线方法
    drawCons.drawCon = function(start, middle){

        var con=document.getElementById("picon");
        var draw=con.getContext("2d");
        $("#picon").attr("width", $(window).get(0).innerWidth);
        $("#picon").attr("height", $(window).get(0).innerHeight);
        draw.fillRect(0, 0, $("#picon").width, $("#picon").height);


        draw.beginPath(); //开始

        //线条样式
        draw.strokeStyle = '#000';
        draw.lineWidth = '2';
        draw.shadowColor = "#333";
        draw.shadowBlur = "10";

        console.log(middle);

        draw.arc(start[0], start[1], 5, 0, 2*Math.PI);
        draw.fill();
        draw.moveTo(start[0],start[1]);
        draw.lineTo(middle[0], middle[1]);


        /*draw.lineTo(lineto, middle[1]);*//*横折线（暂定）*/
        draw.stroke();
        draw.closePath(); //结束
    }


    //创建文本框&内容填充方法
    drawCons.textArea = function(start, middle, fontSize, text, height){

        console.log(text);

    	var posi = {
            'left': 'height',
            'right': ''
		}


        $("#picon_con").html(text).css({
            'height': (!height)?'auto':height+drawCons.px,
            'font-size': (!fontSize)?drawCons.fontSize+drawCons.px : fontSize+drawCons.px
        });
        var width = parseInt($("#pic1 #picon_con").css("width").replace('px', ''))+parseInt($("#pic1 #picon_con").css("padding"))*2;
        var height = parseInt($("#pic1 #picon_con").css("height").replace('px', ''))+parseInt($("#pic1 #picon_con").css("padding"))*2;

        $("#picon_con").css({
            'top': (middle[0]-start[0]>0)?(middle[1] > start[1])? middle[1]-1: middle[1]-height-1  : (middle[1] > start[1])? middle[1]-1 : middle[1]-height-1,
            'left': (middle[0]-start[0]>0)? middle[0]-1 : middle[0]-width-1
        });
    }

    //主程序
    drawCons.main = function(start, middle, text, fontSize, height){

    	$(function(){
            $(window).resize(drawCons.drawCon(start, middle, text, fontSize, height));
        });


        //模块初始化
        drawCons.Init(start, middle);

        //绘制引导线
        drawCons.drawCon(start, middle);

        //创建文本框&内容填充
        drawCons.textArea(start, middle, fontSize, text, height);

        //显示控件
        $("#pic1").fadeIn(400);

    }


	//加载插件
	$.fn.picon = function(options) {
		var $opts = $.extend(defaults, options);

		var defaults = {
			'start': [10,10],
			'middle': [60,60],
			'text': 'picon引导框插件by OFG',
			'position' : '',  //暂未开发
			'fontSize': 25
		}

		console.log($opts.text);

        drawCons.main($opts.start, $opts.middle, $opts.text, $opts.fontSize, $opts.height);

	}
})(window.jQuery)