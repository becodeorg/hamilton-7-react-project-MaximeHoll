import './index.css'


function App() {
  
  return (
    <div className="App bg-slate-400 h-screen w-screen flex flex-col align-center content-center">
     <div className="border-black bg-white border-3 flex h-1/6 w-4/5 ml-auto mr-auto mt-auto mb-auto">
        <div className='w-3/4 text-6xl text-center pt-12'>
          12:32
        </div>
        <div className='flex flex-col w-1/4 bg-slate-300'>
          <button className='h-1/4 border-black border-2'>+</button>
          <button className='h-1/4 border-black border-2'>play</button>
          <button className='h-1/4 border-black border-2'>reset</button>
          <button className='h-1/4 border-black border-2'>-</button>
        </div>
     </div>
    </div>
  )
}

export default App
