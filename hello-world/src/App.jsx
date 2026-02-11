import './App.css'
import Welcome from './Welcome'
import Button from './button';

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
