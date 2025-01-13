import { createRoot } from 'react-dom/client';
 // Correct import
import './index.css';
import TimelineDemo from './Site/Achievements/TimelineDemo';
import RedirectCard from './Site/Home/RedirectCard';
import NavBar from './Site/NavBar';

createRoot(document.getElementById('root')!).render(
  <>
   
    <NavBar />

  </>
);