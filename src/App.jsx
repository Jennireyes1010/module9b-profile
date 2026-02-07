import React from "react";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",    
        height: "100vh",          
        backgroundColor: "#353535", 
      }}
    >
      <UserProfile />
    </div>
  );
}

export default App;
