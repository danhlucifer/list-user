import React, { useState } from 'react';
import Navbar from "../Navbar";

function User() {
    const [user, setUser] = useState({
        name: '',
        checked: [],
        number: '',
        radio: '',
        address: '',
    });

    const [name, setName] = useState('');
    const [checked, setChecked] = useState([]);
    const checkList = ['Reactjs', 'Vuejs', 'Angularjs'];
    const [radio, setRadio] = useState('');
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleCheck = (event) => {
        var checkList = [...checked];
        if (event.target.checked) {
            checkList = [...checked, event.target.value];
        } else {
            checkList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(checkList);
        console.log(checkList);
    }

    const handleRadio = (event) => {
        setRadio(event.target.value);
    }
    const handleNumber = (e) => {
        setNumber(e.target.value);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            name: name,
            checked: checked,
            radio: radio,
            number: number,
            address: address
        })
    }
    return (
        <>
            <Navbar title='User Form' />
            <div className='container-user'>
                <h1>Form Get Info User</h1>
                <div className='user-form-title'>
                    <div className='user-form'>
                        <form action="" onSubmit={handleSubmit}>
                            <div className='user_name'>
                                <label htmlFor="">Full Name:</label>
                                <input type="text" onChange={(e) => handleChangeName(e)} />
                            </div>
                            <div className='user_gender'>
                                <label htmlFor="">Gender</label>
                                <div className='user_gender_title'>
                                    <label htmlFor="">Male <input type="radio" name='gender' value='Male' onChange={handleRadio} /></label>
                                    <label htmlFor="" style={{ marginLeft: 8, marginRight: 8 }}>Female <input type="radio" name='gender' value='Female' onChange={handleRadio} /></label>
                                    <label htmlFor="">Other <input type="radio" name='gender' value='Other' onChange={handleRadio} /></label>
                                </div>
                            </div>
                            <div className='user_number'>
                                <label htmlFor="">Phone Number:</label>
                                <input type="text" onChange={(e) => handleNumber(e)} />
                            </div>
                            <div className='user_address'>
                                <label htmlFor="">Address:</label>
                                <input type="text" onChange={(e) => handleAddress(e)} />
                            </div>

                            <div className='user_languages'>
                                <p>Languages:</p>
                                {checkList.map((item, index) => (
                                    <div key={index} >
                                        <div className="languages">
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span>{item}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='user-form-button'><button type='submit' className='btn btn-success '>Submit</button></div>
                        </form>
                    </div>

                    <div className='user-print'>
                        <div className='user-print-title'>
                            <div className='user-print-title-header'>
                            <h1>Print Info User</h1>
                            </div>
                            <div className='user-print-title-list'>
                            <p>Name: <span>{user.name}</span></p>
                            <p>Gender: <span>{user.radio}</span></p>
                            <p>Phone Number: <span>{user.number}</span></p>
                            <p>Address: <span>{user.address}</span></p>
                            <p>Language: {user.checked.map((value, index) => (
                                <div key={index} className='box'>
                                    <span>{value}</span>
                                </div>
                            ))}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User