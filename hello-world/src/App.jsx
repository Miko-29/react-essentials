import './App.css'
import Welcome from './Welcome'
import Button from './button';
import {Hello, HelloWithoutJSX} from './Hello';

function App() {
  return (
   <div>
    <Hello />
    <HelloWithoutJSX/>
    <Welcome/>    
    {/* component name Must be in CamelCase */}
    <Button/>
   </div>
  )
}

export default App
