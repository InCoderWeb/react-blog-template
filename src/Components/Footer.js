import { useState } from "react";
import {
    FaFacebook,
    FaYoutube,
    FaWhatsapp,
    FaDiscord,
    FaDev,
    FaInstagram,
    FaGithub,
  } from "react-icons/fa";

export const Footer = (props) => {
  return (
    <>
      <footer id="footer-wrapper">
        <div className="primary-footer flex-center">
          <div className="container row-x1">
            <div
              className="litespot-pro-about-section section"
              id="litespot-pro-about-section"
              name="About Section"
            >
              <div className="widget Image" data-version="2" id="Image101">
                <a className="footer-logo custom-image" href="/">
                  <img
                    alt="InCoder | Creative CSS Design Blog - HTML CSS &amp; Javascript"
                    id="Image101_img"
                    src="https://blogger.googleusercontent.com/img/a/AVvXsEihe7ezkYDnUI_yXp20jaLBnNwsiBCtS6vlk2HcsGon66AOkbfNd4QPDq9j3MUP_EizxwK_gkSjI2O6jTHGZOf07bKpmo7uwP7Ggzoqfqk-BKbBlm4QeCU3PXUbK8C2j3OUoxtf8qZuQLQBWU8QcXq_fmWn3eCTzo702_000qKHfxNrrA5N9cy3VYhG8w=s150"
                  />
                </a>
                <div className="footer-info">
                  <p className="image-caption excerpt max-w-[28rem]">
                    Welcome to inCoder, this is a blog where blogs are posted
                    related to HTML, CSS, Javascript, PHP, and Python along with
                    creative coding stuff like Animated CSS Buttons, Simple
                    Calculator in Python. Here I also provide some mini projects
                    for beginners.
                  </p>
                </div>
              </div>
              <div className="widget LinkList" data-version="2" id="LinkList103">
                <ul className="social-icons social social-bg-hover">
                  <li className="facebook link-0">
                    <a
                      alt="facebook"
                      className="facebook btn"
                      href="https://facebook.com/incoderweb"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="facebook"
                    ><FaFacebook /></a>
                  </li>
                  <li className="youtube link-2">
                    <a
                      alt="youtube"
                      className="youtube btn"
                      href="https://www.youtube.com/@incoderweb"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="youtube"
                    ><FaYoutube/></a>
                  </li>
                  <li className="instagram link-3">
                    <a
                      alt="instagram"
                      className="instagram btn"
                      href="https://instagram.com/incoderweb"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="instagram"
                    ><FaInstagram/></a>
                  </li>
                  <li className="github link-4">
                    <a
                      alt="github"
                      className="github btn"
                      href="https://github.com/InCoderWeb"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="github"
                    ><FaGithub/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footerbar flex-center">
          <div className="container row-x1">
            <div
              className="footer-copyright section"
              id="footer-copyright"
              name="Footer Copyright"
            >
              <div className="widget Text" data-version="2" id="Text101">
                Designed By -{" "}
                <a href="https://instagram.com/imashu.tiwari" target="_blank" className="hover:text-mainColor">Ashutosh Tiwari</a>
              </div>
            </div>
            <div
              className="footer-menu section"
              id="footer-menu"
              name="Footer Menu"
            >
              <div className="widget LinkList" data-version="2" id="LinkList104">
                <ul className="link-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="https://incoderweb.blogspot.com/p/about-us.html">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="https://incoderweb.blogspot.com/p/contact.html">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="https://incoderweb.blogspot.com/p/privacy-policy.html">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://incoderweb.blogspot.com/p/terms-conditions.html">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
