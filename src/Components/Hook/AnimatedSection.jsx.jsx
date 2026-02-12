import React from "react";
import { useScrollReveal } from "./Hook";

export const AnimatedSection = ({ children, delay = 0 }) => {
    const [ref, visible] = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};
