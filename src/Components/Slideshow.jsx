import { useState } from "react";

import Slide from "./Slide";
import Controls from "./Controls";

import "./styles.css";

const image = [
    {
        url: "https://unsplash.com/photos/fNXY1xjZQYI/download?ixid=M3wxMjA3fDF8MXxhbGx8MjF8fHx8fHx8fDE3NTM2MjY2MjR8&force=true&w=640",
        alt: "Mountain landscape with lake",
    },
    {
        url: "https://unsplash.com/photos/9Jgo0Ix_TRw/download?ixid=M3wxMjA3fDF8MXxhbGx8MzF8fHx8fHx8fDE3NTM2Mjg0Mjd8&force=true&w=640",
        alt: "Forest with sunlight streaming through trees",
    },
    {
        url: "https://unsplash.com/photos/Xu01v_iBhtU/download?ixid=M3wxMjA3fDB8MXxhbGx8OTd8fHx8fHx8fDE3NTM2MzIwNDR8&force=true&w=640",
        alt: "Desert dunes under blue sky",
    },
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="slideshow-container">
            <h2>Image Slideshow</h2>
            <Slide image={image[currentIndex]} />
            <Controls setActiveIndex={setCurrentIndex} totalSlides={image.length} />
        </div>
    );
}

export default Slideshow;