import './App.css';
import GlassCard from './GlassCard';

function App() {
  return (
    <div className="App">
      <div className='big_box'>
        <h2>Some intresting box</h2>
        <div className='smaller_box'>
          <GlassCard />
          <div className='square'>
            2
          </div>
          <div className='square'>
            3
          </div>
        </div>
        <div className='lowerBox'>
          <button>Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
