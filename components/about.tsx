"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye, Heart } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">GOJMIVIC</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A leading provider of comprehensive energy services, dedicated to supporting the oil, gas, and renewable
              energy sectors with operational excellence, safety, and innovation.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <img
                src="https://justenergy.com/wp-content/uploads/2021/01/energy-in-motion-types-sources-power-image.jpg"
                alt="GOJMIVIC Energy Resources Facility"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Your Trusted Energy Partner</h3>
              <p className="text-muted-foreground leading-relaxed">
                GOJMIVIC ENERGY RESOURCES LIMITED is a fully integrated Oil Field Services provider dedicated to
                supporting upstream, midstream and operations in the oil and gas industry. Our team of highly skilled
                professionals, combined with cutting-edge technology and strategic partnerships, positions us as a
                reliable partner of choice.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We deliver world-class solutions that ensure efficiency, reduce downtime, and maximize productivity for
                our clients across onshore and offshore environments. Our mission is to ensure safe, reliable, and
                cost-effective energy solutions for our clients worldwide.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission, Vision, Values */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-card p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable, safe and cost-effective services that enhance operational efficiency and
                environmental stewardship for our clients.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the preferred energy services partner, delivering innovative and sustainable solutions across the
                energy and oil gas sector.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, Excellence, Safety, Innovation, and Sustainability guide everything we do in our commitment
                to our clients.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
