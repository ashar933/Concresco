/*// import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './screens/Homepage';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <div>
        <Navbar/> 
        <Routes>
          <Route path="/" exact element={<Homepage/>}></Route>
          <Route path="/cart" exact component={<Cartscreen/>}></Route>
          <Route path="/login" exact component={<Loginscreen/>}></Route>
          <Route path="/about"  component={<Registerscreen/>}></Route>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

*/
import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Homepage from './screens/Homepage';
import Aboutscreen from './screens/Aboutscreen';
import Loginscreen from './screens/Loginscreen';
import Cartscreen from './screens/Cartscreen';
import { render } from 'react-dom';
import Registerscreen from './screens/Registerscreen';



class App extends Component {
  render() {
    return (



      <Router>
        <div className='bkg'>
          <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 rounded">

            <div className="collapse navbar-collapse" id="navbarNav">

              <ul className="navbar-nav">
                <li><Link to={'/'} className="navbar-brand" href="/">Concresco</Link></li>
                <li style={{ marginLeft: '920px' }}><Link to={'/about'} className="nav-link"> About Us</Link></li>
                <li><Link to={'/register'} className="nav-link">Sign Up</Link></li>
                <li><Link to={'/cart'} className="nav-link">Cart</Link></li>

              </ul>
            </div>
          </nav>


          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/about" element={<Aboutscreen />} />
            <Route path="/cart" element={<Cartscreen />} />
            <Route path="/login" element={<Loginscreen />} />
            <Route path="/register" element={<Registerscreen/>} />
          </Routes>


          <div className='main-footer p-1 mb-5 bg-white rounded'>
            <div className='container'>
              <table style={{ width: "100%" }}>
                <tr>

                  <td style={{ textAlign: "left", marginTop:"50px"}}>
                  
                    <h5 style={{marginTop:"8px"}}>Contact Us</h5>
                    <table className='list-unstyled'>
                      <tr>
                        <td>Murari Deshpande :</td>
                        <td>+91 9980967065</td>
                      </tr>
                      <tr>
                        <td>Md Ashar Reza :</td>
                        <td>+91 8073992805</td>
                      </tr>
                      <tr>
                        <td>Netrush Gundji :</td>
                        <td>+91 9513058903</td>
                      </tr>
                      <tr>
                        <td colspan="2">concresco@spiritualworlds.com</td>
                      </tr>
                    </table>

                  </td>
                  {/* Column3 */}

                  <td style={{ textAlign: "right" }}>
                    <h4>Connect With Us</h4>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      className="Facebook social">
                      <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>

                    <a href="https://i.imgur.com/jVjoehc_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                      className="Twitter social">
                      <FontAwesomeIcon icon={faTwitter} size="3x" />
                    </a>

                    <a href="https://www.meme-arsenal.com/memes/2250a51a4156301862232ec1dccf00cb.jpg"
                      className="Instagram social">
                      <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                  </td>


                </tr>
              </table>
              <hr />
              <div className='row'>
                <center>
                  <p className='col-sm'>
                    &copy;{new Date().getFullYear()} Concresco | All Rights Reserved | Terms of Service | Privacy
                  </p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;