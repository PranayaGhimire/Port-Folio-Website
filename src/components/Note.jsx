
const Note = (props) => {
  return (
    
        <ul className='flex flex-wrap  gap-8  '>
            {[{link:props.CF,item:'Computer Fundamentals'},
            {link:props.DSA,item:'Data Structures and Algorithms'},
            {link:props.DBMS,item:'Database Management Systems'},
            {link:props.MIS_WEB,item:'MIS and Web Engineering'},
            {link:props.NET,item:'Networking'},
            {link:props.OS,item:'Operating Systems'},
            {link:props.PL,item:'Programming Language'},
            {link:props.SAD,item:'System Analysis and Design'},
            {link:props.EC,item:'E-commerce Technology QA'},
            {link:props.IT_Nep,item:'IT in Nepal QA'},
            {lin:props.Mis_Web,item:'Mis and Web Engineering QA'}]
            .map((obj,index)=>(
              <li key={index} >
                      <a href={obj.link}
              className={` hover:bg-teal-500 hover:text-white p-3 rounded-lg ${props.isDarkMode ?"bg-gray-600":"bg-gray-300"} `}
              >{obj.item}</a>
              </li>
          
            ))}
        
    </ul>
  )
}

export default Note
