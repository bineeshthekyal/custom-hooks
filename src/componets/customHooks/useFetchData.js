import {useState} from 'react'
import {useEffect} from 'react'

const useFetchData =(url) =>{

    const [data, setData] =useState([]);
  
  
    useEffect(()=>{
  
      fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
    },
     [url]
    );
    // const useFetchData =(url) =>{

    //   const [data, setData] =useState([]);
    
    
    //   useEffect(()=>{
    
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => setData(data));
    //   },
    //    [url]
    //   );
  return [data];
  
  };

  export default useFetchData ;