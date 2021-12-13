import './heroes.css';



function Flowers(props) {


    return (
        <>
            <div className="flowers-cart">
                <img src={props.url} alt="" />

                <div className="flowers-name">{props.name}</div>
                <div className="flowers-size">{props.size}</div>
                <div className="flowers-text">{props.text}</div>
            </div>

        </>
    )
}

export default Flowers;