import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Finder from './views/Finder.js';
import NotFound from './views/NotFound.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Finder />} />
          <Route path="/*" component={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
