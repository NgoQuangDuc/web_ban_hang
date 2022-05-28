import React from 'react'
import me from '../img/me.jpg'
import "./Contact.scss"
import {BsFacebook} from "react-icons/bs";
import { FcCallback  } from "react-icons/fc";
const Contact = () => {
  return (
    <div className="father">
        <div className="imgg">
        <img src={me} />
        <div>
            <div>Name: <span>Ngô Quang Đức</span></div>
            <div>Age: <span>20</span></div>
            <div>Adress: <span>Từ Sơn-Bắc Ninh</span></div>
        </div>
        </div>
        <div className="baby" style={{margin: '40px'}}>Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh

Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng

Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022

© 2022 - Bản quyền của Công ty TNHH Ti Ki
<div style={{display:"flex",marginTop:"20px"}}>
      <div><a href="https://www.facebook.com/"><BsFacebook style={{fontSize:"30px"}}/></a></div>
      <div><a href="https://www.facebook.com/"><FcCallback style={{fontSize:"30px"}}/></a></div>
       </div>
       </div>
        </div>
   
  )
}

export default Contact