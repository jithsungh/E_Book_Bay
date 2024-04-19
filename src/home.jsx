import React, { useState } from "react";
import "./home.css";
import books from "./books.png";
import login from "./login.png";
import web from "./web.png";
import php from "./php.png";
import dcd from "./dcd.png";
import sas from "./sas.png";
import cec from "./cec.png";
import iee from "./iee.png";
import aar from "./aar.png";
import efm from "./efm.png";
const Home = () => {
  const [action, setAction] = useState("home");
  var audio = new Audio("./addr.mp3");
  const start = () => {
    audio.play()
  }
  return (
    <div className="container">
      <div className="header">
        <div className="ebay">E-BOOK BAY</div>
        <div className="home" onClick={() => setAction("home")}>
          HOME
        </div>
        <div className="login" onClick={() => setAction("login")}>
          LOGIN
        </div>
        <div className="register" onClick={() => setAction("register")}>
          REGISTER
        </div>
        <div className="catalogue" onClick={() => setAction("catalogue")}>
          CATALOGUE
        </div>
      </div>
      <div className="body">
        <div className="nav">
          <div className="cse" onClick={() => setAction("cse")}>
            CSE
          </div>
          <div className="ece" onClick={() => setAction("ece")}>
            ECE
          </div>
          <div className="eee" onClick={() => setAction("eee")}>
            EEE
          </div>
          <div className="mech" onClick={() => setAction("mech")}>
            MECH
          </div>
        </div>
        <div className="outputs">
          {action === "home" ? (
            <div className="output" id="home">
              <img src={books} alt="books" />
              <h1>Welcome to Online Book Store!!!</h1>
              <h2>"A Huge Collection of Engineering E-books"</h2>
            </div>
          ) : (
            <div></div>
          )}
          {action === "login" ? (
            <div className="output" id="login">
              <img src={login} alt="login" />
              <h1>Enter Login Details</h1>
              <p>
                Username: <input type="text" />
              </p>
              <p>
                Password: <input type="password" />
              </p>
              <button>Submit</button>
              <button>Reset</button>
            </div>
          ) : (
            <div></div>
          )}
          {action === "register" ? (
            <div className="output" id="register">
              <h1>Registration Form</h1>
              <table>
                <tr>
                  <td>First Name</td>
                  <td>
                    <input type="text" required />
                  </td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <input type="email" required />
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>
                    <input type="password" required />
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Mobile No</td>
                  <td>
                    <input type="number" />
                  </td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>
                    <input type="radio" />
                    Male
                    <input type="radio" />
                    Female
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">
                    <button>Submit</button>

                    <button>Reset</button>
                  </th>
                </tr>
              </table>
            </div>
          ) : (
            <div></div>
          )}
          {action === "catalogue" ? (
            <div className="output" id="catalogue">
              <table>
                <tr>
                  <th>Book</th>
                  <th>Details</th>
                  <th>Price</th>
                  <th>Cart</th>
                </tr>
                <tr>
                  <td>
                    <img src={web} alt="webtechnologies" />
                  </td>
                  <td>
                    <p>Web Technologies</p>
                    <p>Uttam. K Roy</p>
                    <p>Oxford university Press</p>
                  </td>
                  <td>Rs. 499.00 + tax </td>
                  <td>
                    <button>Add to Cart</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={php} alt="PHP" />
                  </td>
                  <td>
                    <p>PHP & MY SQL Web Development</p>
                    <p>Luke Welling & Laura Thompson</p>
                    <p>Pearson</p>
                  </td>
                  <td>Rs.500.00 + tax</td>
                  <td>
                    <button>Add to Cart</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={dcd} alt="Digital ckts" />
                  </td>
                  <td>
                    <p>Digital Circuits </p>
                    <p>S. Salivahanan </p>
                    <p>Oxford university Press </p>
                  </td>
                  <td>Rs.419.00 + tax </td>
                  <td>
                    <button>Add to Cart</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={sas} alt="signals and systems" />
                  </td>
                  <td>
                    <p>Signals and Systems </p>
                    <p>A. Anand Kumar </p>
                    <p>PHI learning pvt ltd </p>
                  </td>
                  <td>Rs.450.00 + tax </td>
                  <td>
                    <button>Add to Cart</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={cec} alt="Concepts electric ckts" />
                  </td>
                  <td>
                    <p>Concepts in Electric circuits </p>
                    <p>Dr. Wasif Naeem </p>
                    <p>Pearson </p>
                  </td>
                  <td>Rs.579.00 + tax </td>
                  <td>
                    <button>Add to Cart</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={iee} alt="intro to EEE" />
                  </td>
                  <td>
                    <p>Introduction to Electronic Engineering</p>
                    <p>Valery Vodovozov </p>
                    <p>Ventus publishing Aps </p>
                  </td>
                  <td>Rs.399.00 + tax</td>
                  <td>
                    <button>Add to Cart</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={aar} alt="Automation and Robotics" />
                  </td>
                  <td>
                    <p>Automation and robotics </p>
                    <p>A K GUPTA </p>
                    <p>Laxmi Publications </p>
                  </td>
                  <td>Rs.449.00 + tax</td>
                  <td>
                    <button>Add to Cart</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={efm} alt="Engineering Fluid mechanics" />
                  </td>
                  <td>
                    <p>Engineering Fluid mechanics </p>
                    <p>Donald F. Elger</p>
                    <p>Wiley </p>
                  </td>
                  <td>Rs.390.00 + tax </td>
                  <td>
                    <button>Add to Cart</button>
                  </td>
                </tr>
              </table>{" "}
            </div>
          ) : (
            <div></div>
          )}
          {action === "cse" ? ( 
            <div className="output" id="cse">
              <h1>Computer Science and Engineering</h1>
              <br />
              <p>
                Text books
                <input type="text" list="booklist" required />
                <datalist id="booklist">
                  <option value="WEB Technologies"></option>
                  <option value="PHP & MySQL Web Development"></option>
                </datalist>
              </p>
              <p>
                Quantity
                <input type="number" />
              </p>
              <button onClick={ start}>ok</button>
              <br />
              <br />
              <p>Cost of one book is Rs.500 + shipping Rs.100</p>
            </div>
          ) : (
            <div></div>
          )}
          {action === "ece" ? (
            <div className="output" id="ece">
              <h1>Electronics and Communication Engineering</h1>
              <br />
              <p>
                Text books
                <input type="text" list="booklist" required />
                <datalist id="booklist">
                  <option value="Digital Circuits"></option>
                  <option value="Signals and Systems"></option>
                </datalist>
              </p>
              <p>
                Quantity
                <input type="number" />
              </p>
              <button onClick={ start}>ok</button>
              <br />
              <br />
              <p>Cost of one book is Rs.500 + shipping Rs.100</p>
            </div>
          ) : (
            <div></div>
          )}
          {action === "eee" ? (
            <div className="output" id="eee">
              <h1>Electrical and Electronics Engineering</h1>
              <br />
              <p>
                Text books
                <input type="text" list="booklist" required />
                <datalist id="booklist">
                  <option value="Concepts in electric circuits"></option>
                  <option value="introduction to electronic engineering"></option>
                </datalist>
              </p>
              <p>
                Quantity
                <input type="number" />
              </p>
              <button onClick={ start}>ok</button>
              <br />
              <br />
              <p>Cost of one book is Rs.500 + shipping Rs.100</p>
            </div>
          ) : (
            <div></div>
          )}
          {action === "mech" ? (
            <div className="output" id="mech">
              <h1>Mechanical Engineering</h1>
              <br />
              <p>
                Text books
                <input type="text" list="booklist" required />
                <datalist id="booklist">
                  <option value="Automation and Robotics"></option>
                  <option value="Engineering Fluid mechanics"></option>
                </datalist>
              </p>
              <p>
                Quantity
                <input type="number" />
              </p>
              <button onClick={ start}>ok</button>
              <br />
              <br />
              <p>Cost of one book is Rs.500 + shipping Rs.100</p>{" "}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
