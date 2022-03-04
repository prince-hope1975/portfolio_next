import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillHome } from "react-icons/ai";
import { useGlobalContext } from "../context";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Header = () => {
  const router = useRouter();
  const {active, setActive} = useGlobalContext();
    const [tl, setTl] = useState(gsap.timeline({ paused: false }));
    const ref = useRef();

    useEffect(() => {
      tl.from(ref.current, {
        x: `${Number(Math.random().toFixed()) > 0.5 ? "+" : "-"}=60`,
        opacity: 0,
        duration: 0.3,
      });
    }, []);

useEffect(()=>{
  
},[active])
  return (
    <header className={`${styles.header}`}>
      <div
        className={styles.img}
        onClick={() => {
          setActive(0);
          router.push("/");
        }}
      >
        <Image
        alt="Header icon"
          className={`${styles.image}`}
          src="/png2.png"
          width={90}
          height={100}
        />
      </div>
      <nav className={` `}>
        <ul className={`${styles["nav-menu"]} `}>
          {data.map(({ name, link, alt }, index) => {
            return (
              <NavItem
              
              key={index}
                alt={alt}
                name={name}
                link={link}
                active={active}
                setActive={setActive}
                index={index}
                tl={tl}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const NavItem = ({ name, link, index, alt,ref,tl }) => {
  const { active, setActive } = useGlobalContext();
  return (
    <li
    
      key={index}
      className={`${styles["nav-item"]}    ${
        active === index ? "current" : ""
      }`}
      onClick={() => {
        setActive(index);
     
      }}
    >
      <Link href={`/${link}`}>
        {!alt ? (
          <a
            className={`${styles["home-link"]} ${
              active === index && styles.underline
            }`}
          >
            {name || "Home"}
          </a>
        ) : (
          <a className={`${styles["home-link"]}`}>
            <span className={styles.homeText}>Home</span>
            <span
              className={`${styles.homeSvg} ${
                active === 0 && styles.invisible
              }`}
            >
              {alt}
            </span>
          </a>
        )}
      </Link>
    </li>
  );
};

const data = [
  {
    name: "Home",
    alt: <AiFillHome />,
    link: "",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Portfolio",
    link: "projects",
  },
  {
    name: "Contact",
    link: "contact",
  },
];
export default Header;
