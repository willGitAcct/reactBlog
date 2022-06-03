import { useState } from "react";
import { useNavigate} from 'react-router-dom';
const Create = () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body, author};

        setIsLoading(true);
        //2nd arguement where method request defined
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
            }).then(()=> {
                setIsLoading(false);
                history('/');
                //history.go(-1);
               // alert("new blog added");

            })

            //history.go(-1);//send back 1

    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input
                    type="text"
                    required
                    value = {title}
                    onChange={(e)=>setTitle(e.target.value)}
                    ></input>
                <label>Content: </label>
                <textarea
                    required
                    value = {body}
                    onChange={(e)=>setBody(e.target.value)}
                    />
                <label>Blog Author:</label>
                <select
                    value = {author}
                    onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isLoading &&<button>Add Blog</button>}
                {isLoading &&<button disabled>Adding blog..</button>}

                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}

export default Create;