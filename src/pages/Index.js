import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Marcus Gray personal website. Los Angeles Based, '
    + 'co-founder and CTO of Decentralize Music.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">A CyberSecurity/IT Professional Obsessed with technologies ability to inspire an evolution in conciousness </Link></h2>
          <p>
            A beautiful, sincere, creative soul,
            reaching for fullfilment and a challenging problem to solve between cups of decaf.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
