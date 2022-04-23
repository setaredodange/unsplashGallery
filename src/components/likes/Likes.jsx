import Heart from "../../images/heart.png"
import "./Likes.css"

const Likes = ({data}) =>{
    return(
        <div className={`likes-container`}>
            <img className={`like-icon`} src={Heart} alt=""/>
            {data}
        </div>
    )
}

export default Likes