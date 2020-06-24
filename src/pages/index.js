import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faKey,
  faRocket,
  faSatelliteDish,
  faObjectGroup,
  faListAlt,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

library.add(
  fab,
  faEnvelope,
  faKey,
  faRocket,
  faSatelliteDish,
  faObjectGroup,
  faListAlt,
  faHome,
  faUser
);

const sections = [
  { id: 'top', name: 'Intro', icon: ['fa', 'home'] },
  { id: 'websites', name: 'Websites', icon: 'satellite-dish' },
  { id: 'web-apps', name: 'Web Apps', icon: 'rocket' },
  { id: 'design', name: 'Design Work', icon: 'object-group' },
  { id: 'vanilla-javascript', name: 'Javascript', icon: ['fab', 'js'] },
  { id: 'about', name: 'About Me', icon: ['fa', 'user'] },
  { id: 'skills', name: 'Skill Summary', icon: 'list-alt' },
  { id: 'contact', name: 'Contact', icon: 'envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">Bryan Jastrzembski</h2>
            <p>
              Web Development and Design. If you need help building a website
              for your business, need design work, want to collaborate on a
              project, or are an employer considering me for work, you can
              browse most of what I've done here.
            </p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="websites" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Life will feel it is always a great need for eu valley, the valley
            CNN ridiculous smile at any time chat mainstream clinical homes.
            Mauris floor was very warm and we need it. One customer now nibh
            Bureau dark pools behavior.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Ipsum Feugiat</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Rhoncus Semper</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Magna Nullam</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Natoque Vitae</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Dolor Penatibus</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="vanilla-javascript" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Life will feel it is always a great need for eu valley, the valley
            CNN ridiculous smile at any time chat mainstream clinical homes.
            Mauris floor was very warm and we need it. One customer now nibh
            Bureau dark pools behavior.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Ipsum Feugiat</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Rhoncus Semper</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Magna Nullam</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Natoque Vitae</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Dolor Penatibus</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
            Developers football competition in diameter big price to layer the
            pot. Chavez ultricies care who wants to CNN. Lobortis elementum
            aliquet eget a den of which they do not hold it in hatred developers
            nor the mountains of the deposit slip. The element of time, sem ante
            ullamcorper dolor nulla quam placerat viverra environment is not
            with our customers. Free makeup and skirt until the mouse or
            partners or to decorate each targeted.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            The element of time, sem ante ullamcorper dolor nulla quam placerat
            viverra environment is not with our customers. Free makeup and skirt
            until the mouse. Japan this innovative and ultricies carton salad
            clinical ridiculous now passes from enhanced. Mauris pot innovative
            care for my pain.
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
