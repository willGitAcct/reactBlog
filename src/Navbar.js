import {Link} from 'react-router-dom';

//just returns a template, this ffile, then we export it.
function Navbar() {
    return ( 
        <nav className="navbar">
            <h1>Fun Blog</h1>
            <div className="links">
                <Link to ="/">Home</Link>
                <Link to ="/create" style ={{
                    color: "white",
                    backgroundColor: "#3083f0",
                    borderRadius: "6px"                    
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;