//just returns a template, this ffile, then we export it.
function Navbar() {
    return ( 
        <nav className="navbar">
            <h1>Tutorial Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style ={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "6px"                    
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;