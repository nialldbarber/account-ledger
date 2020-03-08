import React from 'react'
import { Container } from 'styles/footer'
import netscape from 'assets/netscape.gif'
import css from 'assets/css.gif'
import html from 'assets/html.png'

const Footer = () => (
  <Container>
    <img src={html} alt="HTML gif" />
    <img src={netscape} alt="Netscape gif" />
    <img src={css} alt="CSS gif" />
  </Container>
)

export default Footer
