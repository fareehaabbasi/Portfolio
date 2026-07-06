import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "AboutMe", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const lightColors = {
    navBg: 'bg-linear-to-br from-orange-200 to-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-800',
    textHover: 'text-orange-500',
    textActive: 'text-orange-600',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  }

  const darkColors = {
    navBg: 'bg-linear-to-br from-orange-500 to-black', textPrimary: 'text-white',
    textSecondary: 'text-gray-800',
    textHover: 'text-orange-500', 
    textActive: 'text-orange-600',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  }

  const colors = darkMode ? darkColors : lightColors;

  const handleNavItemClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false); // Close the menu when a nav item is clicked
  }

  return (
    <div className= "flex justify-center w-full fixed z-50 mt-4">
      <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition= {{ duration:0.5}}
      className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg shadow-black/30`}
      >

        <div className='flex items-center justify-between w-full space-x-6 lg:space-x-8'>
        {/* logo */}
        <motion.a href="/"
        whileHover={{ scale: 1.05 }}
        className= 'flex items-center space-x-2'>
          <span
          className={
            `text-xl font-bold ${colors.textPrimary}`
          }>
            TechWithFareeha<span className='text-orange-500'>.</span>
           </span>
          
        </motion.a>
        {/* Navigation Items */}
          <div className='lg:flex items-center space-x-6 '>
            {navItems.map((item) => (
              <a 
              key={item.name}
              href={item.href}
              onClick={() => handleNavItemClick(item.name)}
              className= 'relative'
              >
                <motion.span
                className={`font-medium transition-colors duration-300`}>
                  {item.name}
                </motion.span>
              </a>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default Navbar