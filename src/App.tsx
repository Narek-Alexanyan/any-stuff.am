import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '@/locale/i18n';
import { RootState } from './store';

import ScrollToTop from './router/ScrollToTop';
import Home from './views/home/Home';
import { Theme } from './application/enums/shared/Theme';

function App() {
  const theme = useSelector<RootState>((state) => state.theme.value);

  useEffect(() => {
    const htmlClasses = document.querySelector('html')?.classList;

    if (theme === Theme.LIGHT) {
      htmlClasses?.remove('dark');
    } else {
      htmlClasses?.add('dark');
    }
  }, [theme]);

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
