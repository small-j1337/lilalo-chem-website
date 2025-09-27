function renderNavbar(){
    return `      <div class = "navbar">
            <h1 class = "website-name">LILALO Chemistry</h1>
            <nav class = "links">
                <ul>
                    <li><a href = "/">Home</a></li>
                    <li><a class = "units-link" id = "units-link">Units<span class = "units-dropdown-arrow" id = "units-dropdown-arrow">▾</span></a></li>
                    <li><a class = "blogs-link" id = "blogs-link">Research Blogs<span class = "blogs-dropdown-arrow" id = "blogs-dropdown-arrow">▾</span></a></li>
                    <li><a href = "/about-the-creators/">About the Creators</a></li>
                </ul>
            </nav>
            <img class = "hamburger-menu" id = "hamburger-menu" src = "/images/Hexagon Menu Icon.png">
        </div>
        <div class = "units-dropdown-menu" id = "units-dropdown-menu">
            <div class = "units-content">
                <div class = "units-box-1">
                    <h1>Units</h1>
                    <p>List of all Chem H units. Current icons, colors & fonts are temporary.</p>
                </div>
                <div class = "units-box-2">
                    <button class = "units-option" onclick = "location.assign('./units/unit-1/')">
                        <img src = "../../images/placeholder.jpg">
                        <h3>Unit 1<p>Foundations of Chemistry</p></h3>
                    </button>
                    <button class = "units-option" onclick = "location.assign('./units/unit-2/')">
                        <img src = "../../images/placeholder.jpg">
                        <h3>Unit 2<p>Atomic Structure</p></h3>
                    </button>
                    <button class = "units-option" onclick = "location.assign('./units/unit-3/')">
                        <img src = "../../images/placeholder.jpg">
                        <h3>Unit 3<p>Electronic Structure</p></h3>
                    </button>
                    <button class = "units-option" onclick = "location.assign('./units/unit-4/')">
                        <img src = "../../images/placeholder.jpg">
                        <h3>Unit 4<p>Chemical Bonding</p></h3>
                    </button>
                    <button class = "units-option" onclick = "location.assign('./units/unit-5/')">
                        <img src = "../../images/placeholder.jpg">
                        <h3>Unit 5<p>Chemical Reactions</p></h3>
                    </button>
                    <button class = "units-option" onclick = "location.assign('./units/unit-6/')">
                        <img src = "../../images/placeholder.jpg">
                        <h3>Unit 6<p>Stoichiometry</p></h3>
                    </button>
                    <button class = "units-option" onclick = "location.assign('./units/unit-7/')">
                        <img src = "../../images/placeholder.jpg">
                        <h3>Unit 7<p>Thermochemistry</p></h3>
                    </button>
                    <button class = "units-option" onclick = "location.assign('./units/unit-8/')">
                        <img src = "../../images/placeholder.jpg">
                        <h3>Unit 8<p>Equilibrium, Acid & Bases</p></h3>
                    </button>
                </div>
            </div>
        </div>
        <div class = "blogs-dropdown-menu" id = "blogs-dropdown-menu">
            <div class = "blogs-content">
                <h3 style = "text-align: center; margin: 5vw;">Welcome to the animated dropdown navigation. This dropdown will have the menu for the research blogs, and will likely have cool illustrations for them. Stay Tuned!
                </h3>

            </div>
        </div>


        <!--Mobile Navigation-->
        <div class = "mobile-overlay" id = "mobile-overlay">
            <ul class = "mobile-menu">
                <li><a href = "/../">Home</a></li>
                <li><a>Units</a></li>
                <li><a>Research Blogs</a></li>
                <li><a href = "/../about-the-creators/">About the Creators</a></li>
            </ul>
        </div>`
}

document.getElementById("header").innerHTML = renderNavbar();






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