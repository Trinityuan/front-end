//通过id返回元素对象
function getEleById(idStr){
	return document.getElementById(idStr);
}
var $ = getEleById

//通用获取页面元素style样式
function getStyle(eleObj,Attr){
	//返回的属性值是一个字符串，因此赋处置为""
	var attrStyle = "";
	if (Attr.currentStyle) {
		//IE浏览器的style
		attrStyle = eleObj.currentStyle[Attr];
	}else{
		//其他浏览器获取的style
		attrStyle = window.getComputedStyle(eleObj,null)[Attr];
	}
	return attrStyle;
}

//随机返回一个随机颜色
function getRandomColor(){
	var color = "#";
	var colorEle = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
	for (var i=0;i<6;i++) {
		color += colorEle[Math.floor(Math.random()*15)];
	}
	return color
}
//获得阶乘值
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}
//判断是不是闰年的函数
function isLoop(year) {
	if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
		return true;
	} else {
		return false;
	}
}
//从cookie中通过键获取对应的值
function getCookieValue(cookieStr,cookieKey){
	var aCookie = cookieStr.split("; ");
	var cookieVaue = "";
	for (i in aCookie) {
		var tCookie = aCookie[i].split("=");
		if (tCookie[0] === cookieKey) {
			cookieVaue = tCookie[1];
		}
	}
	return cookieVaue;
}
