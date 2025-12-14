import React from 'react'
import ServiceCard from './ServiceItem'
import communicationsImage from '../../assets/services-img/communications-image.png'
import engagementImage from '../../assets/services-img/engagement-image.png'
import facilitationImage from '../../assets/services-img/facilitation-image.png'
import consultationImage from '../../assets/services-img/consultation-image.png'
import trainingImage from '../../assets/services-img/training-image.png'
import headingUnderline from '../../assets/services-img/heading-underline.png'
import decorativeBlueLeft from '../../assets/services-img/decorative-blue-left.png'
import decorativeBlueRight from '../../assets/services-img/decorative-blue-right.png'
import decorativePurpleLeft from '../../assets/services-img/decorative-purple-left.png'
import decorativePurpleRight from '../../assets/services-img/decorative-purple-right.png'

// Services section with all service offerings
export default function ServicesSection() {
  return (
    <section className="relative">
      {/* Decorative background graphics */}
      <img src={decorativeBlueLeft} alt="" className="h-1/5 w-1/6 absolute top-0 left-0" />
      <img src={decorativeBlueRight} alt="" className="h-1/5 w-1/8 absolute top-2/7 right-0" />
      <img src={decorativePurpleLeft} alt="" className="h-1/4 w-1/8 absolute bottom-1/4 left-0" />
      <img src={decorativePurpleRight} alt="" className="h-1/4 w-1/7 absolute bottom-1/9 right-0" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid justify-center">
          <h3 className="text-4xl  text-center font-rubik font-medium">SERVICES</h3>
          <img src={headingUnderline} alt="" className="w-40" />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-10 justify-center place-items-center">
          <div className="space-y-12">
            <ServiceCard title="ENGAGEMENT" text="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources." imgSrc={engagementImage} />
            <ServiceCard title="COMMUNICATIONS" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. " imgSrc={communicationsImage} flip />
            <ServiceCard title="FACILITATION" text="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and 
            natural resources." imgSrc={facilitationImage} />
            <ServiceCard title="CONSULTATION & RESEARCH" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. " imgSrc={consultationImage} flip />
            <ServiceCard title="TRAINING & MENTORING" text="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources." imgSrc={trainingImage} />
          </div>
          <div className="space-y-12">
          </div>
        </div>
      </div>
    </section>
  )
}