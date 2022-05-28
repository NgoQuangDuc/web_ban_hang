import React from 'react'
import _ from 'lodash'
import { useState, useEffect} from 'react'
const Comment = () => {
    const[comm,setComm]=useState([])
    const[name,setName]=useState("")
    const[comments,setComments]=useState("")
    const[col,setCol]=useState("")
    const[size,setSize]=useState("")
    const[bool,setBool]=useState(false)
    function TaoSoNgauNhien(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const hand=()=>{
        let array={
            id:TaoSoNgauNhien(1,99999),
            name:name,
            commen:comments
        }
     
        
        const d=_.clone(comm)
        d.push(array)
        setComm(d)
    }
    console.log(comm)
    const Xoa=(idd)=>{
        const sear=comm.filter(sea=>sea.id!==idd);
        setComm(sear)
    }

const Create=()=>{
  let e={
    color:col,
    sizes:size
  }
  let array=[];
const save=localStorage.getItem("anhduc")
if(save){
  let copy=JSON.parse(save)
  copy.push(e)
  localStorage.setItem("anhduc",JSON.stringify(copy))
}
else{
  array.push(e)
  localStorage.setItem("anhduc",JSON.stringify(array))
}
setCol("")
setSize("")

}

  return (
    <div>
       {bool?(<div onClick={()=>{setBool(false)}}>Show Form</div>):(<div onClick={()=>{setBool(true)}}>Hidden Form</div>)}
        <br />

       { bool&&(
        <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <input type="text" value={comments} onChange={e=>setComments(e.target.value)} />
        <button onClick={()=>hand()}>Comment</button> 
        </div>)
        }
     
        <hr />
        <input type="text" value={col} onChange={e=>setCol(e.target.value)} />
        <input type="text" value={size} onChange={e=>setSize(e.target.value)} />
        <button style={{marginLeft:"30px"}} onClick={Create}>loca</button>
        {
            comm.map((cac,index)=>{
               return(
               <div key={cac.id}>
                    <span>{cac.name}:</span>
                    <span>{cac.commen}</span>
                    <button style={{marginLeft:"30px"}} onClick={()=>Xoa(cac.id)}>Delete</button>
                </div>
               )
            })
        }
        {/* <div>{localStorage.getItem("anhduc")}</div> */}
    </div>
  )
}

export default Comment