import React from "react";
import {Link} from 'react-router-dom'
import "./index.css";



const NotFound=()=>(
    <div className="not-found" data-testid="NotFound">
            <h2 className="notTitle">404 Error Page</h2>
            <p className="notText">Sorry,This page doesn't exist</p>
            <Link to="/" className="notLink">Go Back</Link>
        </div>  
  )
  
  export default NotFound;