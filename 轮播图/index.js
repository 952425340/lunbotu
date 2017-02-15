
// jQuery 出让 $ 符号的使用权限(也就是说，从这里开始 $ 将不是jQuery,只能用变量名 jQuery)
jQuery.noConflict();
jQuery('.zy-slide').zySlide({delay:1000,speed:2000}).css('background-color','yellow');
// zySlide() 只要轮播图的根标签 (任何选择器)
//jQuery('#slide').zySlide();
