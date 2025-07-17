import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegisterPage from './pages/LoginRegisterPage';
import OtpPage from './pages/OtpPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginRegisterPage mode="login" />} />
                <Route path="/register" element={<LoginRegisterPage mode="register" />} />
                <Route path="/otp" element={<OtpPage />} />
            </Routes>
        </Router>
    );
}

export default App;
