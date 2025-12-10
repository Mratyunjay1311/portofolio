import React from 'react'
import { motion } from 'framer-motion'


export default function Home({ onNavigate }){
return (
<section id="home" className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-16 px-4 max-w-7xl mx-auto">
<div className="space-y-8">
<div>
<motion.h1 initial={{ x:-40, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.7 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
Hi, I'm <span className="accent">Mratyunjay Mishra</span>
</motion.h1>


<motion.p initial={{ x:-30, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ delay:0.2, duration:0.7 }} className="mt-5 text-lg md:text-xl max-w-2xl leading-relaxed text-gray-300">
A Full Stack Web Developer focused on futuristic interfaces, fast performance and delightful interactions. I build modern web apps using React, Node, Firebase and cloud services.
</motion.p>
</div>


<motion.div initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.4 }} className="flex flex-wrap gap-4">
<button onClick={()=> onNavigate('projects')} className="btn-cyber font-semibold">View My Work</button>
<button onClick={()=> onNavigate('contact')} className="px-7 py-3 rounded-lg border-2 border-white/6 text-gray-200">Get In Touch</button>
</motion.div>
</div>


<motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.8 }} className="flex justify-center md:justify-end">
<div className="relative">
<div className="absolute inset-0 translate-x-4 translate-y-4 bg-gradient-to-br from-cyberA/20 to-cyberB/20 rounded-full blur-3xl -z-10"></div>


<div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/6 profile-ring">
<img src="/profile.png" alt="Mratyunjay Mishra" className="w-full h-full object-cover" />
</div>
</div>
</motion.div>
</section>
)
}