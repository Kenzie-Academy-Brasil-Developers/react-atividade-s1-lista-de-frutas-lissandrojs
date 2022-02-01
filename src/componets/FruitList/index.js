import './style.css'
const FruitList =({frutas})=>( 
        frutas.map((fruit,index)=>(<div className="fruit">{fruit.name}</div>)) 
    )


export default FruitList