import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


export default function App(){
const scrollTo = (id) => {
const el = document.getElementById(id)
if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
}


return (
<div className="min-h-screen">
<div className="max-w-6xl mx-auto px-6">
<Navbar onNavigate={scrollTo} />
</div>


<main>
<Home onNavigate={scrollTo} />
<About />
<Projects />
<Contact />
</main>


<footer className="mt-16 text-center text-sm text-gray-500 pb-10">© {new Date().getFullYear()} Mratyunjay Mishra · Built with React + Vite</footer>
</div>
)
}