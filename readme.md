关于jquery-picon.js
==================

##1.介绍
jquery-picon.js是一款基于jquery的轻量级引导框插件


##2.使用方法
````javascript
$("body").picon({
			'start': [起始点x坐标, 起始点y坐标],
			'middle': [折点x坐标,折点y坐标],
			'text': '文本框内显示的内容',  //支持html
			'fontSize': 字体大小
});

````
###示例
``````javascript
$("body").picon({
			'start': [100,100],
			'middle': [150,150],
			'text': '<span style=\'color:red\'>dgdfadfgad</span>',
			'fontSize': 25
		});
``````



