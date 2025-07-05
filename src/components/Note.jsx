
const Note = (props) => {
  return (
    
        <ul className='flex flex-col space-y-1'>
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
              className='hover:text-amber-400'
              >{obj.item}</a>
              </li>
          
            ))}
        
    </ul>
  )
}

export default Note
