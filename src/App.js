import './App.css';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStateProvider } from "./utils/GlobalStateProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <GlobalStateProvider>
              <ToastContainer />
              <Sidebar />
            <Routes>
              <Route path='/' element={<Content />} />
              <Route path='/project/:projectId' element={<Content />} />
            </Routes>
          </GlobalStateProvider>
      </BrowserRouter>
    </div>
  );
}