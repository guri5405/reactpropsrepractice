import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getdata = async () =>{
    // console.log("data recieved..");
    const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    // console.log(response.data);

    setUserData(response.data)
  }

  useEffect(function(){
    getdata()
  }, [index])

  let printUserData = <h3 className='text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  if(userData.length >0 ){
    printUserData = userData.map(function(elem, idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto p-4 h-screen text-white'>

      <div className='flex flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button 
        style={{opacity: index==1 ? 0.5:1}}
        onClick={() =>{
          
          if(index>1){
          
          setIndex(index-1);
          setUserData([])
          // printUserData =
          }
        }}
        className='bg-amber-400 text-black text-sm cursor-pointer rounded px-4  active:scale-90 py-2 font-semibold '>Prev</button>
        <h3>Page {index}</h3>
        <button 
        onClick={() =>{
          
          setIndex(index+1);
          setUserData([])
        }}
        className='bg-amber-400 text-black text-sm cursor-pointer active:scale-90 rounded px-4 py-2 font-semibold '>Next</button>
      </div>

    </div>
    
  )
}

export default App
