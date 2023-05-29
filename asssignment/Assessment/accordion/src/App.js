import './App.css';
import {useState} from 'react';

function App() {
  const [selected,setSelected]=useState(null)

  const toggle = (i)=>{
    if(selected == i){
      return setSelected(null)
    }
    setSelected(i)
  }


  return (
    <div className="wrapper">
        <div className='accordion'>
          {data.map((item, i)=>(
            <div className='item'> 
              <div className='title' onClick={()=>toggle(i)}>
                <h2>{item.title}</h2>
                <span>{selected == i ? '-' : '+'}</span>
              </div>
              <div className={selected == i ? 'content show' : 'content'}>
                {item.detail}
              </div>
            </div>
          ))}
        </div>
        
    </div>
    
  );
}

const data=[
  {
    title:'What is your return policy?',
    detail:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quia sint, magni assumenda dolores non officia distinctio temporibus voluptatum? Aperiam maxime et, dignissimos iste recusandae nulla alias reprehenderit architecto ratione.'

  },
  {
    title:'How do i track my order?',
    detail:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quia sint, magni assumenda dolores non officia distinctio temporibus voluptatum? Aperiam maxime et, dignissimos iste recusandae nulla alias reprehenderit architecto ratione.'

   },
   {
    title:'Can I purchase items again?',
    detail:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quia sint, magni assumenda dolores non officia distinctio temporibus voluptatum? Aperiam maxime et, dignissimos iste recusandae nulla alias reprehenderit architecto ratione.'

   }
   
]

export default App;
