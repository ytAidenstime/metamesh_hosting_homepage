import "./about.css";

import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export default function About() {
    return <div className="about">
        <h1>Who are we?</h1>
        <p>
                We are a hosting comapny that provides: Shared Game Hosting, VPS Hosting, and WebHosting!
                at a great price.
        </p>
        <div className="icons">
            <SportsEsportsOutlinedIcon className="icon" />
            <DnsOutlinedIcon className="icon" />
            <LanguageOutlinedIcon className="icon" />
        </div>
        <a href="">Order Now</a>
    </div>
}