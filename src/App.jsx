import { createContext, useState } from "react";

import Parent from "./Components/Parent";
import Formm from "./Components/Formm";
import Reducer from "./Components/Reducer";
import Form from "./Components/Form";

export const context_provider = createContext()

const App = () => {

  const [count, setCount] = useState(0)
  const value = { count, setCount }
  return (
    <context_provider.Provider value={value}>

      <div className="w-full h-screen flex justify-center items-center">
        {/* <Class1></Class1> */}
        {/* <Class2></Class2> */}
        {/* <Parent></Parent> */}
        {/* <Formm></Formm> */} 
        {/* <Reducer></Reducer>  */} 
        <Form></Form>
      </div>
    </context_provider.Provider>

  );
};

export default App;