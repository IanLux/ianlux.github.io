import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PortfolioPage from './pages/Portfolio';
import SkillsPage from './pages/Skills';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </main>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </Router>
  );
}

export default App;
