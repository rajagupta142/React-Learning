
function Card(props){
    return (
        <div className="cards">
            <img src="https://img.tatacliq.com/images/i27//437Wx649H/MP000000028370418_437Wx649H_202509172056581.jpeg"
               style={{
                height:"200px",
                width:"100%",
                borderRadius:"6px",
                objectFit:"contain"
               }}/>
            <div >
            <h3>{props.cloth}</h3>
            <h3>{props.offer}</h3>
            <h3>Price:{props.price}</h3>
            <h3>Shop Now</h3>
            </div>
        </div>
       )
    }

    export default Card;