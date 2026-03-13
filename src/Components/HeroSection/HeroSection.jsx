
import {images} from "../../assets/images.js"
import styles from "./heroSection.module.css"
export default function HeroSection() {

  return (
    <>

           {/*/////// NavBar/////// */}
  <section className={`${styles.bgImage}  container-fluid overflow-hidden`}>
      <nav className="navbar navbar-expand-lg py-5 ">
  <div className="container-fluid">
   <img className="ms-5" src={images.logo} alt="logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <a className="nav-link fs-5" aria-current="page" href="#">Become a rintal</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link fs-5" href="#">Rinatal deals</a>
        </li>
       <li className="nav-item mx-3">
          <a className="nav-link fs-5" href="#">How it work</a>
        </li>
           <li className="nav-item mx-3">
          <a className="nav-link fs-5" href="#">Why choose us</a>
        </li>
      
      </ul>
      <div className="d-flex justify-content-between align-items-center gap-3 me-5" >
        <button className="btn border-0 btn-outline-primary fs-5" type="submit">Sign in</button>
        <button className="btn btn-primary fs-5" type="submit">Sign up</button>
      </div>
    </div>
  </div>
</nav>
         {/*/////// homeSection/////// */}
         <div className="row">
          <div  className="col-md-6 order-2 order-md-1 ">
            <div className={` w-50 p-2 mx-5  ${styles.titleBox} `}>
        <div className={` text-center  ${styles.text} `}>
          <h3 className="fs-1 fw-bold">
            Find, book and rent a car 
          </h3>
          <span className="text-primary fs-1 fw-bold">Easily</span>
          <p className="text-muted">Get a car wherever and whenever you need it with your IOS and Android device.</p>
        </div>
            </div>
          </div>
          <div  className="col-md-6 order-1 order-md-2 mt-5  px-0" >
           
             <img  className={`w-100 img-fluid ${styles.car}`} src={images.carHero} alt="carHero" />
           
          </div>
         </div>
  </section>
    </>
    
  )
}