import React from "react";

export default function ColorChange(){
    const colorsArray = ["Red","Blue","Green","Yellow","Orange","Brown"];
    const [index,setIndex]= React.useState(0);

    React.useEffect(()=>{
        const interval= setInterval(()=>{
            setIndex((prev)=>(prev+1) % (colorsArray.length))
        },2000);
        return ()=>clearInterval(interval);

    },[colorsArray.length])

    return(
    <div style={{backgroundColor: colorsArray[index], color: "whitesmoke"}}>
        <p>The Background color will Change for every 2 sec :{colorsArray[index]}</p>
    </div>
    )
}