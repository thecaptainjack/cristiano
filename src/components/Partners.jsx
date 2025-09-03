import React from 'react'
import svg2 from "../images/Logo_7egend.svg"
import a from "../images/2parnter.svg"
import b from "../images/3p.svg"
import c from "../images/4p.svg"
import d from "../images/5p.svg"
import e from "../images/6p.svg"
import f from "../images/7p.svg"
import g from "../images/8p.svg"
import h from "../images/9p.svg"
import i from "../images/10p.svg"
import j from "../images/11p.svg"
import k from "../images/12p.svg"
import l from "../images/13p.svg"
import m from "../images/14p.svg"
import n from "../images/15p.svg"
import o from "../images/16p.svg"
import "./partners.css"

const images = [a, svg2, b, c, d, e, f, g, h, i, j, k, l, m, n, o];

const Partners = () => {
  return (
    <>
      <h2 className="title" data-aos="fade-down">I work with brands I believe in</h2>
      <div className="partners-grid">
        {images.map((img, i) => (
          <div key={i} data-aos="zoom-out" className="partners-card">
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Partners;
