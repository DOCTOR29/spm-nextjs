import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import { ReadMore } from './ReadMore'

type PropType = {
  slides?: any[]
  options?: EmblaOptionsType
  teacher?: boolean
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, teacher } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options,  [Autoplay({ delay: 3000 })])
  const [emblaRef1, emblaApi1] = useEmblaCarousel(options,  [Autoplay({ delay: 3000 })])
  // const [emblaRef,emblaApi ] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    teacher?<>
    {/* Mobile */}
    <div className='md:hidden'>
     <section className="embla-mob">
    <div className="embla__viewport" ref={emblaRef1}>
      <div className="embla__container">
        {slides?.map((teacher, index) => (
          <div className="embla__slide w-10 sm:w-4xl md:w-full" key={index}>
            
          <img src={teacher} alt="" />
          </div>
        ))}
      </div>
    </div>

    <div className="embla__controls">
      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </div>
  </section>
  </div>

{/* desktop */}
  <div className='md:block hidden'>


     <section className="embla">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        {slides?.map((teacher, index) => (
          <div className="embla__slide w-10 sm:w-4xl md:w-full" key={index}>
            
          <img src={teacher} alt="" />
          </div>
        ))}
      </div>
    </div>

    <div className="embla__controls">
      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </div>
  </section>
  </div>
  </>
  :
    <section className="embla1">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides?.map((slide, index) => (
            <div className="embla__slide w-10 sm:w-4xl md:w-full" key={index}>
              <div className="text-4xl font-bold py-10 ">{slide.name}</div>
              <ReadMore id="read-more-text" text={slide.testimonial}/>
              {/* <div className="">{slide.testimonial}</div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? 'embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section> 
   
  )
}

export default EmblaCarousel
