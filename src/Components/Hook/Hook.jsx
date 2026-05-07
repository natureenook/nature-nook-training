import { useEffect, useRef, useState } from "react";

export function useScrollReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const currentElement = ref.current;

        if (!currentElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(currentElement);
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(currentElement);

        return () => {
            observer.unobserve(currentElement);
            observer.disconnect();
        };
    }, []);

    return [ref, visible];
}