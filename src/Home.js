import { useState} from 'react';//for useState hook
import { useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {
    //let name = 'mario';

    // const [name, setName] =useState('mario');
    // const [age, setAge] = useState(23);
    // const handleClick = () =>{
    //     setName('luigi');
    //     setAge(35);
    // }

   
    const [blogs, setBlogs] = useState(null);
      

    const [name, setName] = useState('mario');
    const handleDelete = (id) =>{
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs);
      }

      //runs any time the data changes
      //now when the state of name changes
      // useEffect(()=>{
      //       console.log('use effect ran');
      //       console.log(name);
      // }, [name]);
      //thats a prop, take the other js file, put it in the bracketrs, define the variable
      useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(resp => {
              return resp.json();
            })
            .then(data=>{
              console.log(data);
              setBlogs(data);
            });
      },[]);
      
      
      return ( 
            <div className="home">
                {/* <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
                <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title="Mario's Blogs"/>
                <button onClick={()=> setName('luigi')}>Change Name</button>
                <p>{name}</p> */}
            </div>
        
     );
}
 
export default Home;