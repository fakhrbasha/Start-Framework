import myImg from "../assets/img/img.svg"

const Home = () => {
    return (
      <>
        <div className="homePage  d-flex justify-content-center align-items-center flex-column">
          <div className="img">
            <img className="w-100" src={myImg} alt="" />
          </div>
          <div className="content pt-3 d-flex flex-column align-items-center">
            <h2 className="fw-bold fs-1 text-white">START FRAMEWORK</h2>
            <div className="lines pt-3 d-flex justify-content-center align-items-center">
              <div className="line me-3"></div>
              <i class="fa-solid fa-star text-white"></i>
              <div className="line me-3"></div>
            </div>
            <p className="text-white pt-4">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </>
    );
}
export default Home;