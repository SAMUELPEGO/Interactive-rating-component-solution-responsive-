var ratings = document.getElementsByClassName("rating");
var button = document.getElementById("section_button");
var state = document.getElementById("thank_you_states");
var principal = document.getElementById("principal_section");
var Span = document.getElementById("span");

for (let i = 0; i < 6; i ++) {
ratings[i].addEventListener("click",function(){
    this.style.background = "hsl(216, 12%, 54%)";
    this.style.color = "hsl(0, 0%, 100%)";
    for (let x of ratings ) {
        if (x !== ratings[i]) {
            x.style.background = "hsl(217, 12%, 23%)";
            x.style.color =  "hsl(0, 0%, 50%)";
        }
    }
    button.addEventListener("click",function () {
          state.style.display = "flex";
          principal.style.display = "none";
          Span.style.color = "hsl(25, 97%, 53%)";
          Span.innerHTML = ratings[i].value;

    })
     
});
}
