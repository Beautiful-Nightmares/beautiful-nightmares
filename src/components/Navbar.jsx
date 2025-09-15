import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm h-4rem">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">Beautiful Nightmares</Link>
                </div>
                
                {/* 
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Stories">Stories</Link></li>
                            <li><Link to="/Photos">Photo Library</Link></li>
                            <li><Link to="/Audio">Audio Tracks</Link></li>                    
                        </ul>
                    </div>
                */}
            </div>
        </>
    )
}