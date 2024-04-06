'use client'
import {useEffect, useState} from "react";
import './mouseCursor.css'

export default function MouseCursor() {

    const [position, setPosition] = useState({ x: 0, y: 0});
    const [isPointer, setIsPointer] = useState(false);

    const handleMouseMovement = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        const target = e.target;
        setIsPointer(window.getComputedStyle(target).getPropertyValue("cursor") === "pointer");
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMovement);
        return () => {
            window.removeEventListener("mousemove", handleMouseMovement);
        }
    }, []);

    const flareSize = isPointer ? 0 : 30;
    const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

    return (
        <div className={`flare ${isPointer ? "pointer" : ""}`}
             style={{
                 ...cursorStyle,
                 left: `${position.x}px`,
                 top: `${position.y}px`,
                 width: `${flareSize}px`,
                 height: `${flareSize}px`
             }}
             >
        </div>
    )
}