import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Socials = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="w-full text-white flex flex-col md:flex-row justify-between px-5 mt-4 text-sm relative">
        <div className="flex gap-4 sm:gap-6 md:gap-6 items-start justify-center md:justify-start mb-4 md:mb-0">
          <a href="https://www.facebook.com/kolconcepts0">
              <Icon icon="ic:baseline-facebook" width="24" height="24" />
          </a>
          <a href="https://wa.me/2349076889241">
            <Icon icon="ic:round-whatsapp" width="24" height="24" />
          </a>
          <a href="https://x.com/ksax001">
              <Icon icon="prime:twitter" width="20" height="20" />
          </a>
          <a href="https://www.linkedin.com/in/kolawole-m-akintayo-aa9175221/">
              <Icon icon="mdi:linkedin" width="24" height="24" />
          </a>
          <a href="https://www.instagram.com/ksax_01/">
              <Icon icon="lets-icons:insta" width="24" height="24" />
          </a>
          <a href="mailto:kolawoleakintayok@gmail.com">
              <Icon icon="simple-icons:gmail" width="24" height="24" />
          </a>
        </div>
        <div className="text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <p>© {currentYear} - Copyright reserved @ PetPal</p>
        </div>
      </div>
  )
}

export default Socials