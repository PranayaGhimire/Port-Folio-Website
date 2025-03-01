import React from 'react'

const Note = (props) => {
  return (
    
        <div className='flex flex-col space-y-1'>
        <a href={props.CF} className='hover:text-amber-400'>Computer Fundamentals</a>
      <a href={props.DSA} className='hover:text-amber-400'>Data Structures and Algorithms</a>
      <a href={props.DBMS} className='hover:text-amber-400'>Database Management Systems</a>
      <a href={props.MIS_WEB} className='hover:text-amber-400'>MIS and Web Engineering</a>
      <a href={props.NET} className='hover:text-amber-400'>Networking</a>
      <a href={props.OS} className='hover:text-amber-400'>Operating Systems</a>
      <a href={props.PL} className='hover:text-amber-400'>Programming Langauage</a>
      <a href={props.SAD} className='hover:text-amber-400'>System Analysis and Design</a>
      <a href={props.EC} className='hover:text-amber-400' >E-commerce Technology QA</a>
            <a href={props.IT_Nep} className='hover:text-amber-400'>IT in Nepal QA</a>
            <a href={props.Mis_Web} className='hover:text-amber-400'>Mis and Web Engineering QA</a>
        
    </div>
  )
}

export default Note
