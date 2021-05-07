import React, { useState } from 'react'
import { Container, Overlay } from './style'
import Link from 'next/link'

import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa'

import { SideBarData } from '../../utils/SideBarData'
const NewSideBar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container>
      {sidebar && <Overlay onClick={showSidebar} />}

      <div className="mobile">
        <div className="navbar">
          <div className="boxImg">
            <Link href="/profile">
              <h2>
                <span>&lt;</span> Levir Lemos <span>/&gt;</span>
              </h2>
            </Link>
          </div>
          <button className="menuBars">
            <FaBars onClick={showSidebar} />
          </button>
        </div>
        <nav className={sidebar ? 'navMenuActive' : 'navMenuDisable'}>
          <ul className="navMenuItems">
            <li className="navBarToogle">
              <button className="menuBars">
                <FaTimes onClick={showSidebar} />
              </button>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className="navText">
                  <Link key={index} href={item.path}>
                    <button>{item.title}</button>
                  </Link>
                </li>
              )
            })}
            <li className="navText">
              <a href="https://www.instagram.com/levirlms/">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/levir.lemos/">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/channel/UCWE4KnYvGHVtJ2oWfZCSocA">
                <FaYoutube />
              </a>
              <a href="https://wa.me/5585998413146">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default NewSideBar
