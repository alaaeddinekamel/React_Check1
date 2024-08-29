import product from "../product"
import Card from 'react-bootstrap/Card';
const Description=()=>{
    return(
       
        <Card.Text>
        {product.description}
        </Card.Text>
    )
}

export default Description