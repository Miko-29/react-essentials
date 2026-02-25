import './App.css'
import Welcome from './Welcome'
import Button from './button';
import {Hello, HelloWithoutJSX} from './Hello';
import { UserProfile } from "./UserProfile";
import { ContactForm } from './ContactForm';
import { StyledForm } from './StyledForm';
import { CandidateProfile } from './CandidateProfile';
import {Product} from './Product';
import { Greeting } from './Greeting';
import { UserCard } from './UserCard';
import { CardWrapper } from './CardWrapper';
import { UserDetails } from './UserDetails';
import { ProductList } from './ProductList';
import { NameList } from './NameList';
import {Alert} from './Alert';

function App() {
  return (
   <div>
    <Alert>Your changes have been saved!</Alert>
    <Alert type="error">Something went wrong!</Alert>

    <NameList/>
      
    <ProductList/>

    <UserDetails 
      name="Bruce Wayne" 
      isOnline={true} 
      isPremium={true} 
      isNewUser={true}
      role="admin"
    />
    <UserDetails 
      name="Clark Kent" 
      isOnline={true} 
      hideOffline={true}
      role="vip"
    />

    <CardWrapper title="User Profile">
      <p>Bruce Wayne</p>
      <p>batman@jl.com</p>
      <button>Edit profile</button>
    </CardWrapper>

    <UserCard id={1} name="Bruce Wayne" age={30} city="Gotham" email="bruce@wayne.com"/>

    <Greeting name="Bruce" message="Good morning"/>
    <Greeting name="Clark"/>
    <Greeting message="Welcome"/>
    <Greeting/>

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
