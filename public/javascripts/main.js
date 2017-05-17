alert('javascript connected');

$(document).ready(function(){
 
 $(".range").hide();
 $("#edit").click(function(){
 	$(".range").show();
 }

 );
 $("#blur").change(blur()).mousemove(blur());
 $("#image_upload").change(function(){
	readURL(this);
 });



});

 /*function edit(){
 	blur()
 };*/


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
	var blur_val=$("#blur").val();
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = new Image();
    var img = document.getElementById("image");
	console.log(img);
	ctx.filter = "blur(" + blur_val + "px)";
	ctx.drawImage(img,0,0,500,500);
}

function sepia(){
	var sepia_val=$("#sepia").val();
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = new Image();
    var img = document.getElementById("image");
	console.log(img);
	ctx.filter = "sepia(" + sepia_val + "px)";
	ctx.drawImage(img,0,0,500,500);
}


