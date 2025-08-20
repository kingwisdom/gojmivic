"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Drill, Wrench, Truck, Droplets, Recycle, Bug, Sun, Users, ShoppingCart, Shield, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Drill,
      title: "Oilfield Services",
      description:
        "Comprehensive drilling support, rig services, well testing, maintenance, mud logging and drilling fluid management.",
      features: ["Drilling Support", "Well Testing", "Mud Logging", "Fluid Management"],
      gradient: "gradient-primary",
    },
    {
      icon: Wrench,
      title: "Oil Tools Equipment",
      description:
        "Top-quality oilfield tools and equipment for drilling, completion, and well intervention with expert support.",
      features: ["Equipment Rental", "Sales & Maintenance", "Custom Fabrication", "24/7 Support"],
      gradient: "gradient-secondary",
    },
    {
      icon: Truck,
      title: "Petroleum Distribution",
      description: "Supply and transportation of refined petroleum products with comprehensive storage solutions.",
      features: ["Product Supply", "Transportation", "Storage Solutions", "Inventory Management"],
      gradient: "gradient-primary",
    },
    {
      icon: Droplets,
      title: "Water & Waste Management",
      description:
        "Industrial wastewater treatment, produced water management, and environmental compliance solutions.",
      features: ["Wastewater Treatment", "Waste Collection", "Environmental Compliance", "Sustainability Solutions"],
      gradient: "gradient-secondary",
    },
    {
      icon: Recycle,
      title: "Agricultural Waste Services",
      description: "Collection, treatment, and disposal of agricultural waste with recycling and composting solutions.",
      features: ["Waste Collection", "Composting", "Biogas Production", "Consulting Services"],
      gradient: "gradient-primary",
    },
    {
      icon: Bug,
      title: "Fumigation & Pest Control",
      description: "Comprehensive pest control programs for oilfield sites and integrated pest management solutions.",
      features: ["Site Pest Control", "Integrated Management", "Industrial Facilities", "Preventive Programs"],
      gradient: "gradient-secondary",
    },
    {
      icon: Sun,
      title: "Renewable Energy",
      description: "Solar and wind project planning, installation, and energy efficiency consulting services.",
      features: ["Solar Projects", "Wind Installation", "Energy Consulting", "Efficiency Management"],
      gradient: "gradient-primary",
    },
    {
      icon: Users,
      title: "Manpower Supply",
      description: "Skilled, semi-skilled, and unskilled personnel supply with logistics support for operations.",
      features: ["Personnel Supply", "Logistics Support", "Quality Assurance", "HR Solutions"],
      gradient: "gradient-secondary",
    },
    {
      icon: ShoppingCart,
      title: "Procurement Services",
      description: "Seamless acquisition of goods, materials, and services with focus on quality and cost-efficiency.",
      features: ["Material Procurement", "Quality Assurance", "Cost Optimization", "Supplier Management"],
      gradient: "gradient-primary",
    },
    {
      icon: Shield,
      title: "Safety Equipment",
      description:
        "Top-quality safety gear and gadgets for construction, oil & gas, healthcare, and industrial sectors.",
      features: ["Safety Gear", "Gas Detectors", "Fire Safety Tools", "First Aid Kits"],
      gradient: "gradient-secondary",
    },
    {
      icon: Building,
      title: "Building Materials",
      description:
        "Comprehensive supply of raw and processed materials for construction, renovation, and infrastructure projects.",
      features: ["Raw Materials", "Processed Products", "Construction Supplies", "Infrastructure Materials"],
      gradient: "gradient-flow",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-24 gradient-hero" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 font-serif">
              Our <span className="text-gradient-primary">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive energy services covering every aspect of oil, gas, and renewable energy operations with
              world-class expertise and cutting-edge sustainable technology.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="card-modern h-full group overflow-hidden relative border-border/30">
                  <div
                    className={`absolute inset-0 ${service.gradient} opacity-5 group-hover:opacity-15 transition-all duration-500`}
                  />

                  <CardHeader className="text-center pb-6 relative z-10">
                    <div
                      className={`w-20 h-20 ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 font-serif">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10 px-6 pb-8">
                    <CardDescription className="text-muted-foreground mb-8 leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center justify-center text-sm text-muted-foreground font-medium"
                        >
                          <div className={`w-2.5 h-2.5 ${service.gradient} rounded-full mr-3 shadow-sm`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-20 p-10 card-modern-glass relative overflow-hidden border border-primary/20"
          >
            <div className="absolute inset-0 gradient-flow opacity-10" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Our team of experts can design tailored solutions to meet your specific energy service requirements.
                Contact us to discuss your project needs and discover how we can help you achieve excellence.
              </p>
              <motion.button
                className="btn-modern gradient-primary text-primary-foreground px-12 py-4 text-lg rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
