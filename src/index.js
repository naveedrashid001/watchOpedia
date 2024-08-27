
import ReactDOM from 'react-dom/client';
import "./css/style.css"

import Header from './Layout/header';
import Counter from './Counter';
import MoviePage from './MovieComponent/MoviePage';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<div style={{backgroundColor:"black", color:"gray"}}>
  <Header/>
  <div className='p-4 row  text-center'> 
  <Counter />
  <MoviePage />
  </div>
 
</div>)