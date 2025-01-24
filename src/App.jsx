import './App.css'
import React from 'react'
import { Outlet} from 'react-router-dom'
import Nav from './components/Nav'
import { Provider } from '@/components/ui/provider'
import { Container, Stack } from '@chakra-ui/react'






function App() {

  return (
    <>
      <Provider>
        
          <Nav />
            <Stack spacing={4}>
              <Outlet />
            </Stack>

      </Provider>
    </>
  )
}




export default App
