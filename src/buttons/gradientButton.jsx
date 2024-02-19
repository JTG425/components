import './gradientButton.css';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

//https://codesandbox.io/p/sandbox/framer-motion-mouse-position-2b4sd?file=%2Fsrc%2FApp.js%3A40%2C1-69%2C2
function getRelativeCoordinates(event, referenceElement) {
    const position = {
        x: event.pageX,
        y: event.pageY
    };

    const offset = {
        left: referenceElement.offsetLeft,
        top: referenceElement.offsetTop,
        width: referenceElement.clientWidth,
        height: referenceElement.clientHeight
    };

    let reference = referenceElement.offsetParent;

    while (reference) {
        offset.left += reference.offsetLeft;
        offset.top += reference.offsetTop;
        reference = reference.offsetParent;
    }

    const startX = (position.x - offset.left) / offset.width;
    const startY = (position.y - offset.top) / offset.height;

    return {
        x: position.x - offset.left,
        y: position.y - offset.top,
        width: offset.width,
        height: offset.height,
        centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2) - 0.5,
        centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2) - 0.5,
        startX: startX,
        startY: startY,
    };
}

function GradientButton() {
    const buttonRef = useRef();

    const handleMouseMove = e => {
        const mousePos = getRelativeCoordinates(e, buttonRef.current);
        const gradientBackground = `radial-gradient(circle at ${mousePos.startX * 100}% ${mousePos.startY * 100}%, rgba(50,99,196,0.75) 0%, rgba(0,0,0,0) 50%)`;
        buttonRef.current.style.background = gradientBackground;
    };

    const handleMouseLeave = () => {
        buttonRef.current.style.background = '';
    };


    return (
        <motion.button
            className="gradient-button"
            ref={buttonRef}
            initial={{ scale: 0.9 }}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            onHoverEnd={handleMouseLeave}
        >
            <span className="button-text">Hover Me</span>
        </motion.button>
    );
}

export default GradientButton;


