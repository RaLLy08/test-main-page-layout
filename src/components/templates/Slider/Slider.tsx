import clsx from "clsx";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import type { Swiper as SwiperType } from 'swiper/types';

import nextIcon from '../../../../public/ArrowNext.svg';
import backIcon from '../../../../public/ArrowBack.svg';
import styles from './Slider.module.scss';

type SliderProps = {
    slides: String[]
}

const Slider = ({ slides }: SliderProps) => {
    const nextSlideRef = useRef<() => void>(() => {});
    const prevSlideRef = useRef<() => void>(() => {});
    const swiperRef = useRef<SwiperType>();
    const [slideIndex, setSlideIndex] = useState(0);

    if (!slides) return null;

    const isEnd = ~-slides.length === slideIndex;
    const isBeginning = !slideIndex;
    
    return (
        <>
          <article className={styles.sliderContainer__header}>
              <p>
                  {slides[slideIndex]}
              </p>
          </article>
          <article className={styles.sliderContainer__slider}>
            <div 
                className={
                    clsx(
                    'noselect',
                    styles.slider__arrow,
                    isBeginning && styles.slider__arrow_disable,
                    styles.slider__arrow_back,
                    )} 
                onClick={() => prevSlideRef.current()}
            >
                <Image width="24px" height="16px" alt="Arrow back" src={backIcon} />
            </div>
            <div className={styles.slider__swiper}>
                <Swiper
                    slidesPerView="auto"
                    centeredSlides
                    spaceBetween={30}
                    onSlideChange={() => setSlideIndex(swiperRef.current?.realIndex || 0)}
                    onSwiper={(swiper) => {
                        nextSlideRef.current = () => swiper.slideNext();
                        prevSlideRef.current = () => swiper.slidePrev();
                        swiperRef.current = swiper;
                    }}
                >
                    {slides.map((el, i) => <SwiperSlide key={i}>{el}</SwiperSlide>)}
                </Swiper>
            </div>
            <div 
                className={
                    clsx(
                        'noselect',
                        styles.slider__arrow,
                        isEnd && styles.slider__arrow_disable,
                        styles.slider__arrow_next,
                    )} 
                onClick={() => nextSlideRef.current()}
            >
                <Image width="24px" height="16px" alt="Arrow next" src={nextIcon}/>
            </div>
          </article>
          <div className={styles.sliderContainer__divider}></div>
        </>
    )
}

export default Slider;