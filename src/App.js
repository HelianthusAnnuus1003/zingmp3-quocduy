import './App.css';
// useSelector - lay du lieu tu redux
// useDispatch - mang cac actions toi cho redux
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { ToastContainer } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css'

function App() {
  const {test} = useSelector(state => state.app);
console.log(test);
  return (
    <>
        <div className="App">
                  <h1 className="text-3xl font-bold underline">Hello World!</h1>
                </div>
                <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
    />
    </>
  );
}

export default App;
