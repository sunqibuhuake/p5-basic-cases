var img;
var filterMode = 'NONE';
function preload() {
	function onSuccess() {
		// alert('图片加载成功');

	}
	function onError() {
		alert('图片加载异常')
	}
	img = loadImage("http://oojq4xaei.bkt.clouddn.com/xyy.jpeg", onSuccess, onError);
}
function setup() {
	createCanvas(500,500)
	$('.filterSelect').click(function() {
		var modeName = $(this).html();
		filterMode = modeName;
		// console.log(modeName);
	})

}
function draw() {
	image(img, 0, 0, 500, 500);
	if(filterMode == 'NONE') {
		// DO nothing
		return false;
	} else {
		filter(filterMode)
	}
}
