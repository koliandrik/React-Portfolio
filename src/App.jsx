import './App.css'
import React from 'react'
import { Outlet} from 'react-router-dom'
import Nav from './components/Nav'
import { Provider } from '@/components/ui/provider'
import { Container, Stack } from '@chakra-ui/react'
import ShaderBackground from './components/ShaderBackground'



function App() {

  return (
    <>
    <ShaderBackground />
      <Provider>
        
          <Nav />
            <Container maxW="container.xl" mt={10}>
              <Outlet />
            </Container>

      </Provider>
    </>
  )
}




export default App
