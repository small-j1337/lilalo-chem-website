const unitsDropdownArrow = document.getElementById('units-dropdown-arrow');
const unitsDropdownMenu = document.getElementById('units-dropdown-menu');
const blogsDropdownArrow = document.getElementById('blogs-dropdown-arrow');
const blogsDropdownMenu = document.getElementById('blogs-dropdown-menu');

//change color of blogs link if it is active
if(blogsDropdownMenu.classList.contains("show")){

}
//change color of units link if it is active
if(unitsDropdownMenu.classList.contains("show")){

}

//for clicking on the units dropdown
document.getElementById("units-link").addEventListener("click", function() {
    //if the blogs dropdown is active and I click on the units dropdown, remove all transitions
    if(blogsDropdownMenu.classList.contains("show")){
        blogsDropdownMenu.style.transition = "0s transform linear";
        unitsDropdownMenu.style.transition = "0s transform linear";
    }
    //restore all transitions if I don't click on a dropdown while the other is active
    else{
        blogsDropdownMenu.style.transition = "1s transform ease";
        unitsDropdownMenu.style.transition = "1s transform ease";
    }
    
    //show the units dropdown
    unitsDropdownArrow.classList.toggle('rotated');
    unitsDropdownMenu.classList.toggle('show');
    //hide the blogs dropdown
    blogsDropdownMenu.classList.remove('show');
    blogsDropdownArrow.classList.remove('rotated');
});

document.getElementById("blogs-link").addEventListener("click", function() {
    //if I click on the dropdown while another is active, remove all transitions
    if(unitsDropdownMenu.classList.contains("show")){
        blogsDropdownMenu.style.transition = "transform 0s linear";
        unitsDropdownMenu.style.transition = "transform 0s linear";
    }
    //restore all transitions if I don't click on a dropdown while another is active
    else{
        blogsDropdownMenu.style.transition = "1s transform ease";
        unitsDropdownMenu.style.transition = "1s transform ease";
    }
    
    blogsDropdownMenu.classList.toggle('show');
    blogsDropdownArrow.classList.toggle('rotated');
    unitsDropdownMenu.classList.remove('show');
    unitsDropdownArrow.classList.remove('rotated');

});

document.getElementById("hamburger-menu").addEventListener("click",function(){
    document.getElementById("mobile-overlay").classList.toggle('show');
});