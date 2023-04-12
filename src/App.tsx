import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './router/ScrollToTop';
import Home from './views/home/Home';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HelmetProvider>
        <Helmet>
          <title>anystuff.am</title>
        </Helmet>
      </HelmetProvider>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
