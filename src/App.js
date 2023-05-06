import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS
import Navbar from './Components/navbars/navbar'; // import custom Navbar component
import Routers from './Components/Routes/routes'; // import custom Routes component

const App = () => {
  return (
    <div>
      <Navbar /> {/* render Navbar component */}
      <Routers /> {/* render Routes component */}
    </div>
  );
};

export default App;
