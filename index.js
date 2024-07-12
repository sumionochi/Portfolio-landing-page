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
        y:"130svh",
        scale: 6,
        yPercent: -50,
    }),
    scrub: 1,
    trigger: "containlogo",
    start: "top center",
    endTrigger: ".header",
    end: "bottom bottom",
});

/* const tl=gsap.timeline({
    scrub:true,
    pin: true,
    ease: "none",
    scrollTrigger:{
        trigger:".lefttext",
        start: "top 90%",
        end: "top 5%",
        toggleActions: "restart reverse restart reverse",
    }
});

const tl1=gsap.timeline({
    scrub:true,
    pin:true,
    ease: "none",
    scrollTrigger:{
        trigger:".lefttext",
        start: "top 90%",
        end: "top 5%",
        toggleActions: "restart reverse restart reverse",
    }
});

tl.from(".lefttext", {x:-30,opacity: 0,duration: 2})
tl.to(".lefttext", {x:0,opacity:1, duration:2})

tl1.from(".righttext", {x:30,opacity: 0,duration:2})
tl1.to(".righttext", {x:0,opacity:1,duration:2}) */

ScrollTrigger.create({
    trigger: ".titlemain",
    delay:1,
    start: "top bottom",
    end: "top top",
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
    start: "top bottom",
    end: "top top",
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
    end:"+=2000",
    scrub:1,
    y:"1lvh",
    pin:true,
    stagger: 0,
    pinSpacing: true,
    pinnedContainer: ".allforone",
})
        
