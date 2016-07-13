function show(translateStr) {
	//输入的汉字
	$("cnchar").innerHTML = translateStr.query;
	//拼音和音标
	if (translateStr.basic && translateStr.basic.phonetic) {
		$("pinyin").innerHTML = "[" + translateStr.basic.phonetic + "]";
	} else {
		$("pinyin").innerHTML = "";
	}
	//释义
	//清空翻译的内容
	$("resultlist").innerHTML = "";
	//如果基本释义没有的话，就使用translate的内容
	var translates = null;
	if (translateStr.basic) {
		translates = translateStr.basic.explains;
	} else{
		translates = translateStr.translation;
	}
	//循环输出释义
	for (var i = 0; i < translates.length; i++) {
		var oTransResult = document.createElement("li");
		oTransResult.innerText = translates[i];
		$("resultlist").appendChild(oTransResult);
	}
	//展示翻译页面
	$("trans-result-cn").style.display = "block";

}
//当点击翻译按钮之后，从服务器获取数据
$("transbut").onclick = function() {
	var oBody = document.getElementsByTagName("body")[0];
	var oYoudao = document.createElement("script");
	oYoudao.src = "http://fanyi.youdao.com/openapi.do?keyfrom=zzting&key=685981138&type=data&doctype=jsonp&callback=show&version=1.1&q=" + $("transinput").value;
	oYoudao.charset = "UTF-8";
	oYoudao.type = "text/javascript";
	oBody.appendChild(oYoudao);
}
//按下回车按钮之后，也获取服务器
var getTrans = $("transbut").onclick;
document.onkeydown = function(event) {
	event = event || window.event;
	if (event.keyCode == 13) {
		getTrans();
	}
}
//声音api
//http://dict.youdao.com/dictvoice?audio=hello