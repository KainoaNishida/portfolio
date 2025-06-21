import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const titles = [
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
  "DEVELOPER",
];

export default function Banner({ onComplete }) {
  const controls = useAnimation();
  const verticalControls = useAnimation();
  const [phase, setPhase] = useState("showName");
  const [bannerPosition, setBannerPosition] = useState("center");
  const [showVertical, setShowVertical] = useState(false);

  useEffect(() => {
    // Initial animation - fade in the name banner in the center
    controls.start({ opacity: 1, transition: { duration: 1 } });
    
    // After 3 seconds, transition the banner to the top
    const nameTimer = setTimeout(() => {
      // Move banner to top
      setBannerPosition("top");
      
      // After the banner moves to the top, switch to scrolling text
      const phaseTimer = setTimeout(() => {
        setPhase("scroll");
        
        // Wait for horizontal text to go through before showing vertical banner
        const verticalTimer = setTimeout(() => {
          setShowVertical(true);
          
          // After showing vertical banner for a few seconds, complete the intro sequence
          const completeTimer = setTimeout(() => {
            if (onComplete) onComplete();
          }, 4000); // Wait 4 more seconds before transitioning to portfolio
          
          return () => clearTimeout(completeTimer);
        }, 8000); // Wait 8 seconds for horizontal text to go through once
        
        return () => clearTimeout(verticalTimer);
      }, 1200); // Match the transition duration
      
      return () => clearTimeout(phaseTimer);
    }, 3000);
    
    return () => clearTimeout(nameTimer);
  }, [controls]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      zIndex: 30,
      overflow: 'hidden'
    }}>
      {/* Horizontal banner that moves from center to top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        style={{
          position: 'absolute',
          width: '100%',
          textAlign: 'center',
          backgroundColor: 'white',
          zIndex: 40,
          top: bannerPosition === 'center' ? '50%' : 0,
          transform: bannerPosition === 'center' ? 'translateY(-50%)' : 'none',
          transition: 'top 1.2s ease-in-out, transform 1.2s ease-in-out'
        }}
      >
        {/* Conditionally render either the name or scrolling text */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: phase === 'showName' ? 'center' : 'flex-end',
          alignItems: 'center',
          height: '100px',
          backgroundColor: 'red',
          width: '100%',
          overflow: 'hidden',
          paddingBottom: phase === 'showName' ? 0 : '10px'
        }}>
        {phase === 'showName' ? (
          <h1 style={{
            color: 'black',
            fontSize: '4.5rem',
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            letterSpacing: '0.1em',
            lineHeight: '1.5',
            fontWeight: '300',
            margin: 0
          }}>
            WELCOME
          </h1>
        ) : (
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              alignSelf: 'flex-end',
              width: '100%',
              margin: 0,
              padding: 0
            }}
          >
            {[...titles, ...titles].map((title, i) => (
              <span key={i} style={{
                display: 'inline-block',
                marginLeft: '4rem',
                marginRight: '4rem',
                color: 'black',
                fontSize: '2.25rem',
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                letterSpacing: '0.1em',
                fontWeight: '300'
              }}>
                {title}
              </span>
            ))}
          </motion.div>
        )}
        </div>
      </motion.div>
      
      {/* Vertical banner on the left side */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: '100px', // Start below the horizontal banner
          bottom: 0,
          width: '200px', // Much wider for visibility
          backgroundColor: '#f0f0f0', // Light gray background
          zIndex: 999, // Very high z-index to ensure visibility
          borderRight: '3px solid black',
          overflow: 'hidden',
          display: showVertical ? 'block' : 'none' // Only show when showVertical is true
        }}
      >
        <motion.div
          initial={{ y: "-2000px" }} // Start above (out of view)
          animate={{ y: "2000px" }} // Move downward
          transition={{ 
            repeat: Infinity, 
            duration: 20, // Slower animation
            ease: "linear",
            repeatType: "loop"
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '20px',
            paddingBottom: '2000px', // Extra padding to ensure content
            height: 'auto'
          }}
        >
          {/* Many more copies to ensure visibility with much larger spacing */}
          {[...Array(15)].map((_, i) => (
            <div 
              key={`vertical-${i}`} 
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100px',
                marginBottom: '200px', // Much larger spacing between items
                backgroundColor: i % 2 === 0 ? '#ffffff' : '#f8f8f8', // Alternating background
                borderTop: '1px solid #ddd',
                borderBottom: '1px solid #ddd'
              }}
            >
              <span style={{
                color: 'black',
                fontSize: '2.25rem',
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                letterSpacing: '0.1em',
                fontWeight: '300',
                transform: 'rotate(-90deg)' // Rotate the text to be vertical
              }}>
                DEVELOPER
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
