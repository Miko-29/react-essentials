import './App.css'

function Welcome(){
  return <h2>Welcome, Muskan</h2>;
}

function Button(){
  return <button>Click Me</button>
}

function App() {
  return (
   <div>
    <h1>Codevolution React Course</h1>
    <Welcome/>    
    {/* component name Must be in CamelCase */}
    <Button/>
   </div>
  )
}

export default App
