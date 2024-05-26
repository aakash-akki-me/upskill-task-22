import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './customHook/useFetch'
import Card from './Component/Card/Card'


function App() {
  // const [data, setData] = useState([])
  // const arr = useFetch()
  // useEffect(() => {
  //   setData(arr)
  // }, [arr])
  // console.log(data)

  const{ data, loading, error }= useFetch('https://jsonplaceholder.typicode.com/photos')
  // console.log(data, loading, error)
  

  if (loading) {
    return <div className='w-full h-screen flex justify-center text-center flex-col'>
      <p className='text-white text-lg font-bold'>Loading...</p>
    </div>
  } else if (data) {
    return (
    
      <div className='w-full text-white bg-black flex  min-h-screen flex-wrap gap-3 px-[5%]'>
        <h1 className='bg-black text-center text-3xl text-white py-6 block w-full'>Photos</h1>
        <Card data={data}/>
        </div>
          )
  } else if(error){
    return <div className='w-full h-screen flex justify-center text-center flex-col'>
    <p className='text-white text-lg font-bold'>{'Somthing want wrong! Please try again.'}</p>
  </div>
  }  

}

export default App
