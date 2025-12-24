import "./footer.css";

export default function Footer() {
    return <div className="footer-wrapper">
        <div className="top-wrapper">
            <img src="logo.png" alt="Logo"/>
            <span>@ 2025 Copyright by MetaMesh.ca and Aiden Smith</span>
        </div>
        <div className="middle-content">
            <span>Socials</span>
            <a href="https://discord.gg/s3ABvC2hjp" target="_blank">Discord</a>
        </div>
        <div className="end-content">
            <span>Legal</span>
            <a href="/tos">Terms of Service</a>
            <a href="/aup">Acceptable Use Policy</a>
        </div>
    </div>
}