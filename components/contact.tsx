"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 703 254 1469", ""],
      color: "text-primary",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@gojmivic.com", "services@gojmivic.com"],
      color: "text-primary",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Portharcourt", "Nigeria"],
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Available always", "24/7 Emergency Support"],
      color: "text-primary",
    },
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
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your energy service needs? Contact our expert team for personalized solutions and
              competitive quotes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-card rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact CTA */}
              <motion.div variants={itemVariants} className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-bold text-foreground mb-2">Emergency Services</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Need immediate assistance? Our emergency response team is available 24/7.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Emergency Contact
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-card-foreground">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="+XXX XXX XXX"
                        />
                      </div>
                      {/* <div>
                        <label htmlFor="service" className="block text-sm font-medium text-card-foreground mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a service</option>
                          <option value="oilfield">Oilfield Services</option>
                          <option value="equipment">Oil Tools Equipment</option>
                          <option value="petroleum">Petroleum Distribution</option>
                          <option value="waste">Water & Waste Management</option>
                          <option value="agricultural">Agricultural Waste Services</option>
                          <option value="fumigation">Fumigation & Pest Control</option>
                          <option value="renewable">Renewable Energy</option>
                          <option value="manpower">Manpower Supply</option>
                          <option value="procurement">Procurement Services</option>
                          <option value="safety">Safety Equipment</option>
                          <option value="building">Building Materials</option>
                          <option value="other">Other</option>
                        </select>
                      </div> */}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full"
                        placeholder="Please describe your project requirements, timeline, and any specific needs..."
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg"
                      >
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
