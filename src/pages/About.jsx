import React from 'react'
import './about.css'

export default function About(){
  return (
    <div className="container">
      <h1 className="h1">About HomeVista</h1>
      <p className="lead muted">HomeVista is a demo real estate UI built with modern React + Vite tooling to showcase component design and UX patterns for property listings, agents, and property details.</p>

      <div className="grid cols-3" style={{marginTop:18}}>
        <div className="card p-20">
          <h3 className="h2">Our Vision</h3>
          <p className="muted">Deliver clear, beautiful property browsing experiences to help buyers find the right home faster.</p>
        </div>

        <div className="card p-20">
          <h3 className="h2">Design</h3>
          <p className="muted">A lightweight, responsive design system using cards, grids, and subtle motion for clarity.</p>
        </div>

        <div className="card p-20">
          <h3 className="h2">Tech</h3>
          <p className="muted">Built with Vite, React, and react-router. Easy to extend with APIs or CMS backends.</p>
        </div>
      </div>
    </div>
  )
}