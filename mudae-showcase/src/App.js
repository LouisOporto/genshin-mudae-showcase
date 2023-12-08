import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NoLoginRoutes from './utils/NoLoginRoutes';
import PrivateRoutes from './utils/ProtectedRoutes';
import Landing from './pages/landing';
import Auth from './components/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NoLoginRoutes />}>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Auth />} />
        </Route>
        <Route element={<PrivateRoutes />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;