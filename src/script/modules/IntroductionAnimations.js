import TweenMax, {
    TimelineLite,
    Power4,
    TimelineMax,
    Back
} from 'gsap';
import SplitText from '../vendor/SplitText.min.js';

class IntroductionAnimations {
    constructor() {
        console.log("hello from intro animations");
        this.headingSplitText = null;
    }

    revertContent() {
        this.headingSplitText.revert();
    }

    LoadingAnimations() {
        const jsLogo = document.querySelector('#js-logo'),
              jsLoadPage = document.querySelector('#js-load-page'),
              jsLandingBG2 = document.querySelector('.hero__bg-imgs--2'),
              tlLoading = new TimelineLite();

        tlLoading.set(jsLogo, {
            scale: 1.1
        });
        tlLoading.to(jsLogo, 2, {
            opacity: 1,
            scale: 1,
            ease: Power4.easeOut
        })
        tlLoading.to(jsLogo, 1, {
            opacity: 0,
            ease: Power4.easeOut
        }, '+=1.5')
         tlLoading.to(jsLoadPage, 4, {
             opacity: 0,
             autoAlpha: 0,
             ease: Power4.easeOut
         })
         .to(jsLandingBG2, 4, {
             scale: 1,
             ease: Power4.easeOut
         }, '-=3.95')
         .set(jsLoadPage, {
             display: 'none'
         });

        return tlLoading;
    }

    LandingAnimations(){

        // VARIABLES
        let bgImg     = document.querySelector(".hero__bg-imgs--2"),
            heroContentFirst = document.querySelector(".hero__content--first"),
            tagline   = document.querySelector(".hero__content--first .content__tagline .tagline"),
            caption = document.querySelector(".hero__content--first .content__caption"),
            splitTextTagline = new SplitText(tagline, { type: 'chars' }),
            taglineChars = splitTextTagline.chars,
            heroContentSecond = document.querySelector('.hero__content--second'),
            navigation = document.querySelector('.navigation'),
            tlLanding = new TimelineLite();
        
        // Timeline property setup - hero__content--first
        tlLanding.set(taglineChars, { opacity: 0, y: 10 });
        tlLanding.set(tagline, { opacity: 1 });

        // Timeline property animations - bgimg and hero__content--first
        tlLanding.to(bgImg, 3, { opacity:1, scale: 1, ease:Power4.easeOut});
        tlLanding.addLabel('bg-in', '-=2.2');
        tlLanding.addLabel("all-content-in", "+=6");
        tlLanding.staggerTo(taglineChars, 0.6, { opacity: 1, y: 0 }, 0.03, 'bg-in');
        tlLanding.to(caption, 4, { opacity: 1, ease: Power4.easeOut }, '-=.4');
        tlLanding.to(heroContentFirst, 1.2, { opacity: 0, autoAlpha: 0, ease: Power4.easeOut }, "all-content-in");
        
        // // Timeline property animations - bgimg and hero__content--second
        tlLanding.addLabel('hero__content--second-assets', '-=.6');
        tlLanding.to(heroContentSecond, 1.5, { opacity: 1 }, 'hero__content--second-assets');
        tlLanding.to(navigation, 0.8, { opacity: 1 }, 'hero__content--second-assets');

        return tlLanding;
    }

    AnimateTimelines() {
        new TimelineMax({delay: 1.3})
        .add(this.LoadingAnimations)
        .add(this.LandingAnimations, '+=4');
    }

};

export default IntroductionAnimations;

// let heading = document.querySelector("#js-landing-hero-header"),
//       headingSplitText = new SplitText(heading, {
//               type: "chars"
//       }),
//       headingSplitTextChars = headingSplitText.chars,
//       tlLanding  = new TimelineLite();

// tlLanding.staggerFrom(headingSplitTextChars, 0.8, { opacity: 1}, 0.8)
// .call(this.revertContent);


/**
 *
    loadingAnimations() {
        let jsLoadOverlay = document.querySelector('#js-load-overlay'),
            jsLogo = document.querySelector('#js-logo'),
            jsSymbolC = document.querySelector('.letter--c'),
            jsSymbolB = document.querySelector('.letter--b'),
            jsLettersTop = document.querySelectorAll('.letters-top'),
            jsLettersBottom = document.querySelectorAll('.letters-bottom'),
            tlLoading = new TimelineLite();

        tlLoading
            .set(jsSymbolC, {
                strokeDasharray: '363',
                strokeDashoffset: '-363'
            })
            .set(jsSymbolB, {
                strokeDasharray: '558',
                strokeDashoffset: '-558'
            })
            .set(jsLettersTop, {
                strokeDasharray: '210',
                strokeDashoffset: '-210'
            })
        //     .addLabel('symbol-logo-stroke')
            .to([jsSymbolC, jsSymbolB], 1.5, {
                    strokeDashoffset: '0',
                    opacity: '1',
                    fill: 'rgba(148,193,61,0)',
                    ease: Power4.easeOut
                })
        //         // 'symbol-logo-in'
        //     )
            .addLabel('symbols-in', '-=1.3')
            .to([jsLettersTop], 2.5, {
                strokeDashoffset: '0',
                opacity: '1',
                fill: 'rgba(88, 87, 87, 0)',
                ease: Power4.easeOut
            }, 'symbols-in')
            .to(jsLettersBottom, 4, {
                strokeDashoffset: '0',
                opacity: '1',
                fill: 'rgba(156,156,155,0)',
                ease: Power4.easeOut
            }, '-=1.7')
            .addLabel('letters-in', '-=3.8')
            .to([jsSymbolC, jsSymbolB], 1, {
                fill: 'rgba(148,193,61,1)'
            }, 'letters-in')
            .to([jsLettersTop], 1, {
                fill: 'rgba(88, 87, 87, 1)'
            }, 'letters-in')
            .to([jsLettersBottom], 1, {
                fill: 'rgba(156,156,155,1)'
            }, 'letters-in');
        // .to(jsLoadingPage, 0.7, {opacity: 0, autoAlpha: 0, ease: Power4.easeOut}, "-=1.8");
        return tlLoading;
    }

    revertContent(){
        this.headingSplitText.revert();
    }

    landingAnimations(){
        let jsLoadingPage = document.querySelector('#js-load-page'),
            jsLandingHero = document.querySelector('#js-landing-hero'),
            jsLandingNavigation = document.querySelector('#js-landing-navigation'),
            jsLandingHeroHeader = document.querySelector("#js-landing-hero-header"),
            jsLandingHeroCta = document.querySelector("#js-landing-hero-cta"),
            jsLandingHeroContent = document.querySelector('#js-hero-content'),
            tlLanding = new TimelineMax(),
            headingSplitText = new SplitText(jsLandingHeroHeader, {type: "chars"}),
            headingSplitTextChars = headingSplitText.chars;

        tlLanding
        .to(jsLoadingPage, 1, {width: 0, ease: Power4.easeOut})
        .staggerFrom(headingSplitTextChars, 0.8, {
            opacity: 0
        }, 0.8)
        .addLabel('jsLandingOvers-out')
        .set(jsLandingHero, {
            zIndex: 2
        }, this.revertContent);


        return tlLanding;
    }

    animateTimelines() {
        new TimelineMax()
            .add(this.loadingAnimations())
            .add(this.landingAnimations(), '-=1.3');
    }
 * 
 * 
 */