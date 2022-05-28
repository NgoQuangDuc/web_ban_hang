import 'bootstrap/dist/css/bootstrap.min.css';
import Comment from './Comment/Comment'
import Homes from './Home/Homes';
import Navs from './Home/Navs'
import{useState} from 'react'
import Hot from './HotProduct/Hot';
import Contact from './Contact/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[yourpr,setYourPr]=useState([])
  const [pri,setPri]=useState(0)
  const[list,setList]=useState([])
  const [search,setSearch]=useState("")
  const[save,setSave]=useState([])
  const count=(abc,def)=>{
    setYourPr([...yourpr,abc])
    setPri(pri+def)
 

    
   }

  return (
    <div>

  <BrowserRouter>
  <Navs yourpr={yourpr} pri={pri} search={search} setSearch={setSearch} save={save} count={count}/>
    <Routes>
      <Route path="/" element={<Homes yourpr={yourpr} setYourPr={setYourPr} pri={pri} setPri={setPri} list={list} setList={setList} setSave={setSave} save={save} count={count}/> } />
      <Route path="/comment" element={<Comment />} />
      <Route path="/hot" element={<Hot />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  </BrowserRouter>

  </div>
  
  );
}

export default App;
