import React from "react";
import "./index.css";




const Zako = ({ dur = 20, color = 'red', size = "15px", text = " 杂鱼~♡ 杂鱼~♡" }) => {
    return (
        <p className="zako" style={{ animationDuration: `${dur}s`, color: color, fontSize: size }} >
            {text}
        </p>
    )
}

export default Zako;