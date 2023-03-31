import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Blogs from './component/Blogs/Blogs';
import Answers from './component/Questions/Answers';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Answers></Answers>
    </div>
  );
}

export default App;
