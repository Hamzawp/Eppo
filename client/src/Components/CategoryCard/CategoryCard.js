import './CategoryCard.css'
import bank from './bank.png'

export default function CategoryCard(props){

    return(
        <div>
        <div className="carded">
            <img className="categoryicon" src={props.image} alt="" />
            <p className="categoryheading">{props.name}</p>
        </div>
        </div>
    )
}