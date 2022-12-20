import './App.css';
import './components/calculator.css'

function App() {
  return (
    <div className="App flex h-screen justify-center items-center flex-col">
      <h4 className=' text-xl font-bold my-2 '>Calculator</h4>
      <div className=' w-1/4 h-1/2 border-2 border-purple-900 rounded-lg mx-auto '>
        <input className='input-box  border border-purple-400 rounded-lg my-3 w-4/5 shadow-inner' type="number" name="" id="" />
        <div className=' grid grid-cols-3 gap-2 gap-y-3 mx-3  '>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>+</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>-</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>X</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>0</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>1</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>2</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>3</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>4</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>5</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>6</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>7</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>8</div>
          <div className=' text-white font-bold bg-purple-600 rounded-lg py-2'>9</div>
        </div>
      </div>
    </div>
  );
}

export default App;
