import React from 'react'
import './agentcard.css'

export default function AgentCard({agent}){
  return (
    <div className="card agent-card p-20">
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <img src={agent.avatar} alt={agent.name} className="agent-avatar" />
        <div>
          <div style={{fontWeight:700}}>{agent.name}</div>
          <div className="muted" style={{fontSize:13}}>{agent.phone}</div>
        </div>
      </div>
    </div>
  )
}