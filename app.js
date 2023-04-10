const dropdown = document.querySelectorAll("dd");

dropdown.forEach(function(dd_menu){
    dd_menu.addEventListener("click", function(){
        dropdown.forEach(function(dd_menu){
            dd_menu.classList.remove("hidden");
        })
        dd_menu.classList.add("hidden");
    })
})
