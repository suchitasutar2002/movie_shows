import './App.css';
import ShowList from './components/ShowList';
import BookingForm from './components/BookingForm';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  
  return (
    <div className="App">
       <div className='left_box'>
       <ShowList  data={data}/>
       </div>
       <div className='right_box'>
          <h2>Details</h2>
          <BookingForm />
       </div>
      
    </div>
    
  );
}

export default App;
