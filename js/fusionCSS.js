/*
 Copyright (c) 2013 - 2014 fusionCSS. All rights reserved.
 @link http://fusionCSS.com
*/
window.fusionLib||(window.$fl=window.fusionLib=jQuery);
$fl(document).ready(function(){$fl(".collapseMenu").each(function(a){var d='<option value="" selected="selected">Menu...</option>',b=$fl(this),c=!1;b.find("a").each(function(){for(var a=$fl(this),b=0,c="",e=a.parent();null!=e[0];)"ul"==e[0].nodeName.toLowerCase()&&b++&&(c+=" - "),e=e.parent();d+='<option value="'+a.attr("href")+'">'+c+a.text()+"</option>"});b.after('<select id="collapsedMenu'+a+'">'+d+"</select>");a=$fl("#collapsedMenu"+a);b.hasClass("hidden-t")&&(a.addClass("visible-t"),c=!0);if(b.hasClass("hidden-s")||
b.hasClass("hidden-phone"))a.addClass("visible-s"),c=!0;if(b.hasClass("hidden-m")||b.hasClass("hidden-desktop"))a.addClass("visible-m"),c=!0;b.hasClass("hidden-l")&&(a.addClass("visible-l"),c=!0);c||(b.addClass("hidden-t").addClass("hidden-s"),a.addClass("visible-t").addClass("visible-s"));a.bind("change",function(){window.location=$fl(this).val()})});$fl(".uploadButton input").bind("change",function(a){$fl(this).parent().find("span").html($fl(this).val().split(/(\\|\/)/g).pop())});$fl("table.responsive").each(function(a,
d){$fl(d).wrap('<div class="responsiveTableWrapper" />');$fl(d).wrap('<div class="responsiveTableWrapperInner" />')});$fl("#viewSlideInMenu").length&&($fl("body").append('<div id="slideInMenuOverlay"></div>').append('<div id="slideInMenu"></div>'),$fl("#slideInMenu").attr("aria-hidden",!0),$fl("ul.slideInMenu").each(function(a){$fl(this).hasClass("slideInMenuRootOnly")?($fl("#slideInMenuOverlay").html("<ul>"+$fl(this).html()+"</ul>").find("li ul").remove(),$fl("#slideInMenu").append($fl("#slideInMenuOverlay").html())):
$fl("#slideInMenu").append("<ul>"+$fl(this).html()+"</ul>")}),$fl("#slideInMenuOverlay").html("").bind("click",function(a){$fl("#slideInMenuOverlay").removeClass("slideInMenuShow");$fl("#slideInMenu").removeClass("slideInMenuShow").attr("aria-hidden",!0)}),$fl("#viewSlideInMenu").bind("click",function(a){$fl("#slideInMenuOverlay").addClass("slideInMenuShow");$fl("#slideInMenu").addClass("slideInMenuShow").attr("aria-hidden",!1)}))});
