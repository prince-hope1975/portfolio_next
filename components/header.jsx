import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { useGlobalContext } from "../context";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Header = () => {
  const [state, setState] = useState(true);
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   ref?.current?.active= true
  // }, [])

  const handletoggle = () => {
    setState(!state);
  };
  return (
    <header className={`${styles.header}`}>
      <div class={styles.img}>
        <Image
          className={`${styles.image}`}
          src="/png2.png"
          width={90}
          height={100}
        />
      </div>
      <nav className={` ${state ? "" : "show"}`}>
        <ul className={`${styles["nav-menu"]} ${state ? "" : "show"}`}>
          {data.map(({ name, link, alt }, index) => {
            return (
              <NavItem
                alt={alt}
                name={name}
                link={link}
                active={active}
                setActive={setActive}
                index={index}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const NavItem = ({ name, link, state, index, alt }) => {
  const { active, setActive } = useGlobalContext();
  return (
    <li
      key={index}
      className={`${styles["nav-item"]}  ${state ? "" : "show"}  ${
        active === index ? "current" : ""
      }`}
      onClick={() => {
        setActive(index);
        console.log(active);
      }}
    >
      <Link href={`/${link}`}>
        {!alt ? (
          <a className={`${styles["home-link"]}`}>{name || "Home"}</a>
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
    name: "Contact me",
    link: "contact",
  },
];
export default Header;
