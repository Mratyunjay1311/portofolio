import React from 'react'
import { motion } from 'framer-motion'


export default function About(){
return (
<section id="about" className="py-20 px-6 md:px-12 lg:px-20 text-gray-200">
<motion.h2 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="text-4xl font-bold text-center mb-12">About Me</motion.h2>


<div className="max-w-4xl mx-auto space-y-10">
<motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.6 }} className="card p-6 rounded-xl shadow">
<h3 className="text-2xl font-semibold mb-4">Education</h3>
<div className="space-y-3 text-gray-300">
<div>
<p className="font-medium text-lg">Masai School, Bengaluru</p>
<p className="text-sm">Software Development (Dec 2024 - Ongoing)</p>
</div>
<div>
<p className="font-medium text-lg">Dr. Bhimrao Ambedkar University, Agra</p>
<p className="text-sm">Bachelor of Science (Mathematics)</p>
</div>
</div>
</motion.div>


<motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.6 }} className="card p-6 rounded-xl shadow">
<h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
<div className="flex flex-wrap gap-3">
{["HTML","CSS","JavaScript","React","Node.js","Express","MongoDB","Firebase","Git","GitHub","Tailwind CSS"].map((s,i)=> (
<span key={i} className="px-4 py-2 bg-white/6 rounded-full text-sm font-medium">{s}</span>
))}
</div>
</motion.div>
</div>
</section>
)
}