import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { UserDashboard } from './UserDashboard'
import { SimpleCounter } from './SimpleCounter'
import { PrevStateCounter } from './PrevStateCounter'
import { BatchingCounter } from './BatchingCounter'

function App() {
  return (
    <>
      <h1>Codevolution React Course</h1>
      {/* <Counter />
      <Counter />
      <LoginCard/>
      <UserDashboard isPremium={true}/> */}

      {/* <SimpleCounter/> */}
      {/* <PrevStateCounter /> */}
      <BatchingCounter />
    </>
  )
}

export default App
