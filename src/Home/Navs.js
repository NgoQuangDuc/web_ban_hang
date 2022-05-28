import React from 'react'
import { Navbar,Container,Nav,NavDropdown,FormControl,Form,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';
import './Home.scss'
const Navs = (props) => {
  const{yourpr,pri,search,setSearch,save,setList,count}=props
const [ds,setDs]=useState([])
const[bool,setBool]=useState(false)
const Timkiem =()=>{
const acdd=save.filter((s)=>{
  return s.title.includes(search)===true;
})
setBool(true)
setDs(acdd)
}

  return (
<>
     <Navbar style={{backgroundColor:"red"}} expand="lg">
  <Container fluid>
    <Navbar.Brand  style={{color: 'green',fontSize:"60px"}} href="#">MR Đức</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link id="haha" style={{color: 'white'}} href="/">Home</Nav.Link>
        <Nav.Link style={{color: 'white'}} href="/hot">Hot Product</Nav.Link>
        <Nav.Link style={{color: 'white'}} href="/comment">Comment Product</Nav.Link>
        <Nav.Link style={{color: 'white'}} href="/contact">Contact</Nav.Link>
        <NavDropdown style={{color: 'white'}} title={`YourProduct: ${yourpr.length}`} id="navbarScrollingDropdown">
          {
  
          
          
       
       yourpr.length>0 ?yourpr.map((anc)=>{
       return(
        <NavDropdown.Item href="#action/3.1">{anc}</NavDropdown.Item>
     
          )})
       :( <NavDropdown.Item href="#action/3.1">Ấn vào nút Mua để thêm sản phẩm</NavDropdown.Item>)
}
          
       <NavDropdown.Item style={{fontWeight: "800"}}href="#action/3.1">{`Tổng: ${pri}VNĐ`}</NavDropdown.Item>
     
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setSearch(e.target.value)}
        />
        <Button variant="outline-success" onClick={Timkiem}>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

{ds&&ds.length>0&&(
  <div>
<div className='all'>
{ds.map((a)=>{
           return(
               <div className='father'>
               <div>{a.id}</div>
               <div>{a.title}</div>
               <img src={a.image} />
            <div>{a.category}</div>
            <div style={{fontWeight:"800"}}>Giá:{a.price}</div>
            <div className='buyss'>
          <button onClick={()=>count(a.title,a.price)}>Mua</button>
          <a href="">Chi tiết</a>
          </div>
               </div>
           )
       })}
     </div>
     <h3 style={{textAlign:"center"}}>END</h3> 
<hr />
 <hr/>
 <hr />

 </div>
 
 )
      }
      {bool&&ds&&ds.length===0&&(
       
          <div>
          <div>Không tìm thấy kết quả</div>
          <h3 style={{textAlign:"center"}}>END</h3> 
          <hr />
           <hr/>
           <hr />
          
           </div>
          
      )}

    
 
</>
 
  )
}

export default Navs


  