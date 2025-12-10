import React, { useState, useEffect } from 'react'


export default function Navbar({ onNavigate }){
const [open, setOpen] = useState(false)
const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))


useEffect(()=>{
if(dark) document.documentElement.classList.add('dark')
else document.documentElement.classList.remove('dark')
},[dark])


const links = [
{label:'Home', id:'home'},
{label:'About', id:'about'},
{label:'Projects', id:'projects'},
{label:'Contact', id:'contact'}
]


return (
<nav className="flex items-center justify-between py-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyberB to-cyberA flex items-center justify-center font-bold text-black">MM</div>
<h1 className="text-xl font-semibold">Mratyunjay Mishra</h1>
</div>


<div className="hidden md:flex items-center gap-6">
{links.map(l=> (
<button key={l.id} onClick={()=> onNavigate(l.id)} className="text-sm hover:opacity-80 transition">{l.label}</button>
))}


<a href="/resume.pdf" download>
<button className="px-4 py-2 rounded-md bg-gradient-to-r from-cyberA to-cyberB text-black font-semibold">Resume</button>
</a>


<button onClick={()=> setDark(d=>!d)} className="p-2 rounded-md bg-white/5">{dark? '🌙':'☀️'}</button>
</div>


<div className="md:hidden flex items-center gap-3">
<button onClick={()=> setOpen(o=>!o)} className="p-2 rounded-md bg-white/5">{open? '✕':'☰'}</button>
</div>


{open && (
<div className="md:hidden absolute left-4 right-4 top-20 bg-black/40 backdrop-blur-lg rounded-lg p-4">
<div className="flex flex-col gap-3">
{links.map(l=> (
<button key={l.id} onClick={()=> { onNavigate(l.id); setOpen(false) }} className="py-2 text-left">{l.label}</button>
))}
<a href="/resume.pdf" download>
<button className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-cyberA to-cyberB text-black">Resume</button>
</a>
</div>
</div>
)}
</nav>
)
}