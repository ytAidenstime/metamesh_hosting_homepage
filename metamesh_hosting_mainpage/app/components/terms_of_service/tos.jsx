import "./tos.css";

export default function TOS({ title, info, rules }) {
    return <div className="tos-wrapper">
        <div className="text">
            <h1>{title}</h1>
            {info}
        </div>
        <div className="tos-container">
            {rules.map((rule, index) => {
                return <p key={index}>{rule}</p>
            })}
        </div>
    </div>
}