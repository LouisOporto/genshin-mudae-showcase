// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import NoLoginRoutes from './utils/NoLoginRoutes';
// import PrivateRoutes from './utils/ProtectedRoutes';
// import Landing from './pages/landing';
// import Auth from './components/Auth';

import pb from "./components/pocketbase";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Auth from "./components/auth";
import User from "./components/user";
import Landing from "./pages/landing"

export default function App() {
  return (
    <>
      <Navbar />
      {!pb.authStore.isValid ? <Auth /> : <User />}
      <Landing />
      <About />
    </>
  );
}
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<NoLoginRoutes />}>
//           <Route exact path="/" element={<Landing />} />
//           <Route path="login" element={<Auth />} />
//           <Route path="logout" element={<Landing />} />
//         </Route>
//         <Route element={<PrivateRoutes />}>
//           <Route />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
