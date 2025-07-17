import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegisterPage from './pages/LoginRegisterPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginRegisterPage mode="login" />} />
                <Route path="/register" element={<LoginRegisterPage mode="register" />} />
            </Routes>
        </Router>
    );
}

export default App;
