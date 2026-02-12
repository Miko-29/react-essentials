import './App.css'
import Welcome from './Welcome'
import Button from './button';
import {Hello, HelloWithoutJSX} from './Hello';
import { UserProfile } from "./UserProfile";
import { ContactForm } from './ContactForm';
import { StyledForm } from './StyledForm';
import { CandidateProfile } from './CandidateProfile';

function App() {
  return (
   <div>
    <CandidateProfile/>
    <StyledForm />
    <ContactForm/>
    <UserProfile />
    <Hello />
    <HelloWithoutJSX/>
    <Welcome/>    
    {/* component name Must be in CamelCase */}
    <Button/>
   </div>
  )
}

export default App
