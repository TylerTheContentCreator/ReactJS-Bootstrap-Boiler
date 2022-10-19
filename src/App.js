import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container container-fluid p-3">
        <h1 className='text-center text-primary'>Overriding Bootstrap in React</h1>
        <button className='btn btn-primary text-white me-2'>Primary Color</button>

        <button className='btn btn-secondary'>Secondary Color</button>

        <div className="row justify-content-center mt-3">
          <div className="col col-md-3 border border-primary rounded p-3">
            <p>Look at me, my border changed too!</p>
          </div>
        </div>

        <button className='btn btn-danger text-white mt-2'>I'm Bootstrap's Default Danger Color</button>

      </div>
    </div>
  );
}

export default App;
