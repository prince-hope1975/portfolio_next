import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
const Cursor = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useLayoutEffect(() => {
    gsap.to(cursor.current, {
      duration: 0.1,
      x: mouseX,
      y: mouseY,
      ease: "power2.out",
    });

    gsap.to(cursor_follower.current, {
      duration: 0.6,
      x: mouseX,
      y: mouseY,
      ease: "power2.out",
    });
  }, [mouseX, mouseY]);

  // useLayoutEffect(()=>{
  //   document.querySelectorAll("a").forEach(item=>{
  //     item.addEventListener("mouseenter",()=>{
  //       cursor.current.classList.add("active")
  //       cursor_follower.current.classList.add("active");
  //     })
  //      item.addEventListener("mouseleave", () => {
  //        cursor.current.classList.remove("active");
  //        cursor_follower.current.classList.remove("active");
  //      });
    
  //   })
  // },[])
  const cursor = useRef<HTMLDivElement>(null);
  const cursor_follower = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={cursor} className="cursor"></div>
      <div ref={cursor_follower} className="cursor-follower"></div>
    </>
  );
};
export default Cursor;
