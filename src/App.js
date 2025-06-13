import logo from './logo.svg';
import './App.css';
import Greet from './Greet';

function App() {
    const myName = 'Julian';
    const school = 'code Academy';
    const address = 'Bukoto';
    
    const secondName = 'Musiimenta';
    const secondSchool = 'Julian high school';
    const secondAddress = 'Kagadi';

    const thirdName = 'Fatimah';
    const thirdSchool = 'Fatimah School';
    const thirdAddress = 'Kampala';


    return (
    <div className="App">
     
     <h1>Hello, Welcome Here</h1>
      <Greet name ={myName} age={23} school={school} address={address} />
      <Greet name ={secondName} age={20} school={secondSchool} address={secondAddress} />
      <Greet name ={thirdName} age={18} school={thirdSchool} address={thirdAddress} />
   </div>
  );
}

export default App;
// This is the main App component that renders the Greet component with different props
// It imports the Greet component and passes different names, ages, schools, and addresses as props
