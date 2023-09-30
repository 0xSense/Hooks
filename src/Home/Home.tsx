import { useState } from 'react';
import Banner from '../components/Banner/index';
import './Home.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
        <Banner />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="card"></div> 
   </div>
    </>
  );
};

export default App;
