import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./courses.css";
import Contact from '../contact/Contact';

export default function Courses() {
    return (
        <React.Fragment>
            <br/>
            
            <h1 className='heading'>COURSES AVAILABLE</h1>
            <br/>
            <br/>
                <div className="container">
            <div className="row">
        <div className="col"><div className="card">
        <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" className="card-img-top" alt="..." height="200px" />
                    <div className="card-body">
                    <h5 className="card-title">React</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">course duration: 1 month</li>
                        <li className="list-group-item">Course price: $450</li>
                        <li className="list-group-item">Course validity: lifetime access </li>
                    </ul>
                    <div className="card-body">
                        <button className="btn-color"><a href="#"></a>Go to Course</button >
                       
                    </div>
                    </div></div>
                        <div className="col"><div className="card">
                    <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"className="card-img-top" alt="..." height="200px" />
                    <div className="card-body">
                        <h5 className="card-title">Java Script</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Course duration:15 days</li>
                        <li className="list-group-item">Course price: $45</li>
                        <li className="list-group-item">Course validity: lifetime access</li>
                    </ul>
                    <div className="card-body">
                    <button className="btn-color" ><a href="#"></a>Go to Course</button >
                        
                    </div>
                    </div></div>
                    <div className="col"><div className="card">
                    <img src="https://miro.medium.com/max/1400/1*RJMxLdTHqVBSijKmOO5MAg.jpeg"className="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title">Python for everyone</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Course duration:2 months</li>
                        <li className="list-group-item">Course price: $150</li>
                        <li className="list-group-item">Course validity: 6 months</li>
                    </ul>
                    <div className="card-body">
                    <button className="btn-color" ><a href="#"></a>Go to Course</button >
                        
                    </div>
                    </div></div>
            </div>
            </div>
            <br/>
            <br/>
               <div className="container">
            <div className="row">
        <div className="col"><div className="card">
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" className="card-img-top" alt="..." height="200px" />
                    <div className="card-body">
                    <h5 className="card-title">React</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">course duration: 1 month</li>
                        <li className="list-group-item">Course price: $450</li>
                        <li className="list-group-item">Course validity: lifetime access </li>
                    </ul>
                    <div className="card-body">
                    <button className="btn-color" ><a href="#"></a>Go to Course</button >
                        
                    </div>
                    </div></div>
                        <div className="col"><div className="card">
                    <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"className="card-img-top" alt="..." height="200px" />
                    <div className="card-body">
                        <h5 className="card-title">Java Script</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Course duration:15 days</li>
                        <li className="list-group-item">Course price: $45</li>
                        <li className="list-group-item">Course validity: lifetime access</li>
                    </ul>
                    <div className="card-body">
                    <button className="btn-color" ><a href="#"></a>Go to Course</button >
                        
                    </div>
                    </div></div>
                    <div className="col"><div className="card">
                    <img src="https://miro.medium.com/max/1400/1*RJMxLdTHqVBSijKmOO5MAg.jpeg"className="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title">Python for everyone</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Course duration:2 months</li>
                        <li className="list-group-item">Course price: $150</li>
                        <li className="list-group-item">Course validity: 6 months</li>
                    </ul>
                    <div className="card-body">
                    <button className="btn-color" ><a href="#"></a>Go to Course</button >
                        
                    </div>
                    </div></div>
            </div>
            </div>
          <Contact/>
        </React.Fragment>


    );
};
