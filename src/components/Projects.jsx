import React from 'react'
import { motion } from 'framer-motion'


const projectList = [
{
title: 'Memory Saver App',
img: '/logo.png',
stack: ['HTML','CSS','JavaScript','Firebase'],
description: 'A web app that stores your memories like photos and videos and unlocks them at a specific time you choose.',
live: 'https://personal-timecapsule-mmjs.netlify.app/',
github: 'https://github.com/masai-course/mratyunjay_mishra_fs42_520026'
}
]


export default function Projects(){
return (
<section id="projects" className="py-20 px-6 md:px-12 lg:px-20">
<motion.h2 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="text-4xl font-bold text-center mb-12">Projects</motion.h2>


<div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
{projectList.map((project, idx) => (
<motion.div key={idx} initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration:0.6 }} className="card rounded-xl overflow-hidden">
<img src={project.img} alt={project.title} className="w-full h-56 object-cover" />
<div className="p-6">
<h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
<p className="text-sm mb-4 text-gray-300">{project.description}</p>
<div className="flex flex-wrap gap-2 mb-4">
{project.stack.map((t,i)=> <span key={i} className="px-3 py-1 bg-white/6 rounded-full text-xs">{t}</span> )}
</div>
<div className="flex gap-4">
<a href={project.live} target="_blank" rel="noreferrer" className="px-4 py-2 btn-cyber rounded-md">Live Demo</a>
<a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-black/70 rounded-md">GitHub</a>
</div>
</div>
</motion.div>
))}
</div>
</section>
)
}