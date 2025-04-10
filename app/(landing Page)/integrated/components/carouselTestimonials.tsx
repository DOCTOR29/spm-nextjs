import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import testimonials from "./data/testimonials.json";
import { ReadMore } from "./ReadMore";
export function CarouselDemo() {
  return (
    <Carousel  plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="w-full max-w-7xl">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/3    basis ">
            <div className="p-10   md:w-[400px]">
              <Card>

                <CardContent className="flex  flex-col  aspect-square items-center justify-center p-6">
                <CardHeader>
       <img src={testimonial.image} className="w-20" alt="" />
      </CardHeader>
                  <span className="text-xl font-semibold">{testimonial.name}</span>
                  <p className="z-50 cursor-pointer" ><ReadMore id={""} text={testimonial.testimonial}  / > </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
