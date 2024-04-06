import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../action/action2';

function Display() {
    const { loading , error, data} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPost())
    },[])
  return (
    <div>
        <h1>display post</h1>
       {
        loading && <div>...Loading</div>
       }
       {
        error && <div> {error}</div>
       }
       {
        data && data.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <img src={post.image} alt='image'/>
            </div>
        ))
       }
    </div>
  )
}

export default Display