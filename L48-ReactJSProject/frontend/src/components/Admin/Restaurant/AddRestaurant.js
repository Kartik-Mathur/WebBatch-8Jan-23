import axios from 'axios';
import React, { useRef } from 'react'
const BASE_URL = 'http://localhost:4444';

const AddRestaurant = () => {
    const nameRef = useRef();
    const locationRef = useRef();
    const imageRef = useRef();

    const formSubmitHandler = async (ev) => {
        ev.preventDefault();

        const name = nameRef.current.value;
        const location = locationRef.current.value;
        const image = imageRef.current.value;

        if (name.trim().length == 0 || location.trim().length == 0 || image.trim().length == 0) {
            alert('Please Enter correct details of restaurant');
        }
        else {
            try {
                let data = await axios.post(BASE_URL + '/admin/add-restaurant', {
                    name,
                    location,
                    image
                });

                console.log(data);
                alert(data.message);
                name.current.value = "";
                location.current.value = "";
                image.current.value = "";
            } catch (err) {
                alert(err.message);
            }

        }

    }
    return (
        <div>
            <h1 className='text-center'>Add Restaurant</h1>

            <form onSubmit={formSubmitHandler} className='w-75 m-auto'>
                <input className='w-100 my-10' type='text' ref={nameRef} placeholder='Enter Restaurant Name' /><br />
                <input className='w-100 my-10' type='text' ref={imageRef} placeholder='Enter Restaurant Image' /><br />
                <input className='w-100 my-10' type='text' ref={locationRef} placeholder='Enter Restaurant Location' /><br />
                <button type='submit'>Add Restaurant</button>
            </form>

        </div>
    )
}

export default AddRestaurant