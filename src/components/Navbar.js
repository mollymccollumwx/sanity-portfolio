import React from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="bg-red-600 w-full ">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            to="home"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest"
          >
            Molly
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            About
          </Link>
          <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
            to="project"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </Link>
        </nav>
        {/* <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/mollymccollumwx"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/mollymccollumwx/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/WXMolly"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div> */}
      </div>
    </header>
    
    
  );
};

export default Navbar;
