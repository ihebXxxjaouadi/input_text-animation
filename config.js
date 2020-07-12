var myInput_text = document.getElementById("input_text"),
  myInput_line = document.getElementById("input_line") ;

myInput_text.addEventListener("click", ()=> {
  myInput_line.style.width = "100%"
})

myInput_text.addEventListener("blur", ()=> {
  myInput_line.style.width = "0px"
})
