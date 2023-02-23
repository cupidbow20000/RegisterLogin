import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
const Home = (props) => {
  const [color, setColor] = useState("red");
    
  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button type="button"
        onClick={() => setColor("blue")}>One</Button>
      <Button type="button"
        onClick={() => setColor("red")}>Two</Button>
      <Button type="button"
        onClick={() => setColor("pink")}>Three</Button>
        <Button type="button"
        onClick={() => setColor("green")}>Green</Button>
    </ButtonGroup>
      
      
    </div>
  );
  };
  
  export default Home;