import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import PeppPrlx from '../React/PeppParallax';
import TimelineDemo from './Achievements/TimelineDemo';
import Team from './Home/Team';
import RedirectCard from './Home/RedirectCard';
import Column from './Home/Column';
import Button from './Contact/Button';

function NavBar() {
    return (
        <Router>
            <nav className="bg-red-950 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">Peppers 🌶</div>
                    <div className="space-x-4">
                        <Link to="/home">Home</Link>
                        <Link to="/achievements">Achievements</Link>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={
                    <>
                    <PeppPrlx/>
                    <Team/>
                    <Column/>
                    <RedirectCard/>
                    </>
                } />
                <Route path="/contact" element={<Button />} />
                <Route path="/achievements" element={<> <TimelineDemo/> <RedirectCard/> </>} />

            </Routes>
        </Router>
    );
}

export default NavBar;