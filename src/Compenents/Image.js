import product from "../product"
import Card from 'react-bootstrap/Card';

const Image=()=>{
    return(
        <Card.Img variant="top" src={product.url} />
    )
}

export default Image