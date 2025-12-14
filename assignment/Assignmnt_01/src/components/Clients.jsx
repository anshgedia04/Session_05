import React from "react";
import clientLogoOne from '../assets/clients-img/client-logo-1.png'
import clientLogoTwo from '../assets/clients-img/client-logo-2.png'
import clientLogoThree from '../assets/clients-img/client-logo-3.png'
import clientLogoFour from '../assets/clients-img/client-logo-4.png'
import clientLogoFive from '../assets/clients-img/client-logo-5.png'
import clientLogoSix from '../assets/clients-img/client-logo-6.png'
import clientLogoSeven from '../assets/clients-img/client-logo-7.png'
import clientLogoEight from '../assets/clients-img/client-logo-8.png'
import clientLogoNine from '../assets/clients-img/client-logo-9.png'
import decorativeLeftGraphic from '../assets/clients-img/decorative-left.png'
import sectionUnderline from '../assets/clients-img/section-underline.png'

// Client logos showcase section
export default function ClientsSection() {
  const clientLogos = [
    { id: 1, name: "Client 1", img: clientLogoOne },
    { id: 2, name: "Client 2", img: clientLogoTwo },
    { id: 3, name: "Client 3", img: clientLogoThree },
    { id: 4, name: "Client 4", img: clientLogoFour },
    { id: 5, name: "Client 5", img: clientLogoFive },
    { id: 6, name: "Client 6", img: clientLogoSix },
    { id: 7, name: "Client 7", img: clientLogoSeven },
    { id: 8, name: "Client 8", img: clientLogoEight },
    { id: 9, name: "Client 9", img: clientLogoNine },
  ];

  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-20 relative">
      <img src={decorativeLeftGraphic} alt="" className="absolute left-0 top-0 h-3/4" />
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid justify-center mb-10">
          <h2 className="text-3xl md:text-4xl font-rubik font-medium text-gray-800">
            Our Clients
          </h2>
          <img src={sectionUnderline} alt="" className="w-47" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center justify-center">
          {clientLogos.map((clientItem) => (
            <div
              key={clientItem.id}
              className="w-32 h-20 md:w-36 md:h-24 flex items-center z-20 justify-center hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={clientItem.img}
                alt={clientItem.name}
                className="max-h-full max-w-full object-contain hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
