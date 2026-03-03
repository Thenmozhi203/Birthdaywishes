function login(){
    let id=document.getElementById("userid").value;
    let pass=document.getElementById("password").value;

    if(id==="IndhuThenu" && pass==="04/03/2005"){
        nextPage(2);
    }else{
        document.getElementById("error").innerText="Wrong ID or Password!";
    }
}

function nextPage(page){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    document.getElementById("page"+page).classList.add("active");
}

function yesAnswer(){
    nextPage(4);  // ONLY here page4 appears
}

/* No button runs when cursor comes near */
document.addEventListener("mousemove", function(e){
    let btn=document.getElementById("noBtn");
    if(!btn || btn.offsetParent===null) return;

    let rect=btn.getBoundingClientRect();
    let x=rect.left+rect.width/2;
    let y=rect.top+rect.height/2;

    let distance=Math.sqrt(
        Math.pow(e.clientX-x,2)+
        Math.pow(e.clientY-y,2)
    );

    if(distance<100){
        btn.style.position="absolute";
        btn.style.left=Math.random()*(window.innerWidth-100)+"px";
        btn.style.top=Math.random()*(window.innerHeight-50)+"px";
    }
});