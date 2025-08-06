import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hookdemo from './Hookdemo';
import Sum from './Sum';
import Sumdemo3 from './Sumdemo3';
import Week2 from './Week2'
import Sumdemo from './Sumdemo';
import Form1 from './Form1';
import Form2 from './Form2';
function App() {
  return (<>
    <h1>App</h1>
    <br/><br/><br/>
    <Router>
      <Link to='/Week2'>Home</Link>|
      <Link to='/Sum'>Sum</Link>|
      <Link to='/Hookdemo'>HookDemo</Link>|
      <Link to='/Sumdemo3'>Sum2</Link>|
      <Link to='/Sumdemo'>Sum3</Link>|
      <Link to='/Form1'>Form1</Link>|
      <Link to='/Form2'>Form2</Link>|
      <Routes>
        <Route path='/' element={<Week2 />} />
        <Route path='/Week2' element={<Week2 />} />|
        <Route path='/Sum' element={<Sum />} />
        <Route path='/Hookdemo' element={<Hookdemo />} />
        <Route path='/Sumdemo3' element={<Sumdemo3 />} />
        <Route path='/Sumdemo' element={<Sumdemo />} />
        <Route path='/Form1' element={<Form1 />} />
        <Route path='/Form2' element={<Form2 />} />
        <Route path='/cake/ahmedabad' element={<h1>Ahmedabad Cake </h1>} />
        <Route path='/cake/surat' element={<h1>Surat Cake</h1>} />
        <Route path='*' element={<h1>404 File Not Found</h1>} />
      </Routes>
    </Router>

  </>);
}

export default App;
