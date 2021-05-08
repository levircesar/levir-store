import React, { useState } from 'react'
import { Container, Overlay, Size } from './style'
import Link from 'next/link'

import { FaBars, FaTimes } from 'react-icons/fa'

import { SideBarData, SocialLinks } from '../../utils/SideBarData'
const NewSideBar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container fixed={false}>
      {sidebar && <Overlay onClick={showSidebar} />}

      <div className="mobile">
        <div className="navbar">
          <Size max={'1100px'}>
            <div className="boxImg">
              <Link href="/">
                <h2>
                  <span>&lt;</span> Levir Lemos <span>/&gt;</span>
                </h2>
              </Link>
            </div>
            <button className="menuBars">
              <FaBars onClick={showSidebar} />
            </button>
          </Size>
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
              {SocialLinks.map((item, index) => {
                return (
                  <a key={index} href={item.url}>
                    {item.icon}
                  </a>
                )
              })}
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default NewSideBar
