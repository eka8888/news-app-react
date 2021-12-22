import React from "react";
import moment from 'moment'
import { useEffect, useState } from "react";
import axios from 'axios'
import "./index.css"



const NewsApp = () => {
const [searchTerm,setSearchTerm]=useState('')
  
const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=8963c6d54ae54e48a17d34b925a90809'

 


const [product,setProduct]=useState(null)

useEffect(()=>{

axios.get(url)
  .then(response=>{
    setProduct(response.data)
   
  })
  .catch((error)=>console.log(error))
  
},[url])



if(product){
    return(
      <div>
        <div className="form">
        <input className="form-input" type='text' placeholder='searh by title' onChange={event=>{setSearchTerm(event.target.value)}}/>
        </div>

    
  
    {product.articles.filter((val)=>{
    return val.title.toLowerCase().includes(searchTerm.toLowerCase())

}).length>0?
product.articles.filter((val=> val.title.toLowerCase().includes(searchTerm.toLowerCase()))).map((val,key)=>{
 
         return <div className='container' key={key} data-testid="card">
         <div className='news-item'>
              <div className='row'>
           <img src={val.urlToImage} className="image" alt='img'/>
           <h1 className='title'>{val.title}</h1>
           <p >{val.source.name}</p>
           <p className='date'>{moment.utc(val.publishedAt).format('MMM DD YYYY')}</p>
           <p className='content'>{val.description}</p>
           <a href={val.url} className='date'>
      <button className="btn" >Read more
     
      </button>
    </a>
    </div>
    </div>
           </div>}):<h2 className='noMatch'>There are no articles matching your request</h2>}
      </div>
    )
    }
    
    return (
      <div>
   <img className='spinner' alt=''></img>
      </div>
    )
  }
  
  
  export default NewsApp;