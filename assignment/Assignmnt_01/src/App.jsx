import React from 'react'
import NavigationBar from './components/Nav'
import HeroSection from './components/Hero'
import AboutSection from './components/About'
import ServicesSection from './components/Services/Services'
import TeamSection from './components/Team'
import ProjectsSection from './components/Projects'
import ClientsSection from './components/Clients'
import FooterSection from './components/Footer'

// Main application component
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavigationBar />
      <main className="pt-6">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ProjectsSection />
        <ClientsSection />
      </main>
      <FooterSection />
    </div>
  )
}