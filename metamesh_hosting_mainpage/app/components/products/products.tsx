import "./products.css";


export default function Products() {
    return <div className="products" id="price">
        <div className="product">
            <h1>Discord Bot</h1>
            <img src="discord.png" alt="discord"/>
            <span className="price">$1.50</span>
            <a href="">Buy</a>
        </div>
        <div className="product">
            <h1>Minecraft</h1>
            <img src="https://img.icons8.com/?size=100&id=16478&format=png&color=000000" alt="discord"/>
            <span className="price">$6.99</span>
            <a href="">Buy</a>
        </div>
        <div className="product">
            <h1>VPS</h1>
            <img src="https://img.icons8.com/?size=100&id=Zf6mA5BR1U2Z&format=png&color=000000" alt="discord"/>
            <span className="price">$9.99</span>
            <a href="">Buy</a>
        </div>
    </div>
}