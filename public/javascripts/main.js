$(document).ready(function(){
 
 $(".range").hide();
 $(".range").change(add_filter).mousemove(add_filter);
 $("#edit_control").click(function() { $
 	(".range").show()});

 $("#save").click(function() { $
 	(".range").hide()});
});
	
function add_filter()
{
 var grayscale_val=$("#grayscale").val();
 var blur_val=$("#blur").val();
 var exposure_val=$("#exposure").val();
 var sepia_val=$("#sepia").val();
 var opacity_val=$("#opacity").val();

 $("#photo").css("-webkit-filter","grayscale("+grayscale_val+"%) blur("+blur_val+"px) brightness("+exposure_val+"%) sepia("+sepia_val+"%) opacity("+opacity_val+"%)");
}
