import './App.css'
import Welcome from './Welcome'
import Button from './button';
import {Hello, HelloWithoutJSX} from './Hello';
import { UserProfile } from "./UserProfile";
import { ContactForm } from './ContactForm';
import { StyledForm } from './StyledForm';
import { CandidateProfile } from './CandidateProfile';
import {Product} from './Product';

function App() {
  return (
   <div>
    <Product 
      title="Gaming Laptop" 
      price={1299.99} 
      inStock={true} 
      categories={["Electronics", "Computer", "Gaming"]}
    />
    {/* string gets passes in quotes "", rest all number, boolean, array, functions get passes in curly braces{} */}
    <Welcome name="Bruce" alias="Batman"/>    
    <Welcome name="Clark" alias="Superman"/>    
    <Welcome name="Diana" alias="Wonder Woman"/>    

    <CandidateProfile/>
    <StyledForm />
    <ContactForm/>
    <UserProfile />
    <Hello />
    <HelloWithoutJSX/>
    {/* component name Must be in CamelCase */}
    <Button/>
   </div>
  )
}

export default App
