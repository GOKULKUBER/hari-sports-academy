import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Sports from './pages/Sports';
import Events from './pages/Events';
import Registration from './pages/Registration';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Results from './pages/Results';
import Coaches from './pages/Coaches';
import Downloads from './pages/Downloads';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import Developer from './pages/Developer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sports" element={<Sports />} />
          <Route path="events" element={<Events />} />
          <Route path="registration" element={<Registration />} />
          <Route path="membership" element={<Membership />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news" element={<News />} />
          <Route path="results" element={<Results />} />
          <Route path="coaches" element={<Coaches />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="contact" element={<Contact />} />
          <Route path="developer" element={<Developer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
