function colo()
{
	var col=["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg"];
	var len=col.length;
	var ran=Math.random()*len;
	var rannum=Math.round(ran);
	document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")";
	var updatethetime=setTimeout(function(){colo()},1000);
}
function colo2()
{
	var col=["a1.jpg","b1.jpg","c1.jpg","d1.jpg","e1.jpg","f1.jpg","g1.jpg","h1.jpg"];
	var len=col.length;
	var ran=Math.random()*len;
	var rannum=Math.round(ran);
	document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")";
	var updatethetime=setTimeout(function(){colo2()},1000);
}
function colo3()
{
	var col=["a2.jpg","b2.jpg","c2.jpg","d2.jpg","e2.jpg","f2.jpg","g2.jpg","h2.jpg"];
	var len=col.length;
	var ran=Math.random()*len;
	var rannum=Math.round(ran);
	document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")";
	var updatethetime=setTimeout(function(){colo3()},1000);
}
function colo4()
{
	var col=["a3.jpg","b3.jpg","c3.jpg","d3.jpg","e3.jpg","f3.jpg","g3.jpg","h3.jpg"];
	var len=col.length;
	var ran=Math.random()*len;
	var rannum=Math.round(ran);
	document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")";
	var updatethetime=setTimeout(function(){colo4()},1000);
}
function colo5()
{
	var col=["a4.jpg","b4.jpg","c4.jpg","d4.jpg","e4.jpg","f4.jpg","g4.jpg","h4.jpg"];
	var len=col.length;
	var ran=Math.random()*len;
	var rannum=Math.round(ran);
	document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")";
	var updatethetime=setTimeout(function(){colo5()},1000);
}
//from here gallary code starts
function imgK(pic,heading,discription)
{
	document.getElementById("bigscreen").removeAttribute("style");
	document.getElementById("imghead").innerHTML=heading;
	document.getElementById("imgpara").innerHTML=discription;
	bigscreen.style.display="flex";
	fullimg.src=pic;
}
function imgV()
{
	document.getElementById("bigscreen").setAttribute("style", "display:none");
	//console.log("calling");
}
