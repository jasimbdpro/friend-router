import { Link, Route, HashRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {

  return (

    <HashRouter>
      <Link to='/'>Go Home</Link>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/home' element={<Home></Home>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route exact path='*' element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
