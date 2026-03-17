import React from 'react'
import { Link } from 'react-router-dom'
import './listingcard.css'

export default function ListingCard({property}){
  return (
    <article className="card listing-card">
      <div className="media">
        <img src={property.image} alt={property.title} />
        <div className="badge">{property.price}</div>
      </div>
      <div className="p-20">
        <h3 className="h2">{property.title}</h3>
        <div className="muted">{property.address}</div>
        <div className="meta" style={{marginTop:12}}>
          <span className="muted">{property.beds} bd</span> • <span className="muted">{property.baths} ba</span> • <span className="muted">{property.area}</span>
        </div>
        <div style={{marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Link to={`/property/${property.id}`} className="btn small">View</Link>
          <div className="muted" style={{fontSize:13}}>Agent: {property.agent.name}</div>
        </div>
      </div>
    </article>
  )
}