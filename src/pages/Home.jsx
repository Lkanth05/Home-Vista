import React from 'react'
import { Link } from 'react-router-dom'
import properties from '../data/properties'
import ListingCard from '../components/ListingCard.jsx'
import './home.css'

export default function Home(){
  const featured = properties.slice(0,3)
  return (
    <div className="container home-page">
      <section className="hero card">
        <div className="hero-inner p-20" style={{display:'flex', gap:24, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
          <div style={{flex:'1 1 420px'}}>
            <h1 className="h1">Find your next place to call home</h1>
            <p className="lead">Search curated listings, connect with trusted agents, and explore neighborhoods.</p>
            <div style={{display:'flex', gap:12, marginTop:12}}>
              <Link to="/listings" className="btn">Browse Listings</Link>
              <a href="/contact" className="btn small" style={{background:'#fff', color:'var(--accent)', border:'1px solid rgba(37,99,235,0.08)'}}>Contact Agent</a>
            </div>
          </div>
          <div style={{flex:'0 0 420px'}}>
            <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=574d1d4d0d1b5c18d6f25f36f3c2bd8e" alt="hero" style={{width:'100%', borderRadius:12}} />
          </div>
        </div>
      </section>

      <section style={{marginTop:22}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h2 className="h2">Featured Listings</h2>
          <Link to="/listings" className="muted">View all</Link>
        </div>
        <div className="grid cols-3" style={{marginTop:14}}>
          {featured.map(p => <ListingCard key={p.id} property={p} />)}
        </div>
      </section>
    </div>
  )
}