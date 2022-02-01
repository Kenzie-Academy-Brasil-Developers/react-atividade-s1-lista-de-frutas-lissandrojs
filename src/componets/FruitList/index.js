import './style.css'
const FruitList =({frutas})=>( 
        frutas.map((fruit,index)=>(<div key={index} className="fruit" >{fruit.name}</div>)) 
    )


export default FruitList