import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';
// import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <About />
        <Skills />
        <Showcase />
        {/*<Resume />*/}
      </div>
      <Footer />
    </div>

  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//   <div class="header">
//     <header>
//       <h1 class="title">Cathy's Portfolio</h1>
//     </header>
//   </div>
