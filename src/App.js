import logo from './logo.svg';
import './App.css';
import AddUsdata from './components/AddUsdata';
import SearchUsdata from './components/SearchUsdata';
import DeleteUsdata from './components/DeleteUsdata';
import ViewUsdata from './components/ViewUsdata';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddUsdata/>}/>
    <Route path='/search' element={<SearchUsdata/>}/>
    <Route path='/delete' element={<DeleteUsdata/>}/>
    <Route path='/view' element={<ViewUsdata/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
