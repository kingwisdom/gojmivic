"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(5, 150, 105, 0.6) 30%, rgba(16, 185, 129, 0.5) 70%, rgba(255, 255, 255, 0.2) 100%), url('/placeholder.svg?height=1080&width=1920')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/10"></div>

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 gradient-primary rounded-full blur-2xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 gradient-secondary rounded-full blur-2xl opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 gradient-soft rounded-full blur-xl opacity-25"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Powering Energy
            <span className="text-gradient-primary block mt-2 slide-up">Excellence</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Leading provider of comprehensive energy services, dedicated to supporting the oil, gas, and renewable
            energy sectors with innovative, sustainable solutions that drive industry excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" className="btn-modern px-10 py-5 text-lg rounded-2xl shadow-2xl">
              Explore Services
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-modern-outline px-10 py-5 text-lg rounded-2xl backdrop-blur-sm bg-transparent"
            >
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="card-modern-glass text-center p-6">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto float-gentle shadow-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Safety First</h3>
              <p className="text-white/80 leading-relaxed">
                Prioritizing safety in all operations with certified protocols and industry-leading standards
              </p>
            </div>

            <div className="card-modern-glass text-center p-6">
              <div
                className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto float-gentle shadow-xl"
                style={{ animationDelay: "1s" }}
              >
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
              <p className="text-white/80 leading-relaxed">
                Cutting-edge technology and sustainable solutions for maximum efficiency and environmental
                responsibility
              </p>
            </div>

            <div className="card-modern-glass text-center p-6">
              <div
                className="w-20 h-20 gradient-flow rounded-2xl flex items-center justify-center mb-6 mx-auto float-gentle shadow-xl"
                style={{ animationDelay: "2s" }}
              >
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Global Reach</h3>
              <p className="text-white/80 leading-relaxed">
                Serving clients worldwide with local expertise and international quality standards
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="w-6 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-4 bg-white/80 rounded-full mt-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
