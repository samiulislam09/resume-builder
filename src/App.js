import './App.css';
import Hero from './components/Hero';
import Input from './components/Input';

function App() {
  return (
    <div className="App bg-white text-black">
      <Hero></Hero>
      <div className='text-center'>
        <p className='text-4xl font-bold my-5 font-serif'>Resume Builder</p>
      </div>
      <Input></Input>
    </div>
  );
}

export default App;
