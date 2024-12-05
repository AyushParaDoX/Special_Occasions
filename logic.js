// Register ScrollTrigger plugin
if (gsap) {
    gsap.registerPlugin(ScrollTrigger);

    // Page2 entrance with a parallax-like effect
    gsap.fromTo(".page2", {
        opacity: 0,
        y: 100,             // Start below the viewport
        scale: 0.95          // Slightly smaller scale for the entrance
    }, {
        scrollTrigger: {
            trigger: ".page2",
            start: "top 90%",   // Start animation when the top of .page2 hits 90% of the viewport
            end: "top 30%",     // End animation when the top of .page2 hits 30% of the viewport
            scrub: 0.5,         // Smoothly animate with scroll, adjusting scrub for smoother movement
            markers: false      // Remove markers for a clean UI
        },
        opacity: 1,            // Fade in to full opacity
        y: 0,                  // Return to the original position
        scale: 1,              // Return to normal size
        duration: 2,           // Extended duration for smoother effect
        ease: "power4.inOut"   // Smooth ease for a subtle bounce
    });

    // Heading entrance with a diagonal slide effect
    gsap.fromTo(".page2-heading", {
        opacity: 0,
        x: -150,              // Start from the left
        y: -50                // Slide in from the top
    }, {
        scrollTrigger: {
            trigger: ".page2",
            start: "top 85%",
            end: "top 50%",
            scrub: 0.5,
            markers: false
        },
        opacity: 1,
        x: 0,                 // End at the normal position
        y: 0,
        duration: 1.5,        // Extended duration for smoother animation
        ease: "back.out(2)"   // Use a stronger back easing for a more dramatic effect
    });

    // Paragraph entrance with a diagonal slide from the bottom right
    gsap.fromTo(".para", {
        opacity: 0,
        x: 150,               // Start from the right
        y: 50                 // Slide up from below
    }, {
        scrollTrigger: {
            trigger: ".page2",
            start: "top 85%",
            end: "top 50%",
            scrub: 0.5,
            markers: false
        },
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "back.out(2)"
    });

    // Optional: Parallax effect for a background image
    gsap.to(".page2", {
        scrollTrigger: {
            trigger: ".page2",
            start: "top 0%",
            end: "top 30%",
            scrub: 0.5,         // Smooth parallax effect with scroll
            markers: false
        },
        backgroundPosition: "center top", // Moves the background as user scrolls
        duration: 2,           // Smooth duration for the parallax effect
        ease: "none"           // No easing for a consistent movement
    });

    // Optional: Hide scroll buttons for a cleaner UI
    document.addEventListener("DOMContentLoaded", () => {
        const scrollDown = document.querySelector(".scroll-down");
        if (scrollDown) {
            scrollDown.style.display = "none";
        }
    });
} else {
    console.error("GSAP or ScrollTrigger is not loaded. Make sure the libraries are properly included.");
}

gsap.from(".navbar", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

// Heading animation
gsap.from(".heading", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".heading",
        start: "top 80%",
    }
});

// Paragraph animation
gsap.from(".describing", {
    duration: 1.5,
    x: -50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".describing",
        start: "top 85%",
    }
});

// Button animation
gsap.from(".cta", {
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".cta",
        start: "top 90%",
    }
});

// Image animations
gsap.from(".image1", {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image1",
        start: "top 90%",
    }
});

gsap.from(".image2", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image2",
        start: "top 85%",
    }
});

gsap.from(".image3", {
    duration: 1,
    x: 100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".image3",
        start: "top 80%",
    }
});

// Page 2 heading animation
gsap.from(".page2-heading", {
    duration: 1.5,
    x: -50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".page2-heading",
        start: "top 85%",
    }
});

// Page 3 animation
gsap.from(".images img", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".images",
        start: "top 90%",
    }
});