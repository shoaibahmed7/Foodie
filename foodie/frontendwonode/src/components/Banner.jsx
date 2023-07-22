import '../styles/banner.css'
const Banner = (props) => {
let title=props.data
let title1=props.data
    return ( 
        <div className="banner d-flex align-items-center justify-content-center">
            <div className="Title">
{/* <h1 className='text-light  fw-bolder' style={{fontFamily:"sans-serif",fontSize:"100px"}}>{title}</h1> */}
<h1 className='text-light  fw-bolder text-align-center' style={{fontFamily:"sans-serif",fontSize:"100px"}}>{title1}</h1>


            </div>
        </div>
     );
}
 
export default Banner;