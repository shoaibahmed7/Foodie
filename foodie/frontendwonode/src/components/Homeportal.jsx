import {Routes,Route} from 'react-router-dom'
import About from './About';
import AddPosts from './Addposts';
import Food from './Food';
import Home from './Home';
import Navbar from './navbar';
import SinglePost from './singlePost';

const HomePortal = () => {
    return (  
        <div className="Homeportal">
            <Navbar/>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/addPosts' element={<AddPosts/>}/>
    <Route path='/foods' element={<Food/>}/>
    <Route path='/foods/:id' element={<SinglePost/>}/>



</Routes>
        </div>
    );
}
 
export default HomePortal;