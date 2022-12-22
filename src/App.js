import './App.css';
import './components/calculator.css'

function App() {
  const handleBtnClick = (e) => {
    console.log(e);
  }
  return (
    <div className="App flex h-screen justify-center items-center flex-col">
      <h4 className=' text-xl font-bold my-2 '>Calculator</h4>
      <div className=' relative calculator-body w-5/6 md:w-1/4 h-4/5 border-2 border-purple-900 rounded-lg mx-auto '>
        <div>
          <p id='result' className=' text-white font-bold text-2xl'>Calculator Text</p>
        </div>
        <div className=' absolute w-5/6  bottom-6 left-4 right-4 grid grid-cols-4 gap-2 gap-y-3 mx-3  '>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-orange-500 font-bold bg-gray-600 rounded-lg py-2'>AC</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("X") } } className=' text-orange-500 font-extrabold bg-purple-600 rounded-lg py-2'>X</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("%") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>%</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>/</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>7</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>8</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>9</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>*</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>4</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>5</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>6</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>-</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>1</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>2</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>3</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>+</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>0</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold bg-purple-600 rounded-lg py-2'>.</div>
          <div style={ { cursor: "pointer" } } onClick={ () => { handleBtnClick("AC") } } className=' text-white font-bold rounded-lg py-2 col-span-2 bg-orange-500'>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
