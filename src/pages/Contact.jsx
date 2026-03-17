import React, {useState} from 'react'
import './contact.css'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [sent, setSent] = useState(false)
  function submit(e){
    e.preventDefault()
    setSent(true)
    setTimeout(()=> setSent(false), 4000)
  }
  return (
    <div className="container">
      <div style={{display:'flex', gap:20, alignItems:'flex-start', flexWrap:'wrap'}}>
        <div style={{flex:1, minWidth:320}}>
          <h1 className="h1">Contact an Agent</h1>
          <p className="muted">Fill out the form and an agent will reach out to you.</p>

          <form onSubmit={submit} className="contact-form card p-20">
            <label className="muted">Name</label>
            <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
            <label className="muted">Email</label>
            <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} type="email" required />
            <label className="muted">Message</label>
            <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows="5" required />
            <div style={{marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <button className="btn" type="submit">{sent ? 'Sent' : 'Send Message'}</button>
              <div className="muted" style={{fontSize:13}}>We reply within 24 hours.</div>
            </div>
          </form>
        </div>

        <div style={{width:320}}>
          <div className="card p-20">
            <h3 className="h2">Office</h3>
            <div className="muted">123 Demo Street<br/>City, Country</div>
            <div style={{height:12}} />
            <div className="muted">Phone: (555) 444-1212</div>
          </div>
        </div>
      </div>
    </div>
  )
}