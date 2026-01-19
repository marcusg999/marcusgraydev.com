/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Marcus Gray</h2>
        <p><a href="mailto:marcusgraydev@gmail.com">marcusgraydev@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Marcus. I am a life long learner, blockchain evangelist,
        Technology slut, AI implementation addict, banned book collector and singularity seeker.
        I like building things. I am a coding bootcamp survivor, and
        the co-founder and CTO of Decentralize Music. Before Decentralize Music I was
        at the record label Jazz is Dead where I was web3 director, project manager and
        web developer. Im currently obsessed with building AI Agents that solve problems for small businesses.
        As well as produceing AI content and films with tools such as Higgefield, SORA, KLING.AI and many others. 
        Can I build you a solution?
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Marcus Gray <Link to="/">marcusgraydev.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
