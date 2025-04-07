import * as React from "react"

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
    <Carousel className="w-full max-w-xl">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="p-10">
              <Card>

                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <CardHeader>
       <img src={testimonial.image} alt="" />
      </CardHeader>
                  <span className="text-4xl font-semibold">{testimonial.name}</span>
                  <p><ReadMore id={""} text={testimonial.testimonial}  / > </p>
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
