import React, {useState, useEffect} from "react";
import axios from "axios";
import Stars from "./Stars.js";

const blankMovie = {
    title: '',
    director: '',
    metascore: '',
    stars: [],
  }

const UpdateForm = (props) =>{
    const [mov, setMov] = useState(blankMovie);


    console.log(props.List.movies, props.match.params.id)
    
    useEffect(()=>{
        const id=props.match.params.id;
        const movArr = props.List.movies.find(mov => `${mov.id}` === id);
        if (movArr) setMov(movArr);
    }, []);

    const changeHandler = e => {

        setMov({
            ...mov,
            [e.target.name]: e.target.value
        })
    }

    
    const handleSubmit = e =>{
        console.log("hi",mov)
        e.preventDefault();
        axios.
        put(`http://localhost:5000/api/movies/${mov.id}`, mov)
        .then(res =>{
            setMov(blankMovie)
            props.setList(res.data)
            props.history.push(`/`)
        })
        .catch(err => console.log(err.response))
    }

    console.log(mov.stars)


    return (
        <div>
            <h2>Update Item</h2>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    placeholder="title"
                    value={mov.title}
                />
                
        
                <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    placeholder="director"
                    value={mov.director}
                />
                
        
                <input
                    type="number"
                    name="metascore"
                    onChange={changeHandler}
                    placeholder="metascore"
                    value={mov.metascore}
                />
                
        
                
                {mov.stars.length >1 ? mov.stars.map((props) =>{
                    return(
                        <Stars props={props} changeHandler={changeHandler}/>
                    )

                }):
                    <Stars props={props} changeHandler={changeHandler}/>
                }
        
                <button >Update</button>
            </form>
      </div>
    )
}

export default UpdateForm; 