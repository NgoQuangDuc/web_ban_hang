import React from 'react'
import anh1 from '../img/anh1.jpg'
import anh2 from '../img/anh2.jpg'
import anh3 from '../img/anh3.jpg'
import "./HotProduct.scss"
import { useState, useEffect} from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
const images = [
 anh1,anh2,anh3
];
const Hot = () => {
  const [photoIndex,setPhotoIndex]=useState(0)
  const [isOpen,setISopen]=useState(false)
  const[Img,setImg]=useState(anh1)
  return (
      <div id="father">
        <div id="img">
        <div className="big" onClick={()=>{setISopen(true)}}><img src={Img} /></div>
      <div className="small">
      <img src={anh1} onClick={()=>{setImg(anh1)&&setPhotoIndex(0)}} />
      <img src={anh2} onClick={()=>setImg(anh2)&&setPhotoIndex(1)} />
      <img src={anh3} onClick={()=>setImg(anh3)&&setPhotoIndex(2)} />
      </div>

        </div>
        <div id="baby">
        <h3>Laptop Dell Vostro 3510 P112F002ABL ( i5-1135G7/8GB RAM/512GB SSD/Intel Iris Xe Graphics + Geforce MX350 2GB/15.6 FHD/Win 10/Finger) Hàng chính hãng
</h3>
<div id="right">
      <span style={{fontWeight:500}}>Số lượng: <input min="0" max="50" type="number" valueMin="10"/></span>
      <h5>19.290.000 ₫</h5>
      <div style={{fontWeight:800,fontSize:"20px",border:"3px solid black",width:"46px",backgroundColor:"green"}}>Buy</div>
      </div>
      </div>

      {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setISopen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)}
              
            
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
              }
            
          />
        )}
      </div>
  )
}

export default Hot