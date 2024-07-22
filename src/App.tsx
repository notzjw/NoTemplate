import { Routes, Route } from 'react-router-dom'
import { useMock } from './lib/mock';

function App() {
  useMock()
  return (
    <div className="App w-screen h-screen bg-black text-white" >
      {/* <Routes>
        <Route path="/" element={<Start />} />
      </Routes> */}
    </div>
  );
}

export default App;
