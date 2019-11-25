import React from 'react'
import { Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Router from './Router';

import styled from "styled-components";

function App({location}) {

  return (
  <Wrapper>
  <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        <section className="route-section">
            <Router location = {location} />
        </section>
      </CSSTransition>
    </TransitionGroup>
  </Wrapper>
);
}

const Wrapper = styled.div`
.fade-enter {
opacity: 0.01;
}

.fade-enter.fade-enter-active {
opacity: 1;
transition: opacity 300ms ease-in;
}

.fade-exit {
opacity: 1;
}

.fade-exit.fade-exit-active {
opacity: 0.01;
transition: opacity 300ms ease-in;
}

div.transition-group {
position: relative;
}

section.route-section {
position: absolute;
width: 100%;
top: 0;
left: 0;
}
`;

export default (withRouter)(App);
