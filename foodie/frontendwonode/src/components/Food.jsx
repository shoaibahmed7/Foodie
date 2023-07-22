import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import '../styles/food.css';
import { Link, useNavigate, useParams } from "react-router-dom";

const Food = () => {
    let title="All Posts"
    let[posts,setPosts]=useState([])
    let[singlepost,setsinglePost]=useState([])

   let navigate= useNavigate()
    let params= useParams()
    useEffect(()=>{
let fetchData=async()=>{
let reponse=await axios.get('http://localhost:4001/foods')
let data=await reponse.data
setPosts(data)

}

fetchData()
    },[])
  
        
      

    return ( 
        <div className="posts">
           <div className="potban align-items-center justify-content-center">
           <Banner data={title}/>
           </div>
            <div className="posts_list mt-5">
{posts.map((x)=>(
<div className="fdblk ">
<div className="pot mt-5">
<div className="image card-header">
<Link to={`/home/foods/${x._id}`}  >  <img src={x.image} alt=""  height="300px" width="400px"/></Link>

  
</div>
<div className="title mt-3">
<h2><b>Title:</b>{x.title}</h2>

</div>
<div className="author mt-3">
<h2><b>Author:</b>{x.author}</h2>

</div>
<div className="read mt-3">
    <Link to={`/home/foods/${x._id}`} onClick={singlepost}  id="redbtn">Read Post➔</Link>
</div>



</div>
</div>
))}
            </div>
        </div>
     );
}
 
export default Food;