import { useState } from 'react';
import img1 from "../assets/img/port1.png"
import img2 from "../assets/img/port2.png"
import img3 from "../assets/img/port3.png"
const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState("");

    const handlePlusClick = (e) => {
        const imageContainer = e.target.closest('.image');
        const img = imageContainer.querySelector('img');
        setSelectedImage(img.src);
    };

    const closeModal = () => {
        setSelectedImage(""); 
    };

    return (
        <div>
            <div className="portfolio d-flex justify-content-center align-items-center flex-column">
                <h1>portfolio Component</h1>
                <div className="lines pt-3 d-flex justify-content-center align-items-center">
                <div className="line me-3" style={{ backgroundColor: 'black' }}></div>
                <i className="fa-solid fa-star text-dark"></i>
                <div className="line me-3" style={{ backgroundColor: 'black' }}></div>
            </div>
                <div className="imgs">
                    <div className="container">
                        <div className="row gy-3">
                            {[
                                img1,
                                img2,
                                img3,
                                img1,
                                img2,
                                img3,
                            ].map((src, index) => (
                                <div key={index} className="col-md-4 image position-relative">
                                    <img className="w-100 rounded-3" src={src} alt="" />
                                    <div className="plus position-absolute  d-flex justify-content-center align-items-center">
                                        <i
                                            className="fa-solid fa-plus text-white"
                                            onClick={handlePlusClick}
                                            style={{ cursor: "pointer" , fontSize:"5rem" }}
                                        ></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div
                    className="modal d-flex justify-content-center align-items-center"
                    onClick={closeModal}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        zIndex: 9999,
                    }}
                >
                    <img
                        src={selectedImage}
                        alt="Selected"
                        style={{
                            maxWidth: "60%",
                            maxHeight: "40%",
                            borderRadius: "10px",
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Portfolio;
