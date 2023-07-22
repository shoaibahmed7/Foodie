import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "./Banner";
import '../styles/singlepost.css'

const SinglePost = () => {
    let title="Post"
    let[post,setPost]=useState([])
    let params=useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let reponse=await axios.get(`http://localhost:4001/foods/${params.id}`)
            let data=await reponse.data
            setPost(data)
            
            }
            
            fetchData()
    },[])
    return ( 
        <div className="singlepost">
<div className="spban">
<Banner data={title}/>

</div>
<div className="sptxt d-flex">
    <div className="spimg">
        <img src={post.image} alt=""  height="500px" width="600px"/>
    </div>
    <div className="sptxt1 ms-3 mt-3">
        <div className="sptitle">
            <h2><b>{post.title}</b></h2>
        </div>
        <div className="spsummary mt-3">
            <p><b>Summary:</b>{post.summary}</p>
        </div>
        <div className="sploc">
            <iframe src={post.location} frameborder="0"></iframe>
        </div>
        <div className="splink mt-3">
            <Link to="/home/foods" id="spbck">Back to Posts</Link>
        </div>
    </div>
</div>
        </div>
     );
}
 
export default SinglePost;