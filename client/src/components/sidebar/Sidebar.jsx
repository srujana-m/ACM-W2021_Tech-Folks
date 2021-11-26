import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
      const [cats,setCats] =useState([]);
      useEffect(()=>{
          const getCats =async ()=>
          {
              const res =await axios.get("/categories");
              setCats(res.data);
          };
          getCats();
      },[]);
    return (
        
        <div className="sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">ABOUT ME</span>
               <img className="sidebarimg" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGxlZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt=""/>
               <p>
                  EDU hub is a student friendly website which is 
               </p>
           </div>
            <br/>
           <div className="sidebarItem">
            <span className="sidebarTitle">OUR BLOGS</span>
            <ul className="sidebarList">
                <center>
                <Link to="/blog1"><li className="sidebarListItem">How to Crack an Interview ? </li></Link>
                <Link to="/blog2"><li className="sidebarListItem">Top 10 Websites to Learn code</li></Link>
                <Link to="/blog3"><li className="sidebarListItem">Artificial Intelligence</li></Link>
                <Link to="/blog4"><li className="sidebarListItem">Machine Learning</li></Link>
                <Link to="/blog5"><li className="sidebarListItem">How is Technology Evolving ?</li></Link>
                <Link to="/courses"><li className="sidebarListItem">Coursees</li></Link>
                
                </center>
            </ul>
            </div>
            <br/>
           <div className="sidebarItem">
           <span className="sidebarTitle">FOLLOW US</span> 
           <div className="sidebarSocial">
           <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter"></i>
            <i className="sidebarIcon fab fa-instagram"></i>
           </div>
           </div>
        </div>
    );
}
