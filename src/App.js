import './App.css';
import logo from './images/logo.png'
import Navbar from './navbar/Navbar';


function App() {
  return (
    <div className="w-full h-[80px] flex items-center justify-between mx-auto px-[8px] sm:px-[30px] bg-[#A40047]">
      <div className='flex items-center'>
        <img src={logo} className='w-[80px] sm:w-[100px]'/>
        <h1 className='text-white font-bold text-[28px] sm:text-[32px]'> Barca </h1>
      </div>
      <Navbar/>
    </div>
  );
}

export default App;
