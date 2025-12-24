import "./image_slider.css"

import { useState } from "react";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function ImageSlider({ imageUrls }) { // ["url.com", "url.com"]
    const [imageIndex, setImageIndex] = useState(0);

    const handleSlideRight = () => {
        if((imageIndex + 1) < imageUrls.length) {
            setImageIndex((index) => index + 1);
        }
    }

    const handleSlideLeft = () => {
        if(imageIndex > 0) {
            setImageIndex((index) => index - 1);
        }
    }

    return <div className="image-slider">
        <button onClick={handleSlideLeft}><KeyboardArrowLeftIcon className="arrow-icon" /></button>
        <img src={imageUrls[imageIndex]} alt="" />
        <button onClick={handleSlideRight}><KeyboardArrowRightIcon className="arrow-icon" /></button>
    </div>
}