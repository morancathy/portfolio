import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <About />
        <Skills />
        <Showcase />
      </div>
      <Footer />
    </div>

  );
}

export default App;
