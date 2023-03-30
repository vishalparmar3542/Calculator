function calculate()
{
    var val=document.querySelector("#textinput").value;
       console.log(val);
    var result=eval(val);
    document.querySelector("#textinput").value=result;
   
  var his=val;
   document.querySelector("#history").innerHTML=his;
   document.querySelector("#history").style.display="inline-block";



}
function addval(val)
{
    var va=document.querySelector("#textinput").value;
    document.querySelector("#textinput").value=(va+val);

}
function allclear()
{   console.log("called");
    document.querySelector("#textinput").value="";
}
function oneclear()
{   
   var ob= document.querySelector("#textinput").value;
   ob=ob.slice(0,(ob.length-1));
   console.log(ob);
   document.querySelector("#textinput").value=ob;
}
function operator(option){
    switch (option) {
        case "divide":
            addval("/");
            break;
            case "multi":
                addval("*");
                break;
            case "minus":
         addval("-");
                break;
                case "plus":
          addval("+");
                    break;       
        default:
            break;
    }

}

/*
  function fval()
  {
   var val=document.querySelector("#textinput").value;

  }
*/
