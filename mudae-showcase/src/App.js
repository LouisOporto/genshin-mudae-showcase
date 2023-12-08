import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NoLoginRoutes from './utils/NoLoginRoutes';
import PrivateRoutes from './utils/ProtectedRoutes';
import Landing from './pages/landing';
import Auth from './components/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<NoLoginRoutes />}>
          <Route path="home" element={<Landing />} />
          <Route path="login" element={<Auth />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;