alert('javascript connected');

$(document).ready(function(){
 
 $(".range").hide();
 $(".range").change(add_filter).mousemove(add_filter);
 $("#image_upload").change(function(){
	readURL(this);
 });


});

function readURL(input) {

  if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
		    $('#image').attr('src', e.target.result);
		}

		reader.readAsDataURL(input.files[0]);
   }
  
}

	
function add_filter()
{
 var grayscale_val=$("#grayscale").val();
 var blur_val=$("#blur").val();
 var exposure_val=$("#exposure").val();
 //var sepia_val=$("#sepia").val();
 var opacity_val=$("#opacity").val();

 $("#photo").css("-webkit-filter","grayscale("+grayscale_val+"%) blur("+blur_val+"px) brightness("+exposure_val+"%) sepia("+sepia_val+"%) opacity("+opacity_val+"%)");
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
