let slider=document.querySelector(".sliderBall")
let currmode="dark"
let root=document.querySelector(':root');
let mode=document.querySelector("#slideball")
let contact=document.querySelector("#contact")
slider.addEventListener("click",()=>{
    if(currmode==="dark"){
        slider.classList.add("slide")
        root.style.setProperty("--bg-color","#f5e9e9");
        root.style.setProperty("--nav-bg-color","rgb(159, 170, 150)");
        root.style.setProperty("--txt-col","rgb(21, 20, 20)");
        mode.innerHTML="<i class=\"fa-solid fa-sun\"></i>";
        contact.style.backgroundColor="rgb(225 213 213)"
        currmode="light"
    }else{
        slider.classList.remove("slide")
        root.style.setProperty("--bg-color","#232323");
        root.style.setProperty("--nav-bg-color","rgb(88, 98, 80)");
        root.style.setProperty("--txt-col","white");
        mode.innerHTML="<i class=\"fa-solid fa-moon\"></i>";
        contact.style.backgroundColor="rgb(46, 45, 45)"
        currmode="dark"
    }
})

document.getElementById('bar').addEventListener('click', function() {
    var menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
});

document.getElementById('cv').addEventListener('click', function() {

    var downloadLink = document.createElement('a');
    downloadLink.href = 'assets/anshit_sony_resume.pdf'; 
    downloadLink.download = 'Anshit_Sony_CV.pdf'; 

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
});
