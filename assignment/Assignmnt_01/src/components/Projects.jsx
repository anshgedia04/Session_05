import React from 'react'
import featuredProjectImage from '../assets/project-img/featured-project.png'
import projectImageOne from '../assets/project-img/project-image-1.png'
import projectImageTwo from '../assets/project-img/project-image-2.png'
import headingUnderline from '../assets/project-img/heading-underline.png'

// Projects showcase gallery section
export default function ProjectsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 w-3/4">
        <div className="grid justify-center">
          <h3 className="text-4xl font-bold text-center font-rubik font-medium">OUR PROJECTS</h3>
          <img src={headingUnderline} alt="" className="w-65" />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-1 relative overflow-hidden rounded-md hover:scale-105 transition-transform duration-300">
            <img src={featuredProjectImage} alt="project" className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <img src={projectImageOne} alt="p1" className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300" />
            <img src={projectImageTwo} alt="p2" className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
