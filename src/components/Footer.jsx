const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row p-5">
                        <div className="col-md-4 loca">
                            <h3 className="text-white">LOCATION</h3>
                            <p className="text-white">2215 John Daniel Drive</p>
                            <p className="text-white">Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4 around">
                            <h3 className="text-white text-center ">AROUND THE WEB</h3>
                            <div className="icons d-flex gap-3 justify-content-center align-items-center pt-3">
                                <i className="fa-brands fa-facebook border border-1 text-white border-white p-2 fs-5 rounded-circle"></i>
                                <i className="fa-brands fa-linkedin-in border border-1 text-white border-white p-2 fs-5 rounded-circle"></i>
                                <i className="fa-brands fa-twitter border border-1 text-white border-white p-2 fs-5 rounded-circle"></i>
                                <i className="fa-solid fa-globe border border-1 text-white border-white p-2 fs-5 rounded-circle"></i>
                            </div>
                        </div>
                        <div className="col-md-4 aboutF">
                            <div className="aboutFreelancer">
                                <h3 className="text-white text-center">ABOUT FREELANCER</h3>
                                <p className="text-white text-center">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="footer p-5 d-flex justify-content-around align-items-center">
          <div className="location text-white">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="around">
            <h3 className="text-white text-center">AROUND THE WEB</h3>
            <div className="icons mt-4 d-flex gap-3 justify-content-center align-items-center">
              <i class="fa-brands fa-facebook border border-1 text-white border-white p-2 fs-5 rounded-circle"></i>
              <i class="fa-brands fa-linkedin-in border border-1 text-white border-white p-2 fs-5 rounded-circle"></i>
              <i class="fa-brands fa-twitter border border-1 text-white border-white p-2 fs-5 rounded-circle"></i>
              <i class="fa-solid fa-globe border border-1 text-white border-white p-2 fs-5 rounded-circle"></i>
            </div>
          </div>
          
        </div> */}
        </>
    );
}
export default Footer;

