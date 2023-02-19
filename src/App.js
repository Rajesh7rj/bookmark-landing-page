
import {Navbar}  from './components/navbar';
import Home from "./components/home"
import './index.css';
import Features from './components/features';
import Download from './components/download';
import QnA from './components/qna';
import Footer from './components/footer';


function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Home style={{backgroundColor: "pink"}} />
      <Features/>
      <Download/>
      <QnA /> 
      <Footer/>
    </div>
  );
}

export default App;
