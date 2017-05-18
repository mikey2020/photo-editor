alert('javascript connected');

$(document).ready(function(){
 
 $(".range").hide();


 $("#save").click(function() { $
 	(".range").hide()});

 $("#edit").click(function(){
 	$(".range").show();
 	$("#image").hide();
 });

  $("#image_upload").change(function(){
		readURL(this);
  });
 $("#blur").change(blur);//mousemove(blur);
 $("#sepia").change(sepia);
 $("#brightness").change(brightness);
 $("#opacity").change(opacity);
 $("#saturate").change(saturation);
 $("#greyscale").change(greyscale);
 $("#invert").change(invert);
 $("#hue").change(hueRotation);
 $("#contrast").change(contrast);
 

 var grayscale_val=$("#grayscale").val();
 var blur_val=$("#blur").val();
 var brightness_val=$("#brightness").val();
 var opacity_val=$("#opacity").val();
 var saturate_val=$("#saturate").val();
 var sepia_val=$("sepia").val();
 
 $(".range").change(function(){
 	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
	console.log(img);
	ctx.drawImage(img,0,0,500,500);
	ctx.filter = "saturate(" + saturate_val + "%) grayscale("+grayscale_val+"%) blur("+blur_val+"px) brightness("+brightness_val+"%) sepia("+sepia_val+"%) opacity("+opacity_val+"%)";
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


/*function add_filter()
{
 var grayscale_val=$("#grayscale").val();
 var blur_val=$("#blur").val();
 var exposure_val=$("#exposure").val();
 //var sepia_val=$("#sepia").val();
 var opacity_val=$("#opacity").val();

 $(".range").change(function(){
 	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
	console.log(img);
	ctx.drawImage(img,0,0,500,500);
	ctx.filter = "saturate(" + saturate_val + "%) grayscale("+grayscale_val+"%) blur("+blur_val+"px) brightness("+exposure_val+"%) sepia("+sepia_val+"%) opacity("+opacity_val+"%)";
 });
 //.css("-webkit-filter","grayscale("+grayscale_val+"%) blur("+blur_val+"px) brightness("+exposure_val+"%) sepia("+sepia_val+"%) opacity("+opacity_val+"%)");
}
*/
function getImage(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
    ctx.drawImage(image,0,0,500,500);
}


function blur(){
	var blur_val=$("#blur").val();
	console.log(blur_val);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var image = document.getElementById("image");
    ctx.drawImage(image,0,0,500,500);
    ctx.filter = "blur(" + blur_val + "px)";
    //var image_url = canvas.toDataURL("image/png");
    //console.log(image_url);
   
	console.log(image);
}



function sepia(){
	var sepia_val=$("#sepia").val();
	console.log(sepia_val);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
	console.log(img);
	ctx.drawImage(img,0,0,500,500);
	ctx.filter = "sepia(" + sepia_val + "px)";
	console.log(img);
}

function brightness(){
	var brightness_val=$("#brightness").val();
	console.log(brightness_val);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
	console.log(img);
	ctx.drawImage(img,0,0,500,500);
	ctx.filter = "brightness(" + brightness_val + "%)";
	console.log(img);
}

function opacity(){
	var opacity_val=$("#opacity").val();
	console.log(opacity_val);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
	console.log(img);
	ctx.drawImage(img,0,0,500,500);
	ctx.filter = "opacity(" + opacity_val + "%)";
	console.log(img);
}

function saturation(){
	var saturate_val=$("#saturate").val();
	console.log(saturate_val);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
	console.log(img);
	ctx.drawImage(img,0,0,500,500);
	ctx.filter = "saturate(" + saturate_val + "%) grayscale("+grayscale_val+"%) blur("+blur_val+"px) brightness("+exposure_val+"%) sepia("+sepia_val+"%) opacity("+opacity_val+"%)";
	console.log(img);
}

function greyscale(){
	var greyscale_val=$("#greyscale").val();
	console.log(greyscale_val);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
	console.log(img);
	ctx.drawImage(img,0,0,500,500);
	ctx.filter = "greyscale(" + greyscale_val + "%) ";
	console.log(img);
}

function contrast(){
	var contrast_val=$("#contrast").val();
	console.log(contrast_val);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
	console.log(img);
	ctx.drawImage(img,0,0,500,500);
	ctx.filter = "contrast(" + contrast_val + "%) ";
	console.log(img);
}

	
function invert(){
	var invert_val=$("#invert").val();
	console.log(invert_val);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
	console.log(img);
	ctx.drawImage(img,0,0,500,500);
	ctx.filter = "invert(" + invert_val + "%) ";
	console.log(img);
}

function hueRotation(){
	var hue_val=$("#hue").val();
	console.log(hue_val);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
	console.log(img);
	ctx.drawImage(img,0,0,500,500);
	ctx.filter = "hue-rotation(" + hue_val + "deg) ";
	console.log(img);
}

function dropShadow(){
	var drop_val=$("#drop").val();
	console.log(drop_val);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
	console.log(img);
	ctx.drawImage(img,0,0,500,500);
	ctx.filter = "drop-shadow(" + drop_val + "%) ";
	console.log(img);
}


