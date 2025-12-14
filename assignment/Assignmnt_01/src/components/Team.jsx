import React from 'react'
import memberJessica from '../assets/Team/member-jessica.png'
import memberJohny from '../assets/Team/member-johny.png'
import memberSanya from '../assets/Team/member-sanya.png'
import sectionUnderline from '../assets/Team/section-underline.png'
import decorativeBlueLeft from '../assets/Team/decorative-blue-left.png'
import decorativePurpleRight from '../assets/Team/decorative-purple-right.png'

// Team members showcase section
export default function TeamSection() {
  const teamMembers = [
    { name: 'Jessica D\'suza', img: memberJessica },
    { name: 'Johny Williams', img: memberJohny },
    { name: 'Sanya R.', img: memberSanya }
  ]
  return (
    <section className="bg-white relative">
      <img src={decorativeBlueLeft} alt="" className="absolute left-0 -top-20 w-1/5 h-1/2 sm:h-full" />
      <img src={decorativePurpleRight} alt="" className="absolute right-0 w-1/7 bottom-0 sm:-bottom-1/2 h-1/2 sm:h-full" />
       
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h3 className="text-4xl font-bold">OUR TEAM</h3>
        <img src={sectionUnderline} alt="" className="w-46 mx-auto" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="h-36 mb-4 transform transition hover:scale-105">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-sm text-black font-rubik font-normal">{member.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
