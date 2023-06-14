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

export const Sidebar = (props) => {
  return (
    <>
      <div className="sideBar">
        {/* ------------------ FeaturedPost ------------------ */}
        <div
          className="widget FeaturedPost"
          data-version="2"
          id="FeaturedPost1"
        >
          <div className="widget-title title-wrap">
            <h3 className="title">Featured Post</h3>
          </div>
          <div className="widget-content">
            <div className="featured-post cs">
              <a
                className="fp-inner"
                href="https://incoderweb.blogspot.com/2023/04/image-editor-using-cropperJS.html"
                title="How to create an image editor using cropper.js"
              >
                <span className="entry-image-wrap before-mask is-image">
                  <span
                    className="entry-thumb lazy-ify"
                    style={{
                      backgroundImage:
                        "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9xidD3xpSJnn_5AtF9Cnzo_0REK0rhqJtIhms4MY_wK3dFj6gMfNACgtSdsXDneVMFLh_oBXOezwgreW5rNC2EAJoxewmsh_mM2chJRUd7Csk_9YNKs-iF7ASHMLgto-IOzATbYK6OBsACgw165k0j03BxlRwKXqBqY55LPPSzAegNcv0SX5ivkB4sw/w220-h146-p-k-no-nu/Currency%20Converter%20-%20InCoderWeb.png)",
                    }}
                  ></span>
                </span>
                <div className="entry-header entry-info">
                  <span className="entry-category">cropper.js</span>
                  <h2 className="entry-title">
                    How to create an image editor using cropper.js
                  </h2>
                  <div className="entry-meta text-gray-400">
                    <span className="entry-author mi">
                      <span className="sp">by</span>
                      <span className="author-name text-mainColor">
                        Ashutosh Tiwari
                      </span>
                    </span>
                    <span className="entry-time mi">
                      <span className="sp">•</span>
                      <time
                        className="published"
                        datetime="2023-04-24T14:07:00+05:30"
                      >
                        April 24, 2023
                      </time>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* ------------------ FeaturedPost End ------------------ */}
        {/* ------------------ Profile ------------------ */}
        <div className="widget Profile" data-version="2" id="Profile1">
          <div className="widget-title title-wrap">
            <h3 className="title">About Me</h3>
          </div>
          <div className="widget-content flex">
            <img
              alt="My photo"
              className="profile-img"
              src="//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHUrwDN7dzvuPgvw5BlMIpjx9SpmlY9ojhDjha_3Lh7EXFisYDbJoc8aCbIbqyug1BA0TCYz97-9lQuHQ170Hi9rLVbG-rIuS01kZAPZ8CN4YcsIkEKDvwf_D0r4o7ggbu2Uihh5ZiXijbmuFZNTeQPBMXmaQlpEQMEukTTcS8ldE/w45-h45-p-k-no-nu/profile-pic.png"
            />
            <div className="profile-info">
              <a
                className="profile-name hover:text-mainColor"
                href="https://www.blogger.com/profile/00401829832078284173"
                rel="nofollow"
                target="_blank"
              >
                Ashutosh Tiwari
              </a>
              <a
                className="profile-link"
                href="https://www.blogger.com/profile/00401829832078284173"
                rel="nofollow"
                target="_blank"
              >
                Show more
              </a>
            </div>
          </div>
        </div>
        {/* ------------------ Profile End ------------------ */}

        {/* ------------------ Advertisement ------------------ */}
        <div className="widget HTML" data-version="2" id="HTML1">
          <div className="widget-title title-wrap">
            <h3 className="title">Advertisement</h3>
          </div>
          <div className="widget-content">
            <ins
              className="adsbygoogle"
              data-ad-client="ca-pub-6972024609065927"
              data-ad-slot="6245263354"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>
        {/* ------------------ Advertisement End ------------------ */}
        {/* ------------------ Main Tags ------------------ */}
        <div className="widget Label" data-version="2" id="Label1">
          <div className="widget-title title-wrap">
            <h3 className="title">Main Tags</h3>
          </div>
          <div className="widget-content cloud-label">
            <ul className="cloud-style">
              <li>
                <a
                  className="label-name btn"
                  href="https://incoderweb.blogspot.com/search/label/Javascript"
                >
                  Javascript
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* ------------------ Main Tags End ------------------ */}
        {/* ------------------ Follow Links ------------------ */}
        <div className="widget LinkList" data-version="2" id="LinkList1">
          <div className="widget-title title-wrap">
            <h3 className="title">Follow Us</h3>
          </div>
          <div className="widget-content">
            <ul className="social-icons social social-bg">
              <li className="facebook link-0">
                <a
                  alt="facebook"
                  className="facebook btn"
                  href="https://facebook.com/incoderweb"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="facebook"
                >
                  <FaFacebook />&nbsp;Facebook
                </a>
              </li>
              <li className="instagram link-1">
                <a
                  alt="instagram"
                  className="instagram btn"
                  href="https://instagram.com/incoderweb"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="instagram"
                >
                  <FaInstagram />&nbsp;Instagram
                </a>
              </li>
              <li className="github link-2">
                <a
                  alt="github"
                  className="github btn"
                  href="https://github.com/InCoderWeb"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="github"
                >
                  <FaGithub />&nbsp;Github
                </a>
              </li>
              <li className="whatsapp link-3">
                <a
                  alt="whatsapp"
                  className="whatsapp btn"
                  href="https://wa.me/+919343648050"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="whatsapp"
                >
                  <FaWhatsapp />&nbsp;Whatsapp
                </a>
              </li>
              <li className="youtube link-4">
                <a
                  alt="youtube"
                  className="youtube btn"
                  href="https://www.youtube.com/@incoderweb"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="youtube"
                >
                  <FaYoutube />&nbsp;Youtube
                </a>
              </li>
              <li className="dev link-5">
                <a
                  alt="dev"
                  className="dev btn"
                  href="https://dev.to/incoderweb"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="dev"
                >
                  <FaDev />&nbsp;Dev.to
                </a>
              </li>
              <li className="discord link-6">
                <a
                  alt="discord"
                  className="discord btn"
                  href="https://discord.gg/wSH2kBRPPM"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="discord"
                >
                  <FaDiscord />&nbsp;Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* ------------------ Follow Links End ------------------ */}
        {/* ------------------ Popular Post ------------------ */}
        <div className="widget PopularPosts" data-version="2" id="PopularPosts2">
          <div className="widget-title title-wrap">
            <h3 className="title">Popular Posts</h3>
          </div>
          <div className="widget-content default-items">
            <div className="default-item ds item-0">
              <a
                className="entry-image-wrap is-image"
                href="https://incoderweb.blogspot.com/2023/04/weather-app-javascript.html"
                title="Create a Weather App with HTML, CSS, and JavaScript"
              >
                <span
                  className="entry-thumb lazy-ify"
                  data-image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwwPHskkDJZbkdCq__su6-xXYQR_VJQuTXBqt28CQxF8V6skzw7qBbUamBXre-5ySUx2C-1nNFh9_7knZI0yBJwhB-aGn-h7seXgRyttqrAcLYwNkf--FfzughQM9QIDg0yWabrus9lqr9eV_KqE1C86Eh40aOHx2xbfOoVtVnB1lObG5ZQfwTND63nQ/w72-h72-p-k-no-nu/Create%20a%20Weather%20App%20with%20HTML,%20CSS,%20and%20JavaScript.png"
                  style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwwPHskkDJZbkdCq__su6-xXYQR_VJQuTXBqt28CQxF8V6skzw7qBbUamBXre-5ySUx2C-1nNFh9_7knZI0yBJwhB-aGn-h7seXgRyttqrAcLYwNkf--FfzughQM9QIDg0yWabrus9lqr9eV_KqE1C86Eh40aOHx2xbfOoVtVnB1lObG5ZQfwTND63nQ/w108-h72-p-k-no-nu/Create%20a%20Weather%20App%20with%20HTML,%20CSS,%20and%20JavaScript.png)"}}
                ></span>
              </a>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a
                    href="https://incoderweb.blogspot.com/2023/04/weather-app-javascript.html"
                    title="Create a Weather App with HTML, CSS, and JavaScript"
                  >
                    Create a Weather App with HTML, CSS, and JavaScript
                  </a>
                </h2>
                <div className="entry-meta">
                  <span className="entry-time mi">
                    <time
                      className="published"
                      datetime="2023-04-14T12:37:00+05:30"
                    >
                      April 14, 2023
                    </time>
                  </span>
                </div>
              </div>
            </div>
            <div className="default-item ds item-1">
              <a
                className="entry-image-wrap is-image"
                href="https://incoderweb.blogspot.com/2022/04/responsive-car-game-using-html-css-and.html"
                title="Responsive Car Game using HTML, CSS, and Javascript"
              >
                <span
                  className="entry-thumb lazy-ify"
                  data-image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPXR0pxXyj82CYxDpWPmzh7NI0Ve2OxOopACQubdcApFh81frzHyn_WSeAVa157s0NegdxYmNA8sxFfL3bB3WBLuMPtPvlo3AkyvhbUUqddcUdtsbyI4CDYDGjTrZjDggB8dZNtJbR_tFUSCdcJN2QOAvp1xvnWc5dWObiFo-g76-slS-uoKNqi33rgw/w72-h72-p-k-no-nu/Car%20Game%20Using%20Javascript.png"
                  style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPXR0pxXyj82CYxDpWPmzh7NI0Ve2OxOopACQubdcApFh81frzHyn_WSeAVa157s0NegdxYmNA8sxFfL3bB3WBLuMPtPvlo3AkyvhbUUqddcUdtsbyI4CDYDGjTrZjDggB8dZNtJbR_tFUSCdcJN2QOAvp1xvnWc5dWObiFo-g76-slS-uoKNqi33rgw/w108-h72-p-k-no-nu/Car%20Game%20Using%20Javascript.png)"}}
                ></span>
              </a>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a
                    href="https://incoderweb.blogspot.com/2022/04/responsive-car-game-using-html-css-and.html"
                    title="Responsive Car Game using HTML, CSS, and Javascript"
                  >
                    Responsive Car Game using HTML, CSS, and Javascript
                  </a>
                </h2>
                <div className="entry-meta">
                  <span className="entry-time mi">
                    <time
                      className="published"
                      datetime="2022-04-10T12:54:00+05:30"
                    >
                      April 10, 2022
                    </time>
                  </span>
                </div>
              </div>
            </div>
            <div className="default-item ds item-2">
              <a
                className="entry-image-wrap is-image"
                href="https://incoderweb.blogspot.com/2022/03/Responsive-Animated-Card-Design.html"
                title="Responsive Animated Card Design using HTML and CSS Only"
              >
                <span
                  className="entry-thumb lazy-ify"
                  data-image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOsgnPiIR7dwVNcJfGncgbStIFYmDqpUP9DZRElCZ0LrILb2K90_eHj8-Mz38xQiASfgMK-2pYkK5F1xrYGOaDplQ1NcTO71GN18_R3Hql9oNrCepMNYSmr-uyELyCyMHYH2stXc-lrdzl6ncAlBUthoqa5dPtEL6nI05OcARd0f4TOuEYSWYJpT5NvA/w72-h72-p-k-no-nu/Animated%20Card%20Designs.png"
                  style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOsgnPiIR7dwVNcJfGncgbStIFYmDqpUP9DZRElCZ0LrILb2K90_eHj8-Mz38xQiASfgMK-2pYkK5F1xrYGOaDplQ1NcTO71GN18_R3Hql9oNrCepMNYSmr-uyELyCyMHYH2stXc-lrdzl6ncAlBUthoqa5dPtEL6nI05OcARd0f4TOuEYSWYJpT5NvA/w108-h72-p-k-no-nu/Animated%20Card%20Designs.png)"}}
                ></span>
              </a>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a
                    href="https://incoderweb.blogspot.com/2022/03/Responsive-Animated-Card-Design.html"
                    title="Responsive Animated Card Design using HTML and CSS Only"
                  >
                    Responsive Animated Card Design using HTML and CSS Only
                  </a>
                </h2>
                <div className="entry-meta">
                  <span className="entry-time mi">
                    <time
                      className="published"
                      datetime="2022-03-31T19:34:00+05:30"
                    >
                      March 31, 2022
                    </time>
                  </span>
                </div>
              </div>
            </div>
            <div className="default-item ds item-3">
              <a
                className="entry-image-wrap is-image"
                href="https://incoderweb.blogspot.com/2022/03/how-to-detect-user-location.html"
                title="How to Detect User Location using Javascript"
              >
                <span
                  className="entry-thumb lazy-ify"
                  data-image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6kPo78ANDW3luaROw6NVNMBNJeZw-uiICG0XZO-0d5saey3paxvnPswPAmgotvWYYBFl-5jEipflC-Env7hEJu2S5xnC8Lrd-0eaRLkcDj-nKiHlZ5HnwDwKLjm7uqd_UaI7hCl7hr2HqYk9sN89rhFfSmE2oXkAATZq38DWFYi9miLrPdhKE09-LyA/w72-h72-p-k-no-nu/Get%20User%20Location.png"
                  style={{backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6kPo78ANDW3luaROw6NVNMBNJeZw-uiICG0XZO-0d5saey3paxvnPswPAmgotvWYYBFl-5jEipflC-Env7hEJu2S5xnC8Lrd-0eaRLkcDj-nKiHlZ5HnwDwKLjm7uqd_UaI7hCl7hr2HqYk9sN89rhFfSmE2oXkAATZq38DWFYi9miLrPdhKE09-LyA/w108-h72-p-k-no-nu/Get%20User%20Location.png)"}}
                ></span>
              </a>
              <div className="entry-header">
                <h2 className="entry-title">
                  <a
                    href="https://incoderweb.blogspot.com/2022/03/how-to-detect-user-location.html"
                    title="How to Detect User Location using Javascript"
                  >
                    How to Detect User Location using Javascript
                  </a>
                </h2>
                <div className="entry-meta">
                  <span className="entry-time mi">
                    <time
                      className="published"
                      datetime="2022-03-28T22:20:00+05:30"
                    >
                      March 28, 2022
                    </time>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------ Popular Post End ------------------ */}
      </div>
    </>
  );
};
