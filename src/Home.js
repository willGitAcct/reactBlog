import { useState} from 'react';//for useState hook
import { useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    //let name = 'mario';

    // const [name, setName] =useState('mario');
    // const [age, setAge] = useState(23);
    // const handleClick = () =>{
    //     setName('luigi');
    //     setAge(35);
    // }

   
    const [name, setName] = useState('mario');
    // const handleDelete = (id) =>{
    //         const newBlogs = blogs.filter(blog => blog.id !== id);
    //         setBlogs(newBlogs);
    //   }

      //runs any time the data changes
      //now when the state of name changes
      // useEffect(()=>{
      //       console.log('use effect ran');
      //       console.log(name);
      // }, [name]);
      //thats a prop, take the other js file, put it in the bracketrs, define the variable
      
 
      const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
      
      return ( 
            <div className="home">
                {/* <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
                <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title="Mario's Blogs"/>
                <button onClick={()=> setName('luigi')}>Change Name</button>
                <p>{name}</p> */}
                {error &&<div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            </div>
        
     );
}
 
export default Home;