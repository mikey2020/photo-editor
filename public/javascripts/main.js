$(document).ready(function(){
 
 $(".range").hide();
 $(".range").change(add_filter).mousemove(add_filter);
 $("#edit").click(blur());


});
	
function add_filter()
{
 var grayscale_val=$("#grayscale").val();
 var blur_val=$("#blur").val();
 var exposure_val=$("#exposure").val();
 //var sepia_val=$("#sepia").val();
 var opacity_val=$("#opacity").val();

 $("#photo").css("-webkit-filter","grayscale("+grayscale_val+"%) blur("+blur_val+"px) brightness("+exposure_val+"%) sepia("+sepia_val+"%) opacity("+opacity_val+"%)");
}

function changeToGrayscale(){
	let image = new Filters;
	console.log(image.width);
	image.getPixels(image);
	image.getCanvas("100","200");
	
}

class Filters{

	getPixels(img) {
	  var c = this.getCanvas(img.width, img.height);
	  var ctx = c.getContext('2d');
	  ctx.drawImage(img,img.width,img.height);
	  return ctx.getImageData(0,0,c.width,c.height);
	};

	getCanvas(w,h) {
	  var c = document.createElement('canvas');
	  c.width = w;
	  c.height = h;
	  return c;
	};


	filterImage(filter, image, var_args) {
	  var args = [this.getPixels(image)];
	  for (var i=2; i<arguments.length; i++) {
	    args.push(arguments[i]);
	  }
	  return filter.apply(null, args);
	};


	grayscale(pixels, args) {
	  var d = pixels.data;
	  for (var i=0; i<d.length; i+=4) {
	    var r = d[i];
	    var g = d[i+1];
	    var b = d[i+2];
	    // CIE luminance for the RGB
	    // The human eye is bad at seeing red and blue, so we de-emphasize them.
	    var v = 0.2126*r + 0.7152*g + 0.0722*b;
	    d[i] = d[i+1] = d[i+2] = v
	  }
	  return pixels;
	};

}

function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}

function convertImageToCanvas(image) {
	var canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;
	canvas.getContext("2d").drawImage(image, 100, 100);

	return canvas;
}
function blur(){
	var canvas = convertImageToCanvas(document.querySelector('img'));
	canvas.getContext('2d').filter = 'blur(50px)';
}
