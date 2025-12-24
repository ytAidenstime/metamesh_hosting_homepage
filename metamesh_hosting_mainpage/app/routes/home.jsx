import "./home.css";

import Header from "../components/header/header";
import About from "../components/about/about";
import Products from "../components/products/products";
import Panel from "../components/our_panel/our_panel.jsx";
import Footer from "../components/footer/footer";

export function meta({}) {
  return [
    { title: "MetaMesh" },
    { name: "description", content: "MetaMesh Hosting Homepage" },
  ];
}

export default function Home() {
  return <div className="app">
    <Header />
    <About />
    <Products />
    <Panel />
    <Footer />
  </div>;
}
