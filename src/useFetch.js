
import { useState, useEffect } from "react";
const useFetch = (url) =>{
    //url = 'http://localhost:8000/blogs'
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortController = new AbortController();

        //setTimeout simulates the loading, as if we were using real data
        setTimeout(()=>{
          fetch(url, {signal: abortController.signal})
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
                if(error.name === 'AbortError'){
                    console.log("fetch aborted");
                }
                else {
                    setIsLoading(false);
                    setError(error.message);
                }
              
            })
        },1000);

        return()=> abortController.abort();//aborts whatever fetch its associated with, will pause the fetch
        
      },[url]);

      return {data, isLoading, error};
}

export default useFetch;