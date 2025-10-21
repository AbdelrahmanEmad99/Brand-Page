const Home = () => {
  return (
    
   <main className="home-section container">
      <div className="home-content"> 
        <h1>Welcome to Our Brand</h1>
        <p>Your satisfaction is our priority. Explore our services and offerings tailored just for you.</p>
        
        <div className="home-button">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-primary">Category</button>
        </div>

        <div className="shopping">
            <p>Available Now </p>
        </div>
    <div className="brand-icons">
      <img src="/images/amazon.png" alt="amazon-logo" />
      <img src="/images/flipkart.png" alt="flipkart-logo" />
    </div>

      </div>

      <div className="home-image">

        <img src="/images/hero-image.png" alt="home-image" />
      </div>
   </main>
    );
};

export default Home;