import Banner from "./Banner";
import '../styles/about.css'
import abtlt1 from '../images1/abtlt1'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const About = () => {
  let [add,setAdd]=useState('')
    useEffect(()=>
    {
        let fetchData=async()=>{
            let response =await axios.get(`http://localhost:4001/foods`)
            let data=await response.data
         console.log(setAdd(data))   
        }
        fetchData()
    })

        let [add1,setAdd1]=useState('')
        useEffect(()=>
        {
            let fetchData=async()=>{
                let response =await axios.get(`http://localhost:4001/users`)
                let data=await response.data
             console.log(setAdd1(data))   
            }
            fetchData()
        })
  let title = "About Page";

  return (
    <div className="about">
      {/* banner start */}
      <div className="abtbantitle">
        <Banner data={title} />
      </div>
      {/* banner end */}
      {/* about block1 start*/}
      <div className="abtblock d-flex">
        <div className="abtimg">
<img src={abtlt1} alt="" height="700px" width="600px"/>
        </div>
        <div className="abttoptxt ms-5 " >
            <div className="hed mt-4">
              <h1><b>  About Stories</b></h1>
            </div>
            <div className="para fs-5" >
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="abttxt d-flex flex-wrap mt-0 ">
                <div className="txt1 d-block" >
                   <div className="txt1pa">
                   <h3>10</h3>
                    <p>Years of Experienced</p>
                   </div>
                </div>
                <div className="txt1 ms-5">
                <div className="txt1pa">
                <h3>{add.length}</h3>
                    <p>Foods</p>
                </div>
                </div>
                <div className="txt1bot d-flex">
                <div className="txt1" >
             <div className="txt1pa">
             <h3>300</h3>
                    <p>Lifestyle</p>
             </div>
                    </div>
                    <div className="txt1 ms-5">
                    <div className="txt1pa">
                    <h3>{add1.length}</h3>
                    <p>Happy Customers</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
     {/* about block1 end */}
    </div>
  );
};

export default About;
