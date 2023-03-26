import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getRandomSlide } from "../ultils/helpers";

const Slider = () => {
    const { banner } = useSelector((state) => state.app);
    useEffect(() => {
        const sliderEls = document.getElementsByClassName("slider-item");
        let min = 0;
        let max = 2;
        const interValId = setInterval(() => {
            const list = getRandomSlide(min, max, sliderEls.length - 1)
            for (let i = 0; i < sliderEls.length; i++) {

                sliderEls[i].classList.remove('animate-slide-right', 'order-last', 'z-10')
                sliderEls[i].classList.remove('animate-slide-left1', 'order-first', 'z-20')
                sliderEls[i].classList.remove('animate-slide-left2', 'order-2', 'z-20')


                if (list.some(item => item === i)) {
                    sliderEls[i].style.cssText = "display:block";
                } else {
                    sliderEls[i].style.cssText = "display:none";
                }
            }
            list.forEach(item => {
                if (item === max) {
                    sliderEls[item].classList.add('animate-slide-right', 'order-last', 'z-10')
                } else if (item === min) {
                    sliderEls[item].classList.add('animate-slide-left1', 'order-first', 'z-20')
                } else {
                    sliderEls[item].classList.add('animate-slide-left2', 'order-2', 'z-20')
                }
            });

            if (min === sliderEls.length - 1) {
                min = 0
            } else {
                min += 1
            }

            if (max === sliderEls.length - 1) {
                max = 0
            } else {
                max += 1
            }   
        }, 4000);
        return () => {
            interValId && clearInterval(interValId);
        };
    }, []);

    return (
        <div className="flex gap-4 w-full overflow-hidden px-[59px] pt-5">
            {banner?.map((item) => (
                <img
                    key={item.encodeId}
                    src={item.banner}
                    alt=""
                    className="slider-item flex-1 object-contain w-[30%] rounded-lg"
                />
            ))}
        </div>
    );
};

export default Slider;
