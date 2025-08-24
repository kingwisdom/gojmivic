"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Cog, Leaf, CheckCircle } from "lucide-react"

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reasons = [
    {
      icon: Award,
      title: "Experienced Team",
      description: "Certified technical professionals with decades of industry experience",
    },
    {
      icon: Cog,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and cutting-edge technological solutions",
    },
    {
      icon: CheckCircle,
      title: "Quality Commitment",
      description: "Unwavering commitment to safety, quality, and environmental sustainability",
    },
    {
      icon: Leaf,
      title: "Flexible Solutions",
      description: "Client-focused solutions tailored to meet specific industry needs",
    },
  ]

  const coreValues = [
    { title: "Integrity", description: "Upholding honesty and transparency in all operations" },
    { title: "Excellence", description: "Delivering high-quality services with precision" },
    { title: "Safety", description: "Prioritizing the well-being of people and the environment" },
    { title: "Innovation", description: "Embracing advanced technologies for better outcomes" },
    { title: "Sustainability", description: "Committing to environmentally responsible practices" },
  ]

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
    <section id="why-choose-us" className="py-20 bg-secondary/30" ref={ref}>
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
              Why Choose <span className="text-primary">MIRAAMAND</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for comprehensive energy services with a proven track record of excellence,
              innovation, and reliability.
            </p>
          </motion.div>

          {/* Main Reasons Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <reason.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Values Section */}
          <motion.div variants={itemVariants} className="bg-card rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-center text-card-foreground mb-8">
              Our Core <span className="text-primary">Values</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-background rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Expert Team Members" },
              { number: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
