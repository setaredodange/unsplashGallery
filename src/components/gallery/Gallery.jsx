import List from "../list/List";
import Image from "../image/Image";
import {useState} from "react";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

/* todo
1- Fetch List
2- add user name
3- set As Background
4- styles
5- add likes
6- loading
 */


const Gallery = () =>{
    const [image,setImage] = useState()
    const [loading,setLoading] = useState(false)
    const clickHandler =(data)=>{
        setImage(data)
        setLoading(true)
    }
    return(
        <>
            <List clickHandler={clickHandler}/>
            <Image data={image} setLoading={setLoading}/>
            {loading && <LoadingIcon />}
        </>
    )
}

export default Gallery