import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Departments from './pages/Departments'
import Events from './pages/Events'
import Admin from './pages/Admin'

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-dark text-white">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/departments" element={<Departments />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App