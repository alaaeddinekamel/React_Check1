import './App.css';
import Description from './Compenents/Description';
import Image from './Compenents/Image';
import Name from './Compenents/Name';
import Price from './Compenents/Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
   
    <Card style={{ width: '18rem' }}>
    <Image/>
      <Card.Body>
      <Name/>
      
      <Description/>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
  
  );
}

export default App;

