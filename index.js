const text = document.querySelector(".text");
const textload = () => {
    setTimeout(() => {
        text.textContent = "Software Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Frontend Designer"
    }, 1000);
    setTimeout(() => {
        text.textContent = "Backend Engineer"
    }, 2000);
    setTimeout(() => {
        text.textContent = "Hobbyist"
    }, 3000);
}

textload();
setInterval(textload,4000);

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    animation: gsap.from(".logo",{
        y:"130vh",
        scale: 6,
        yPercent: -50,
    }),
    scrub: 1,
    pin: true,
    trigger: "containlogo",
    start: "top center",
    endTrigger: ".header",
    end: "bottom bottom",
});

const tl=gsap.timeline({
    scrub:true,
    pin: true,
    ease: "none",
    scrollTrigger:{
        trigger:".lefttext",
        start: "top 90%",
        end: "top 10%",
        toggleActions: "restart reverse restart reverse",
    }
});

const tl1=gsap.timeline({
    scrub:true,
    pin:true,
    ease: "none",
    scrollTrigger:{
        trigger:".righttext",
        start: "top 90%",
        end: "top 10%",
        toggleActions: "restart reverse restart reverse",
    }
});

tl.from(".lefttext", {x:-100,opacity: 0,duration: 2})
tl.to(".lefttext", {x:0,opacity:1, duration:2})

tl1.from(".righttext", {x:100,opacity: 0,duration:2})
tl1.to(".righttext", {x:0,opacity:1,duration:2})

ScrollTrigger.create({
    trigger: ".titlemain",
    delay:1,
    start: "top 80%",
    end: "top 20%",
    toggleClass: "titlemain-active",
})

ScrollTrigger.create({
    trigger: ".aboutmain",
    delay:1,
    start: "top bottom",
    end: "top top",
    toggleClass: "aboutmain-active",
})

ScrollTrigger.create({
    trigger: ".titlemain2",
    delay:1,
    start: "top 80%",
    end: "top 20%",
    toggleClass: "titlemain-active2",
})

const move = gsap.timeline();

move.to(".allforone",5,{x:-window.innerWidth})
.to(".allforone",5,{x:-window.innerWidth*2})
.to(".allforone",5,{x:-window.innerWidth*3})

ScrollTrigger.create({
    animation:move,
    trigger:".allforone",
    start:"center center",
    end:"+=4000",
    scrub:true,
    pin:true
})

