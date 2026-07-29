const hamburger = document.getElementsByClassName("hamburger")[0];
const menu = document.getElementsByClassName("menu")[0];

hamburger.addEventListener ("click", function() {
    menu.classList.toggle("show");
});






const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{
    const target=
    Number(counter.dataset.target);


let count=0;

const updateCounter=() => {
    const increment = target / 100;

    count+=increment;
    if(count<target){
        counter.textContent= Math.ceil(count);

        requestAnimationFrame(updateCounter);
    }else{
        counter.textContent=target;
    }
};

updateCounter();
})