let section=document.querySelector("#section")
let Btn=document.querySelector("#btn");
let eye=document.querySelector("#eye");
let bir=document.querySelector("#bir");
let iki=document.querySelector("#iki");
let uc=document.querySelector("#uc");
let un=document.querySelector("#un");
let ne=document.querySelector("#ne");
let sa=document.querySelector("#sa");

bir.addEventListener("click", () => {
    if (iki.style.display === "none" && ne.style.display === "none" && uc.style.display === "none" && sa.style.display === "none") {
        iki.style.display = "block";
        ne.style.display = "block";
        Btn.innerHTML = " Send Feedback";
        uc.style.display = "block";
        sa.style.display = "block";
        eye.innerHTML = "👀";
        section.style.backgroundColor = "";
    } else {
        iki.style.display = "none";
        ne.style.display = "none";
        Btn.innerHTML = "Thanks for feedback";
        uc.style.display = "none";
        sa.style.display = "none";
        section.style.backgroundColor = "red";
        eye.innerHTML = "😊";
    }
});

iki.addEventListener("click", () => {
    if (bir.style.display === "none" && un.style.display === "none" && uc.style.display === "none" && sa.style.display === "none") {
        bir.style.display = "block";
        un.style.display = "block";
        Btn.innerHTML = " Send Feedback";
        uc.style.display = "block";
        sa.style.display = "block";
        eye.innerHTML = "👀";
        section.style.backgroundColor = "";
    } else {
        bir.style.display = "none";
        un.style.display = "none";
        Btn.innerHTML = "Thanks for feedback";
        uc.style.display = "none";
        sa.style.display = "none";
        eye.innerHTML = "😐";
        section.style.backgroundColor = "blue";
    }
});

uc.addEventListener("click", () => {
    if (bir.style.display === "none" && un.style.display === "none" && iki.style.display === "none" && ne.style.display === "none") {
        bir.style.display = "block";
        un.style.display = "block";
        Btn.innerHTML = " Send Feedback";
        iki.style.display = "block";
        ne.style.display = "block";
        section.style.backgroundColor = "";
        eye.innerHTML = "👀";
    } else {
        bir.style.display = "none";
        un.style.display = "none";
        Btn.innerHTML = "Thanks for feedback";
        iki.style.display = "none";
        ne.style.display = "none";
        section.style.backgroundColor = "green";
        eye.innerHTML = "😊";   
    }
});
