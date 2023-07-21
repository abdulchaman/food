import React,{useState, useEffect} from 'react';
import {Link} from "react-router-dom";
const url = "http://3.17.216.66:4000/quicksearch";

const QuickSearch = () => {
    const [mealType, setMealType] = useState(null);
    useEffect(()=>{
        const getMealType = async()=>{
            try {
                let types = await fetch(url);
                types = await types.json();
                setMealType(types);
            } catch (error) {
                console.error("error",error);
            }
        };
        getMealType();
    },[])
    console.log(mealType);
    const handleMealType=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <Link to={`/listing/${item.mealtype_id}`} className='col-lg-4' key={item._id}>
                        <img src={item.meal_image} style={{width:300, height:300}}></img>
                        <h3>{item.mealtype}</h3>
                        <p>{item.content}</p>
                    </Link>
                )
            })
        }
    }
  return (
    <div className='row'>
        {handleMealType(mealType)}
    </div>
  )
}

export default QuickSearch;