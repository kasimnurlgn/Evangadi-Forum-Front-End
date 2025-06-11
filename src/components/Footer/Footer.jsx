import React from "react";
import classes from "./Footer.module.css";
import { LuFacebook } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import footerLogo from "../../assets/footerLogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section className={classes.footer_outer_container}>
        <div className={classes.footer_inner_container}>
          <div className={classes.first_section}>
            <div className={classes.logo_wrapper}>
              <Link to="/">
                <img src={footerLogo} alt="Footer logo" />
              </Link>
            </div>

            <ul className={classes.footer_icons}>
              <li>
                <Link
                  to="https://www.facebook.com/evangaditech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuFacebook />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/evangaditech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/@EvangadiTech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineYoutube />
                </Link>
              </li>
            </ul>
          </div>

          <div className={classes.second_section}>
            <h3>Useful Links</h3>
            <ul className={classes.lists}>
              <li>How it works</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className={classes.third_section}>
            <h3>Contact Info</h3>
            <ul className={classes.lists}>
              <li>Evangadi Networks</li>
              <li>support@evangadi.com</li>
              <li>+1-202-386-2702</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
