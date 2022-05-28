import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Home.scss'
const Homes = (props) => {
  const {save,setSave,yourpr,setYourPr,pri,setPri,list,setList}=props;

   
    useEffect(()=>{
 axios.get("https://fakestoreapi.com/products")
   .then((response)=>{
     
    setList(response.data)})
   

   .catch((error)=>console.log(error))
 

},[])
setSave(list)

   const ss=(abc,def)=>{
 props.count(abc,def)
 

    
   }
  return (
    <div className='all'>
       {list.map((a)=>{
           return(
               <div className='father'>
               <div>{a.id}</div>
               <div>{a.title}</div>
               <img src={a.image} />
            <div>{a.category}</div>
            <div style={{fontWeight:"800"}}>Giá:{a.price}</div>
            <div className='buyss'>
          <button onClick={()=>ss(a.title,a.price)}>Mua</button>
          <a href="">Chi tiết</a>
          </div>
               </div>
           )
       })}
    </div>
  )
}

export default Homes