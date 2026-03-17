import React, {useState} from 'react'
import properties from '../data/properties'
import ListingCard from '../components/ListingCard.jsx'
import './listings.css'

export default function Listings(){
  const [query, setQuery] = useState('')
  const filtered = properties.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.address.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="container">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12}}>
        <div>
          <h1 className="h1">Listings</h1>
          <div className="lead muted">Browse available properties</div>
        </div>
        <div style={{minWidth:240}}>
          <input className="search-input" placeholder="Search by city or address" value={query} onChange={e=>setQuery(e.target.value)} />
        </div>
      </div>

      <div style={{marginTop:18}} className="grid cols-3">
        {filtered.map(p => <ListingCard key={p.id} property={p} />)}
      </div>
    </div>
  )
}