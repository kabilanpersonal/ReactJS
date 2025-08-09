import React from "react";

export default function ConditionalRendering({status}){
    let message;
    switch(status){
        case 'Pending':
            message = "The status is in Pending State";
            break;
        case 'Fulfilled':
            message= "The status is in Fulfilled State";
            break;
        case 'Resolved':
            message= "The status is in Resolved State";
            break;
        default:
            message= "The status is in unknown state";
            break;
    }

    return(
        <>
        <h3>Conditional Rendering</h3>
        <p>{message}</p>
        </>
    )

}