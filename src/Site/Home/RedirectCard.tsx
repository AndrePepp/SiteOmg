import { useNavigate } from 'react-router';
import '../../Css/redirectCard.css'
import FireWatch from '../../React/FireWatch';
function RedirectCard() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(-1);
    };

    return (
        <>
        
                <div className="redirect-card">
            <div className="left-section">
                <div className='image-left section-img'></div>
            </div>
            <div className="center-section">
                <h3>Omg, you like us???</h3>
                <p>Click it to know more about us, bonitas.</p>
                <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">Click me! 🎀</button>
            </div>
            <div className="right-section">
               <div className='image-right section-img'></div>
            </div>
        </div>
        </>
    );
}

export default RedirectCard;
