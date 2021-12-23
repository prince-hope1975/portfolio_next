import Link from "next/link";
import { useState } from "react";
import {useGlobalContext} from "../context"
const Header = () =>{
  const [state, setState] = useState(true)
  const [active, setActive] = useState(0)
  const handletoggle= ()=>{
    setState(!state)
  }
    return (
      <header>
        <div
          className={`menu-btn ${state ? "" : "close"}`}
          onClick={handletoggle}
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className={`menu ${state ? "" : "show"}`}>
          <div className={`menu-branding ${state ? "" : "show"}`}>
            <div className="portrait"></div>
          </div>
          <ul className={`menu-nav ${state ? "" : "show"}`}>
         
         {   data.map(({name, link}, index)=>{
              return <NavItem name={name} link={link} active={active} setActive={setActive} index={index}/>
            })}

          </ul>
        </nav>
      </header>
    );
}

const NavItem = ({name, link,state , index}) =>{
  const {active, setActive} = useGlobalContext()
  return (
    <li
    id={index}
      className={`nav-item  ${state ? "" : "show"}  ${
        active === index ? "current" : ""
      }`}
      onClick={async()=>{
       await setActive(index)
        console.log( active)
      }
      }
    >
      <Link href={`/${link}`}>
        <a className="nav-link">{name || "Home"}</a>
      </Link>
    </li>
  );
}


const data = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "About Me",
    link: "about",
  },
  {
    name: "My Work",
    link: "projects",
  },
  {
    name: "How To Reach ME",
    link: "contact",
  },
];
export default Header