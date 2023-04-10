const dropdown = document.querySelectorAll("dd");

dropdown.forEach(function(dd_menu){
    dd_menu.addEventListener("click", function(){
        dropdown.forEach(function(dd_menu){
            dd_menu.classList.remove("hidden");
        })
        dd_menu.classList.add("hidden");
    })
})


//dropdown.forEach(dd_menu => {
   // dropdown.addEventListener('click', () => {
        //document.querySelector('.hidden')?.classList.remove('hidden');
        //dropdown.classList.add('hidden');
    //});
//});






//const selectedSummary = document.querySelectorAll('.summary');

//selectedSummary.forEach(summary => {
  //  summary.addEventListener('click', () => {
    //    document.querySelector('.active')?.classList.remove('active');
      //  summary.classList.add('active');
    //});
//});
