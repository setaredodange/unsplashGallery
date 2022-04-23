import React, {useEffect, useState} from "react";
import axios from "axios";
import "./List.css"

const List = ({clickHandler}) =>{
    const [imagesList,setImagesList] = useState()
    const token = "18cdQgiBHLtVpO-kej_vJsXe9yjcUo_TmeguKpaGEjI"
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get(`https://api.unsplash.com/photos/?page=1&client_id=${token}`)
            .then(res=>{
                setImagesList(res.data)
                clickHandler(res.data[0])
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
    },[])

    return(
        loading ?
            <h1>Loading ... </h1>
            :
        <div className={`list-container`}>
            {imagesList?.map((item,index)=>(
                <div key={index} onClick={()=>clickHandler(item)}>
                    <img src={item?.urls?.thumb} alt=""/>
                    <span>@{item?.user?.username}</span>
                </div>
            ))}
        </div>
    )
}

export default List