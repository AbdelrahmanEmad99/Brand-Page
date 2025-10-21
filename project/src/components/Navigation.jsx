const Navigation = () => {
  return (
    <nav className="container">
    <div className="logo">
      <img src="/images/brand_logo.png" alt="Brand Logo" />
    </div>

       <ul className="nav-links">
            <li><a href="#home">Menu</a></li>
            <li><a href="#about">Location</a></li>
            <li><a href="#services">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="login" >Login</button>



    </nav>
  )
}

export default Navigation