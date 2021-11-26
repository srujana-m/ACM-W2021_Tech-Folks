import React, { useContext } from "react";
import Home from './pages/home/Home';
import TopBar from './components/topbar/Topbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { Context } from "./context/Context";
import Courses from "./pages/courses/Courses";
import Internship from "./pages/internship/Internship";
import Contact from "./pages/contact/Contact";
import Blog1 from "./pages/blogposts/Blog1";
import Blog2 from "./pages/blogposts/Blog2";
import Blog3 from "./pages/blogposts/Blog3";
import Blog4 from "./pages/blogposts/Blog4";
import Blog5 from "./pages/blogposts/Blog5";
import Faq from "./pages/faq/Faq";
import Code from "./pages/coding/Code";



function App() {
  const {user} = useContext(Context);
    return (
    <Router>
    <TopBar/>
     <Switch>
     <Route exact path="/">
            <Home />
          </Route>
      <Route path="/register">
            {user ?<Home/> :<Register/>}
        </Route>
        <Route exact path="/courses">
            <Courses/>
          </Route>
          <Route path="/faq"><Faq/></Route>
      <Route path="/code"><Code/></Route>   
          <Route path="/blog1"><Blog1/></Route>
           <Route path="/blog2"><Blog2/></Route>
            <Route path="/blog3"><Blog3/></Route>
            <Route path="/blog4"><Blog4/></Route>
      <Route path="/blog5"><Blog5/></Route>
          <Route exact path="/contact">

           <Contact/>
          </Route>
          <Route exact path="/internship">
            <Internship/>
          </Route>     
      <Route path="/login">
      {user ?<Home/> :<Login/>}
          </Route>
      <Route path="/settings">
      {user ?<Settings/> :<Register/>}
          </Route>    
      <Route path="/write">
      {user ?<Write/> :<Register/>}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
     </Switch>
    </Router>
  );
}
export default App;
