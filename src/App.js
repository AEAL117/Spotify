import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './config/supabaseClient'
import Auth from './components/auth'
import Account from './components/account'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import { HomePage } from "./pages/Home";

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <BrowserRouter>
    
   

    <div className="container" style={{ padding: '50px 0 100px 0' }}>
    <Routes>
    <Route path='/' element={!session ? <Auth /> : <HomePage/>}/>
    <Route path='/perfil' element={!session ? <Auth /> : <Account key={session.user.id} session={session} />} />
    </Routes>
    

      

    </div>

    </BrowserRouter>
  )
}
