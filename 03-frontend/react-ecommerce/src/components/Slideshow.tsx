import { useState } from "react";
import  slides from "../data/slides.json"
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import "./Slideshow.css"
import React from "react";


export function Slideshow() {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = slides.length;

    const nextSlide = () => {
        setCurrentSlide(index => {
            if (index === slideLength - 1) return 0
            return index + 1
        })
    };

    const prevSlide = () => {
        setCurrentSlide(index => {
            if (index === 0) return slideLength - 1
            return index - 1
        })
    };

    return  (
        <div className="Slider">
            {/* left & right buttons */}
            <CiCircleChevLeft onClick={prevSlide} className="arrow prev" />
            <CiCircleChevRight onClick={nextSlide} className="arrow next"/>

            {slides.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === currentSlide && (
                            <div>
                            <img src={slide.imageURL} alt={slide.name} className="slide-image" class="d block 100 mh-100"/>
                            </div>
                        )}
                    </div>
                )
            })}
            


        </div>
    );
}
