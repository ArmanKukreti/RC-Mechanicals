import { useEffect, useRef, useState } from "react";
import Home from "../pages/Home";

const LandingScreen = () => {
  const headingRef = useRef(null); // Ref for the main heading element
  const homeContainerRef = useRef(null); // Ref for the container that holds the Home component
  const landingScreenRef = useRef(null);
  const scrollSpacerRef = useRef(null);

  // State to control whether the Home component should display its full content
  const [showFullHome, setShowFullHome] = useState(false);
  // State to manage the opacity of the heading during scroll
  const [headingOpacity, setHeadingOpacity] = useState(1);
  // State to manage the scale of the heading during scroll
  const [headingScale, setHeadingScale] = useState(1);

  const [isMounted, setIsMounted] = useState(false);

  // Initial setup for the Home preview container
  useEffect(() => {
    const mountTimeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    if (homeContainerRef.current) {
      // Set initial styles for the preview.
      // These are hardcoded values equivalent to Tailwind's w-48, h-28, rounded-lg
      // and centered positioning.
      homeContainerRef.current.style.width = "12rem";
      homeContainerRef.current.style.height = "7rem";
      homeContainerRef.current.style.borderRadius = "0.5rem";
      homeContainerRef.current.style.opacity = "0";
      homeContainerRef.current.style.position = "fixed";
      homeContainerRef.current.style.left = "50%";
      homeContainerRef.current.style.top = "50%";
      homeContainerRef.current.style.transform = "translate(-50%, -50%)"; // Center it
      homeContainerRef.current.style.transition = "all 0.8s ease-out"; // Smooth transition for expansion
    }

    // Animate the Home preview into view after a short delay
    const initialAnimTimeout = setTimeout(() => {
      if (homeContainerRef.current) {
        homeContainerRef.current.style.opacity = "1";
      }
    }, 500); // Delay of 0.5 seconds

    return () => {
      clearTimeout(mountTimeout);
      clearTimeout(initialAnimTimeout);
    };

  }, []);

  // Effect for the mousemove interaction (heading tilt and Home preview follow)
  useEffect(() => {
    const heading = headingRef.current;
    const homeContainer = homeContainerRef.current;

    const handleMouseMove = (e) => {
      // Only apply tilt and follow if the full Home is NOT shown
      if (!showFullHome && heading && homeContainer) {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;

        // Normalize cursor position to a range of [-1, 1] for heading tilt calculation
        const xNorm = (clientX / innerWidth - 0.5) * 2;
        const yNorm = (clientY / innerHeight - 0.5) * 2;

        // Apply heading tilt using CSS transform
        heading.style.transform = `perspective(1000px) rotateY(${
          xNorm * 15
        }deg) rotateX(${-yNorm * 15}deg)`;
        heading.style.transition = "transform 0.1s ease-out"; // Smooth transition for tilt

        // Apply cursor preview animation for the Home container
        // Position its center at the cursor's current coordinates
        homeContainer.style.left = `${clientX}px`;
        homeContainer.style.top = `${clientY}px`;
        homeContainer.style.transform = "translate(-50%, -50%)"; // Keep it centered on the cursor
        homeContainer.style.transition =
          "left 0.1s ease-out, top 0.1s ease-out"; // Faster transition for follow
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showFullHome, headingScale]);

  // Effect for scroll-driven expansion
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Define a scroll threshold for when the expansion should start/end
      // We want the animation to complete within the first viewport height of scrolling
      const scrollThresholdStart = 0;
      const scrollThresholdEnd = viewportHeight; // Animation completes within the first viewport scroll

      // Calculate progress based on scroll position
      let progress = 0;
      if (scrollY > scrollThresholdStart) {
        progress = Math.min(
          1,
          (scrollY - scrollThresholdStart) /
            (scrollThresholdEnd - scrollThresholdStart)
        );
      }

      // Animate heading opacity and scale
      setHeadingOpacity(1 - progress);
      setHeadingScale(1 - 0.2 * progress); // Shrink to 80% of original size

      // Update Home container styles based on scroll progress
      if (homeContainerRef.current) {
        // Interpolate width, height, left, top, and border-radius
        // Initial values: 12rem (192px), 7rem (112px), 50%, 50%, 0.5rem (8px)
        // Final values: 100vw, 100vh, 0%, 0%, 0px

        const initialWidthPx = 12 * 16; // 12rem in pixels
        const initialHeightPx = 7 * 16; // 7rem in pixels

        const currentWidth =
          initialWidthPx + (window.innerWidth - initialWidthPx) * progress;
        const currentHeight =
          initialHeightPx + (window.innerHeight - initialHeightPx) * progress;
        const currentLeft = 50 - 50 * progress; // 50% to 0%
        const currentTop = 50 - 50 * progress; // 50% to 0%
        const currentBorderRadius = 0.5 * 16 * (1 - progress); // 0.5rem to 0

        homeContainerRef.current.style.width = `${currentWidth}px`;
        homeContainerRef.current.style.height = `${currentHeight}px`;
        homeContainerRef.current.style.left = `${currentLeft}%`;
        homeContainerRef.current.style.top = `${currentTop}%`;
        homeContainerRef.current.style.borderRadius = `${currentBorderRadius}px`;

        // Adjust translate to keep it centered during expansion, then move to top-left
        const currentTranslateX = -50 * (1 - progress);
        const currentTranslateY = -50 * (1 - progress);
        homeContainerRef.current.style.transform = `translate(${currentTranslateX}%, ${currentTranslateY}%)`;

        // Set showFullHome state when fully expanded (or almost fully expanded)
        if (progress >= 0.99 && !showFullHome) {
          setShowFullHome(true);

          // Scroll to top smoothly
          // window.scrollTo({ top: 0, behavior: 'instant' });

          setTimeout(() => window.scrollTo(0, 0), 10);
          // Ensure it snaps to exact full screen and no border radius at the end
          homeContainerRef.current.style.width = "100vw";
          homeContainerRef.current.style.height = "100vh";
          homeContainerRef.current.style.left = "0%";
          homeContainerRef.current.style.top = "0%";
          homeContainerRef.current.style.borderRadius = "0px";
          homeContainerRef.current.style.transform = "translate(0%, 0%)";
        } else if (progress < 0.99 && showFullHome) {
          setShowFullHome(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showFullHome]);

  return (
    <div className="relative w-full min-h-screen" style={{
        opacity: isMounted ? 1 : 0,
        transition: "opacity 0.5s ease-in",
      }}>
      {!showFullHome && (
        <div className="bg-black min-h-screen flex flex-col items-center justify-start px-4 relative">
          <div
            ref={landingScreenRef}
            className="relative w-full h-screen flex items-center justify-center"
          >
            {/* Heading */}
            <div
              ref={headingRef}
              className="z-10 text-white text-center cursor-pointer perspective-1000"
              style={{
                opacity: headingOpacity,
                transform: `scale(${headingScale})`,
                pointerEvents: "auto",
                transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
              }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                RC Mechanicals
              </h1>
            </div>

            {/* Preview Home */}
            <div
              ref={homeContainerRef}
              className={`z-0 shadow-lg overflow-hidden`}
              style={{
                pointerEvents: "none",
                transition: "all 0.3s ease",
              }}
            >
              <Home showText={false} />
            </div>
          </div>

          {/* Scroll spacer to trigger full page */}
          <div
            ref={scrollSpacerRef}
            className="w-full bg-transparent"
            style={{ height: "150vh" }}
          ></div>
        </div>
      )}

      {/* Full Home after animation */}
      {showFullHome && (
        <div className="relative z-50 min-h-screen overflow-y-auto">
          <Home showText={true} />
        </div>
      )}
    </div>
  );
};

export default LandingScreen;
