import "./header.css";

export default function Header() {
    return <div className="header">
        <h2>MetaMesh</h2>
        <div className="links-center">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#price">Pricing</a>
        </div>
        <div className="end-wrapper">
            <a href="">Billing</a>
        </div>
    </div>
}