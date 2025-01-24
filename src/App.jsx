import './App.css'
import React from 'react'
import { Outlet} from 'react-router-dom'
import Nav from './components/Nav'
import { Provider } from '@/components/ui/provider'






function App() {

  return (
    <>
      <Provider>
        
          <Nav />
          <Outlet />
        
      </Provider>
    </>
  )
}




export default App
