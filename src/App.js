import './App.css';
import React,{Suspense} from 'react'
import {Loader} from './components'
const Home = React.lazy(() => import('./pages/home'))


function App() {

  return (
    <Suspense fallback={<Loader/>}>
      <Home/>
    </Suspense>
    
  );
}

export default App;
