import login from './pages/login/login';
import { Route, Routes } from "react-router-dom";
import Loading from "./pages/login/loading";
import main_page from './pages/main_page/main_page';

function App() {
  return <Routes>
      <Route path="/" element={login()}></Route>
      <Route path="/loading" element={<Loading />}></Route>
      <Route path="/main_page" element={main_page()}></Route>
  </Routes>
}

export default App;
