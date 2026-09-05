import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

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
    textActive: 'text-orange-300',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  }

  const colors = darkMode ? darkColors : lightColors;

  const handleNavItemClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false); // Close the menu when a nav item is clicked
  }

  return (
    <div className= "absolute top-0 left-0 w-full flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
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
          <div className='hidden lg:flex items-center space-x-6 '>
            {navItems.map((item) => (
              <a 
              key={item.name}
              href={item.href}
              onClick={() => handleNavItemClick(item.name)}
              className= 'relative'
              > 
                <motion.span
                className={`font-medium transition-colors duration-300 ${activeSection === item.name.toLowerCase() ? colors.textActive : `${colors.textPrimary} hover:text-orange-500`}`}
                whileHover={{ scale: 1.05}}
                whileTap={{scale: 0.95}}>
                  {item.name}
                </motion.span>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                  layoutId="navbar-Indicator"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}>

                  </motion.div>
                )}
              </a>
            ))}
          </div>


          {/* Dark Mode Toggle */}
          <div
          className= "flex items-center space-x-2">
            <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            onClick= {toggleDarkMode}
            className= {`p-2 rounded-full ${darkMode ? "bg-amber-700" : "bg-gray-200 "} transition-colors`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <Sun className="text-yellow-400 w-5 h-5"/>
              ): (
                <Moon className="text-amber-600 w-5 h-5"/>
              )
              }
            </motion.button>


            {/* Button CTA */}
            <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden lg:block px-6 py-2 rounded-full font-semibold bg-linear-to-r ${colors.button} text-white shadow:md hover:shadow-lg transition-shadow`}
            >
              Work With Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
            <div className='lg:hidden flex items-center space-x-4 px-2'>
              <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${darkMode 
                ? 'bg-amber-700' : 'bg-gray-200'
              }`}
              >
                {isMenuOpen ? (
                  <X className= {`w-5 h-5 ${darkMode ? 
                    'text-white' : 'text-gray-950'
                  }`}/>
                ) : (
                  <Menu className={`w-5 h-5 ${darkMode ? 
                    'text-white' : 'text-gray-950'
                  }`} />
                )}
              </motion.button>
            </div>
        </div>
        {isMenuOpen && (
          <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{opacity: 1, height: 'auto'}}
           exit={{opacity: 0, height: 0}}
           transition={{duration:0.3}}
           className={`absolute top-full left-0 right-0 mt-2 lg-hidden
            ${darkMode ? 'bg-amber-900' : 'bg-white'} backdrop:blur-lg
            rounded-xl shadow-lg border ${darkMode ? 'border-amber-700' : 'border-amber-700'}`}
          >
            <div className='px-4 py-3 space-y-2'>
              {navItems.map((items) => (
                <a key={items.name}
                  href={items.href}
                  onClick={() => handleNavItemClick(items.name)}
                  className='block'>
                    <motion.div whileHover= {{x:5}}
                    className={`py-3 px-4 rounded-lg text-center ${
                      activeSection === items.name.toLowerCase() ? darkMode ? 'bg-amber-800' : 'bg-orange-100' : '' 
                    }`}>
                      <span className={`font-medium ${activeSection === items.name.toLowerCase() ? colors.textActive : colors.textPrimary }`}> 
                        {items.name}
                      </span>
                    </motion.div>
                </a>
              ))}
              <motion.a 
              href='#contact'
              onClick={() => setIsMenuOpen(false)}
              whileTap= {{scale: 0.95}}
              className={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r ${colors.button} text-white shadow-md`}>
                Work With Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  )
}

export default Navbar