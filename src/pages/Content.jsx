import React, { useState } from 'react';

export default function Content() {
    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const style = {
        outline: "none",
        boxShadow: "none",
        borderBottom: "1px solid black"
    };
    const styleUber = {
        position: 'absolute',
        top: '-10px',
        left: '10px',
        background: 'transparent',
        fontSize: '0.9rem',
        padding: '0 5px',
        color: ' rgb(45, 179, 148)',
        transition: '0.5s',
    }

    return (
        <div className="Content">
            <h1 className="text-center" style={{ fontSize: '3rem' }}>
                Content Section
            </h1>

            <div className="lines pt-3 d-flex justify-content-center align-items-center">
                <div className="line me-3" style={{ backgroundColor: 'black' }}></div>
                <i className="fa-solid fa-star text-dark"></i>
                <div className="line me-3" style={{ backgroundColor: 'black' }}></div>
            </div>

            <div className="contactInfo d-flex justify-content-center align-items-center flex-column">
                {/* Username input */}
                <div className="w-50 position-relative mb-3">
                    {username && (
                        <label htmlFor="user" style={styleUber}>
                            <p>Username</p>
                        </label>
                    )}
                    <input
                        type="text"
                        id="user"
                        className="form-control p-3 border-top-0 border-start-0 border-end-0"
                        placeholder="Enter Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={style}
                    />
                </div>

                {/* Other inputs */}
                <div className="w-50 position-relative mb-3">
                    {userAge && (
                        <label htmlFor="age" style={styleUber}>
                            <p>UserAge</p>
                        </label>
                    )}
                    <input
                        type="number"
                        id="age"
                        className="form-control p-3 border-top-0 border-start-0 border-end-0 mb-3"
                        placeholder="User Age"
                        style={style}
                        value={userAge}
                        onChange={(e) => [setUserAge(e.target.value)]}
                    />
                </div>

                <div className="w-50 position-relative mb-3">
                    {userEmail && (
                        <label htmlFor="email" style={styleUber}>
                            <p>UserEmail</p>
                        </label>
                    )}
                    <input
                    type="text" id='email'
                    className="form-control  p-3 border-top-0 border-start-0 border-end-0 mb-3"
                    placeholder="Enter Email"
                    style={style}
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                </div>
                <div className='w-50 position-relative mb-3'>
                    {userPassword && (
                        <label htmlFor='pass' style={styleUber} >
                            <p>UserPAssword</p>
                        </label>
                    )}
                    <input
                    type="password" id='pass'
                    className="form-control p-3 border-top-0 border-start-0 border-end-0 mb-3"
                    placeholder="Enter Password"
                    style={style}
                    value={userPassword}
                    onChange={(e) =>{ setUserPassword(e.target.value);}}
                />
                </div>

                <button className="btn-send mt-4">Send Message</button>
            </div>
        </div>
    );
}
