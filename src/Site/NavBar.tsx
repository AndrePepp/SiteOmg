import { BrowserRouter as Router, Route, Routes, Navigate, Link, useNavigate } from 'react-router-dom';
import PeppPrlx from '../React/PeppParallax';
import TimelineDemo from './Achievements/TimelineDemo';
import Team from './Home/Team';
import RedirectCard from './Home/RedirectCard';
import Column from './Home/Column';
import TestFirewatch from '../React/TestFirewatch';
import Evenimente from './Evenimente/Evenimente';
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
                        <Link to="/events">Events</Link>
                        {/*<Link to="/testfirewatch"> TestFirewatch</Link>*/}
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={
                    <>
                    <TestFirewatch>
                    <Team/>
                    <Column/>
                    <RedirectCard/>
                    </TestFirewatch>
                    </>
                } />
                <Route path="/contact" element={<Button />} />
                <Route path="/achievements" element={<> <TimelineDemo/> <RedirectCard/> </>} />
                <Route path="/events" element={<> <Evenimente/> <RedirectCard/> </>} />
                {/*<Route path="/testfirewatch" element={<TestFirewatch/>} />*/}

            </Routes>
        </Router>
    );
}

export default NavBar;