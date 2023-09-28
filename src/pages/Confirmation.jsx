import React from "react"
import { useNavigate } from "react-router-dom"


export default function Confirmation() {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h4 className="title">Your order has been placed. Thanks for shopping with us!</h4>
                <button className="btnBack" onClick={() =>{navigate('/')}}>Back</button>

            </div>
        </>
    )
}