import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}> </Route>
          <Route path="/books/:id" element={<BookDetailPage/>}></Route>
          <Route path="/auth/login" element={<LoginPage/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
      </Router>
  );
}
export default App;