import React from 'react'
import { motion } from 'framer-motion'


export default function Contact(){
return (
<section id="contact" className="py-20 px-6 md:px-12 lg:px-20 text-gray-200">
<motion.h2 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="text-4xl font-bold text-center mb-12">Contact Me</motion.h2>


<motion.div initial={{ opacity:0, scale:0.98 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration:0.6 }} className="max-w-xl mx-auto card shadow-lg p-8 rounded-xl">
<div className="space-y-6 text-gray-200">
<div>
<p className="text-lg font-semibold">Email:</p>
<a href="mailto:brahman.mratyunjay1311@gmail.com" className="neon hover:underline">brahman.mratyunjay1311@gmail.com</a>
</div>


<div>
<p className="text-lg font-semibold">Phone:</p>
<a href="tel:+917300881306" className="neon hover:underline">+91 7300881306</a>
</div>


<div>
<p className="text-lg font-semibold">GitHub:</p>
<a href="https://github.com/masai-course/mratyunjay_mishra_fs42_520026" target="_blank" rel="noreferrer" className="neon hover:underline">github.com/mratyunjay_mishra_fs42_520026</a>
</div>


<div>
<p className="text-lg font-semibold">LinkedIn:</p>
<a href="https://www.linkedin.com/in/mratyunjay-mishra/" target="_blank" rel="noreferrer" className="neon hover:underline">linkedin.com/in/mratyunjay-mishra</a>
</div>
</div>
</motion.div>
</section>
)
}