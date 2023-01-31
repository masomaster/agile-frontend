import "./App.css";
import { auth } from "./services/firebase";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return () => {
      unsubscribe();
    };
  }, []); 

  return (
    // Ternary conditional to choose what to render based on if user is logged in or not
    // {user ? [path if user is logged in] : [path if user is not logged in]}
    <div className="App">
      <p>Hello World</p>
    </div>
  );
  }

export default App;
