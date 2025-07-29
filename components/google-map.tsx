"use client"

import { motion } from "framer-motion"

export function GoogleMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-96 w-full rounded-xl overflow-hidden shadow-lg"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4680931897637!2d77.44326950000001!3d28.675641099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf14d00c01055%3A0xb3cffb691b3fc381!2sK%C3%B6rper%20Heil!5e0!3m2!1sen!2sin!4v1753774314340!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Körper Heil Location"
      />
    </motion.div>
  )
}
