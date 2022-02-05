import React, {useState, useEffect} from "react";
import "./navbar.scss";
import gsap from "gsap";
const links = ["الرئيسية", "حولنا", "قوانين", "تواصل معنا"]
const Navbar = () => {
    const [stateNav, setStateNav] = useState(false);
    useEffect(()=>{
         if(window.innerWidth < 780) {
             hideShow(stateNav);
         }
    }, [stateNav]);

    //start hide show menu function 
    function hideShow(stateNav) {
      var timeline = gsap.timeline();
      if(stateNav) {
          timeline.to(".myList-links", {height:"100vh"})
          .from(".myList-links li", {x:-200, opacity:0, stagger:.5});
      } else  {
          gsap.to(".myList-links", {height:0});         
      }
  }
  //generate the click menu event 
  function clickMenu() {
    const prLinks = document.getElementsByClassName("myList-links");
    const chLinks = document.getElementsByClassName("link-menu");
    console.log();
    const vl  = chLinks[chLinks.length - 1].style.opacity ? chLinks[chLinks.length - 1].style.opacity  : true;
    if( vl || parseInt(prLinks[0].style.height) > 0) setStateNav(!stateNav);
  }
  
  return (
    <div className="navbar">
      <div className="container__gird center-elements">
        <div className="logo">شعار</div>
        <div className="open-close__icon" onClick={clickMenu}>
            <i>{!stateNav ? <i className="fas fa-ellipsis-v"></i> : <i className="fas fa-times"></i>}</i>
        </div>
        <div className="link-list">
          <ul className="myList-links">
            {
                links.map((item, index) => {
                    return <li key={index} className="link-menu"><a href="#" onClick={()=> setStateNav(false)}>{item}</a></li>;
                })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
