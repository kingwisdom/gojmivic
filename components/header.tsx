"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <div className="bg-white border-b border-gray-100 text-emerald-700 py-2 md:py-3 px-4 text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 md:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2 hover:text-emerald-600 transition-colors cursor-pointer">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span className="font-medium text-xs md:text-sm">+234 703 254 1469</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 hover:text-emerald-600 transition-colors cursor-pointer">
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span className="font-medium text-xs md:text-sm">info@gojmivic.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 hover:text-emerald-600 transition-colors cursor-pointer">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">Portharcourt, Nigeria</span>
          </div>
        </div>
      </div>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-emerald-100/50"
          : "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100/50"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ top: isScrolled ? "0" : "44px" }}
      >
        <div className="container mx-auto px-4 py-3 md:py-5">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2 md:space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg">
                <Image src="/g-logo.png" alt="Gojmivic Logo" width={100} height={80} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-emerald-700 font-serif">GOJMIVIC</h1>
                <p className="text-xs md:text-sm text-gray-600 font-medium">Energy Resources Ltd</p>
              </div>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium text-base xl:text-lg relative group cursor-pointer"
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </motion.button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 xl:px-8 py-2 xl:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                Get Quote
              </Button>
            </div>

            <motion.button
              className="lg:hidden p-2 md:p-3 rounded-xl hover:bg-emerald-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-emerald-100/50 shadow-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center justify-between py-4 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 text-lg font-medium rounded-xl group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-emerald-100">
                  <div className="flex flex-col space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm">info@gojmivic.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm">Portharcort, Nigeria</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-4 rounded-xl shadow-lg font-medium">
                    Get Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
