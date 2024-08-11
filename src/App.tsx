import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
//import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>It's an ALERT!</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Click Me
      </Button>
    </div>
    // let items = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    // const handleSelectItem = (item: string) => {
    //   console.log(item);
    // };
    // return (
    //   <div>
    //     <ListGroup
    //       items={items}
    //       heading="Cities"
    //       onSelectItem={handleSelectItem}
    //     />
    //   </div>
  );
}

export default App;
