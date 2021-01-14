// Overlay animation

TweenMax.to('.first', 1.5, {
    delay: 0.1,
    top: '-100%',
    ease: Expo.easeInOut
});

TweenMax.to('.second', 1.5, {
    delay: 0.3,
    top: '-100%',
    ease: Expo.easeInOut
});

TweenMax.to('.third', 1.5, {
    delay: 0.7,
    top: '-100%',
    ease: Expo.easeInOut
});

// header animation 

TweenMax.from('.logo img', 1.5, {
    delay: 1,
    y: '-100%',
    ease: Expo.easeInOut
});

TweenMax.from('nav ul li a', 1.5, {
    delay: 1.4,
    y: '-500%',
    ease: Expo.easeInOut
});

TweenMax.from('.basket', 1.5, {
    delay: 1.8,
    y: '-500%',
    ease: Expo.easeInOut
});

// product animation 

TweenMax.from('.product h1 .hide', 1.5, {
    delay: 2,
    y: '100%',
    ease: Expo.easeInOut
});

TweenMax.from('.product h3 .hide', 1.5, {
    delay: 2.4,
    y: '100%',
    ease: Expo.easeInOut
});

TweenMax.from('.product p .hide', 1.5, {
    delay: 2.8,
    y: '100%',
    ease: Expo.easeInOut
});

TweenMax.from('.product .btn a', 1.2, {
    delay: 2.2,
    y: '-100',
    ease: Expo.easeInOut
});

// product display animation

TweenMax.from('.butter', 1.5, {
    delay: 2.4,
    y: '-140%',
    ease: Expo.easeInOut
});

TweenMax.from('.popcorn-1', 1.5, {
    delay: 2.4,
    y: '100%',
    ease: Expo.easeInOut
});

TweenMax.from('.popcorn-2', 1.5, {
    delay: 2.4,
    y: '200%',
    ease: Expo.easeInOut
});

TweenMax.from('.popcorn-3', 1.2, {
    delay: 3.5,
    y: '-650%',
    ease: Expo.easeInOut
});

TweenMax.from('.backdrop', 1.5, {
    delay: 2,
    y: '100%',
    ease: Expo.easeInOut
});




const sofaPath = {
    values: [
        {x:600, y:-200},
        {x:1500, y:0},

    ]
}

const tvPath = {
    values: [
        {x:-743, y:0},
    ]
}

const manPath = {
    values: [
        {x:1400, y:-300},
        {x:1250, y:200},
        {x:1000, y:-110},
    ]
}

const womanPath = {
    values: [
        {x:-1300, y:650},
        {x:-1000, y:450},
        {x:-1150, y:170},
    ]
}







const tween = new TimelineLite();

tween.add (
    TweenLite.to(".sofa", 1, {
        bezier: sofaPath,
        ease: Power1.easeInOut
    })
);

tween.add (
    TweenLite.to(".tv", 1, {
        bezier: tvPath,
        ease: Power1.easeInOut
    })
);

tween.add (
    TweenLite.to(".man", 1, {
        bezier: manPath,
        ease: Power1.easeInOut
    })
);

tween.add (
    TweenLite.to(".woman", 1, {
        bezier: womanPath,
        ease: Power1.easeInOut
    })
);






const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 3000,
    triggerHook: 0
    
})

.setTween(tween)
.setPin('.animation')
.addTo(controller);