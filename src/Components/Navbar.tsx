import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import resume from '../assets/Resume_Santhiya.pdf'

const Navbar = () => {
  const [, setMenu] = useState("home");
  const menuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-300px";
    }
  };

  function downloadResume() {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Resume-Santhiya.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="navbar">
      <IoReorderThreeOutline onClick={openMenu} className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <AiOutlineClose onClick={closeMenu} className="nav-mob-close" />

        <li>
          {" "}
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" href="#about" offset={50}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" href="#mywork" offset={50}>
            <p onClick={() => setMenu("mywork")}>My Work</p>
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" href="#exp" offset={50}>
            <p onClick={() => setMenu("experience")}>Experience</p>
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href={resume} download='Resume-Santhiya.pdf'>
          <p onClick={() => {downloadResume}}>Connect With Me</p>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
