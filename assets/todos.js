$(document).ready(function(){
  $("ul").on("click","li",function(){
    $(this).toggleClass("completed");
  });
});

$(document).ready(function(){
  $("ul").on("click","span",function(){
    $(this).parent().fadeOut(1000,function(){
      $(this).remove();
    });

  });
});

$(document).ready(function(){
$("input[type='text']").keypress(function(event){
  if (event.which === 13){
    var todotext = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" +todotext + "</li>")
  }
});
});

$(document).ready(function(){
$(".fa-plus").click(function(){
  $("input").fadeToggle();
});
});
