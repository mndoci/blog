var MAIN_WIDTH=600,RESTORE_WIDTH=520;
$(document).ready(function(){function b(c,d){$(c).stop(true,true).css({left:889,"z-index":d?1:3}).animate({left:"+=30px"},150,function(){$(c).css({"z-index":d?3:1})}).animate({left:"-=30px"},150)}$(".reldate").relatizeDate();$("pre").hover(function(){$("code",this).stop(true,false).animate({"max-width":"1000px"},"fast")},function(){$("code",this).stop(true,false).delay(500).animate({"max-width":RESTORE_WIDTH+"px"},"fast")});$("a").each(function(){$(this).attr("href").indexOf("/")!=0&&$(this).attr("target",
"_blank")});$("#footer img").hover(function(){$(this).attr("src","/img/"+$(this).attr("id").substr(1)+"1.png")},function(){$(this).attr("src","/img/"+$(this).attr("id").substr(1)+"0.png")});var a=null;$("#rss").hover(function(){if(a!=null){clearTimeout(a);a=null}else b("#rss",true)},function(){a=setTimeout(function(){b("#rss",false);a=null},2E3)})});
$(window).load(function(){$("p.autoalign").each(function(){var b=0;$("img",this).each(function(){b+=$(this).width()});var a=(MAIN_WIDTH-b)/2;$(this).css({width:b,left:a})})});
