import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
    <section className="relative  hero-pattern py-24 text-white">
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-[#F4D605] via-[#FFD700] to-[#DAA520] z-20 flex items-center justify-center shadow-lg">
          <img
            className="h-10 w-auto"
            src="/spm-and-lalans-logo-removebg-preview.png"
            alt="spm and lalans logo"
          />
        </div>
        {/* background water */}
        <div
          style={{
            backgroundImage: "url('/banner/hero.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0 bg-primary/90"
        ></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left banner-fade-in">
              <div className="animate-float mb-8">
                
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Empowering Students for 
                <span className="gradient-text block mt-2">
                  Academic Excellence
                </span>
              </h1>

              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Welcome to Guwahati's Premier Institute for JEE, NEET, Olympiad, NTSE, CUET & More. Join us to transform your academic journey and achieve your dreams.
              </p>

              <img
                src="/banner/side.jpg"
                className="rounded-xl shadow-2xl hover:shadow-accent1/20 transition-all duration-300 w-full md:max-w-md"
                alt="Students studying"
              />
            </div>

            <div className="glass-effect p-8 rounded-xl backdrop-blur-md shadow-xl hover:shadow-accent2/20 transition-all duration-300 banner-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
                Begin Your Success Story
              </h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/90">Full Name</label>
                  <Input
                    placeholder="Enter your name"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/90">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/90">Select Course</label>
                  <Select>
                    <SelectTrigger className="w-full bg-white/10 border-white/20 h-12">
                      <SelectValue placeholder="Choose your course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Available Courses</SelectLabel>
                        <SelectItem value="jee">JEE Preparation</SelectItem>
                        <SelectItem value="neet">NEET Coaching</SelectItem>
                        <SelectItem value="olympiad">Olympiad Training</SelectItem>
                        <SelectItem value="ntse">NTSE Guidance</SelectItem>
                        <SelectItem value="cuet">CUET Preparation</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 text-lg py-6 font-semibold shadow-glow transform hover:scale-105 transition-all duration-300">
                  Start Your Journey
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero