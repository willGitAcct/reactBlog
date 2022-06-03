import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id } = useParams();//allows us to grab parameters from the route
    const {data:blog, error, isLoading} = useFetch('http://localhost:8000/blogs/'+id);

    const navigate = useNavigate();
    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            navigate('/');//go to home
        });
    }
    return (
        <div className="blog-details">
            {/* <h2>Blog details -{id}</h2> */}
            {isLoading && <div>Loading..</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;