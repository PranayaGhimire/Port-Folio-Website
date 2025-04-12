import React from 'react'
import Note from './Note'
import CF from '../assets/It-Officer-Notes/Computer Fundamentals.pdf'
import DSA from '../assets/It-Officer-Notes/Data Structure and Algorithms.pdf'
import DBMS from '../assets/It-Officer-Notes/DBMS.pdf'
import MIS_WEB from '../assets/It-Officer-Notes/MIS and Web Engineering.pdf'
import NET from '../assets/It-Officer-Notes/Networking.pdf'
import OS from "../assets/It-officer-Notes/Operating Systems.pdf"
import PL from "../assets/It-Officer-Notes/Programming Language.pdf"
import SAD from "../assets/It-Officer-Notes/System Analysis and design.pdf"
import EC from "../assets/It-Officer-QA/E-commerce Technology.pdf"
import IT_Nep from "../assets/It-Officer-QA/IT in Nepal.pdf"
import Mis_Web from "../assets/It-Officer-QA/Mis and Web Engineering.pdf"
const Services = ({isDarkMode}) => {
  return (
    <div className={` ${isDarkMode?'bg-gradient-to-bl from-zinc-700 to-zinc-900 text-white':'bg-white text-black'} h-170 px-5 py-35`}>
      <h2 className='font-bold mb-3 text-xl'>Central Public Service Commission ( केन्द्रिय लोकसेवा आयोग )</h2>
      <h2 className='font-bold mb-2'>Computer Officer ( कम्प्युटर अधिकृत ) Notes: </h2>
      <p className='mb-1 font-semibold'>You can download the notes by following the link below</p>
             
    <Note CF={CF} DSA={DSA} DBMS={DBMS} MIS_WEB={MIS_WEB} NET={NET} OS={OS} PL={PL} SAD={SAD} EC={EC} IT_Nep={IT_Nep} Mis_Web={Mis_Web }/>
    </div>
  )
}

export default Services
