
import { useState, useEffect } from "react";
const useFetch = (url) =>{
    //url = 'http://localhost:8000/blogs'
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        //setTimeout simulates the loading, as if we were using real data
        setTimeout(()=>{
          fetch(url)
          .then(resp => {
            if(!resp.ok){
              throw Error("Could not fetch data");//for example if the resource in the fetch function is wrong
            }
            return resp.json();
          })
          .then(data=>{
            console.log(data);
            setData(data);
            setError(null);
            //then add the isloading when its loading, so it wont show
            setIsLoading(false);
          })
            .catch((error)=>{
              console.log(error.message);// to catch an error
              setIsLoading(false);
              setError(error.message);
            })
        },1000);
        
      },[url]);

      return {data, isLoading, error};
}

export default useFetch;