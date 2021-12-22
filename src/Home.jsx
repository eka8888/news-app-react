import React from "react";
import NewsApp from "./news.jsx";
import "./index.css";
import Footer from "./footer.jsx";






function Home() {
    return (
      <div className="App" data-testid="header">
        <header className="App-header">
        <h1 className="header">PewNews</h1>
        </header>
        <h3 className="header2">NEWS</h3>
        <NewsApp/>
        <Footer/>
       
        </div>
    );
  }
  
  export default Home;