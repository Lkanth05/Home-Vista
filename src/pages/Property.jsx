import React from 'react'
import { useParams, Link } from 'react-router-dom'
import properties from '../data/properties'
import AgentCard from '../components/AgentCard.jsx'
import './property.css'

export default function Property(){
  const { id } = useParams()
  const property = properties.find(p => p.id === id)
  if(!property){
    return <div className="container"><h2 className="h2">Property not found</h2><Link to="/listings" className="muted">Back to listings</Link></div>
  }
  return (
    <div className="container">
      <div className="grid" style={{gridTemplateColumns:'1fr 320px', gap:20}}>
        <div>
          <div className="card">
            <img src={property.image} alt={property.title} style={{width:'100%', height:420, objectFit:'cover'}} />
            <div className="p-20">
              <h1 className="h1">{property.title}</h1>
              <div className="muted">{property.address} • <strong style={{color:'var(--accent-2)'}}>{property.price}</strong></div>
              <div style={{marginTop:12}} className="muted">{property.beds} bed • {property.baths} bath • {property.area}</div>
              <p style={{marginTop:16}}>{property.description}</p>
              <div style={{marginTop:14}}>
                <Link className="btn" to="/contact">Request Tour</Link>
              </div>
            </div>
          </div>
        </div>

        <aside>
          <AgentCard agent={property.agent} />
          <div style={{height:16}} />
          <div className="card p-20">
            <h3 className="h2">Property details</h3>
            <ul style={{marginTop:8, paddingLeft:18}} className="muted">
              <li>Address: {property.address}</li>
              <li>Price: {property.price}</li>
              <li>Area: {property.area}</li>
              <li>Bedrooms: {property.beds}</li>
              <li>Bathrooms: {property.baths}</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}