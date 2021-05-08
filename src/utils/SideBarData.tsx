import React from 'react'
import {
  FaInstagram,
  FaFacebook,
  FaAddressCard,
  FaStore,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa'

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaInstagram />
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <FaInstagram />
  },
  {
    title: 'Noticias',
    path: '/noticias',
    icon: <FaFacebook />
  },
  {
    title: 'Admin',
    path: '/admin',
    icon: <FaAddressCard />
  },
  {
    title: 'Store',
    path: '/store',
    icon: <FaStore />
  },
  {
    title: 'Doar',
    path: 'https://www.paypal.com/donate?hosted_button_id=ZQR9J5LBZAMLN',
    icon: <FaAddressCard />
  }
]

export const SocialLinks = [
  {
    title: 'Whatsapp',
    url: 'https://wa.me/5585998413146',
    icon: <FaWhatsapp />
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/levirlms/',
    icon: <FaInstagram />
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/levir.lemos/',
    icon: <FaFacebook />
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/channel/UCWE4KnYvGHVtJ2oWfZCSocA',
    icon: <FaYoutube />
  }
]
