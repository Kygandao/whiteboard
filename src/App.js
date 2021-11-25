import './App.css';
import Whiteboard from './components/Whiteboard';

function App() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='w-5/6 h-5/6'>
        <Whiteboard/>
      </div>
    </div>
  );
}

export default App;
