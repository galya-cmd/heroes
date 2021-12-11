import './heroes.css';


function Flowers (props) {
    return(
        <>
        <div className="heroes-cart">
            <img src={props.url} alt=""/>
            <div className="heroes-name">{props.name}</div>
            <div className="heroes-text">{props.text}</div>
        </div>

        </>
    )
}

export default Flowers;