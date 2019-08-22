import React from "react";


const Stars = (props) =>{


    return (
        <div>
                    
        <input
            type="text"
            name="stars"
            onChange={props.changeHandler}
            placeholder="stars"
            value={props.props}
        />
        
      </div>
    )
}

export default Stars; 