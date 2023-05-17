//selectores:
//id = "el-1" => "#el-1"
//class= "el-1" => ".el-1"
//$(".el-1").hide()
$(document).ready(() => {
    $(".btn-hide").click( () => {
      //$("li").hide("slow")
        $("h1").fadeOut()

    });
    $(".btn-show").click( () => {
    //   $("li").show("slow")
         $("h1").fadeIn()
    });
    $("li").dblclick(()=>{
        $("h1").css({color:"red"})
    })
    
    // $("li").mouseenter(()=>{// usando jquery
    //     console.log("ha entrado el raton")
    // })
    $("li").mouseenter((elem)=>{// usando Javascript (hover)
    elem.target.style.color= "blue"
        })
     $("li").mouseleave((elem)=>{// usando Javascript (before)
          elem.target.style.color= "black"
    })
    $(".new-element").click(()=>{
        // $("ul").append("<li>New Element</li>") agrega al final
        $("ul").prepend("<li>New Element</li>")//arriba
    })
  });