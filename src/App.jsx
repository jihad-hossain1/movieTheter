
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime, setWatchTime] = useState("")
  
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
    // console.log(previousWatchTime);
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem('watchTime', sum);
      setWatchTime(sum);
    } else {
      localStorage.setItem('watchTime', time);
      setWatchTime(time);
    }
  }

  return (
    <div>
      <div className="header-container py-6">
        <Header></Header>
      </div>
      <div className="grid md:grid-cols-[4fr,1fr] lg:grid-cols-[4fr,1fr] m-2">
        <div className="home-container">
        <Home handleWatchTime={handleWatchTime}></Home>
      </div>
      <div className="sideCart">
          <SideCart watchTime={watchTime}></SideCart>
          <ToastContainer></ToastContainer>
      </div>
      </div>
    </div>
  )
}

export default App
