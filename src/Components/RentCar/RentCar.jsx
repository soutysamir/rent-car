
import styles from './rentCar.module.css'
import {images} from "../../assets/images.js"
export default function RentCar() {
  return (
    <>   
<div className="container">
  <div className="row">
        <div className={`d-flex justify-content-around align-items-end ${styles.phoneView} `}>
            <div className={` ${styles.bgImg}  my-md-5 mt-3 pt-md-5`}>
                <h3>Download Rentcars App for <span className='text-primary text-uppercase'>FREE</span></h3>
                <p>For faster, easier booking and exclusive deals.</p>
                <div className='pb-3'>
                    <img className='me-3' src={images.android} alt="android" />
                    <img src={images.IOS}alt="ios" />
                </div>
            <div >
           {/*//////// Name////////*/}
        <div className=" mb-3">
        <input 
          type="text" 
          className={`form-control ${styles.customForm} `}
          id="floatingInput" 
          placeholder="Name" />
      </div>
      {/*/////// Phone////////*/}
    <div className=" mb-3">
        <input 
          type="tel" 
          className={`form-control ${styles.customForm}`}
          id="floatingInput" 
          placeholder="Phone Number"
         
        />
      </div>
      {/*//////// Email/////////*/}
      <div className=" mb-3">
        <input 
          type="email" 
          className={`form-control ${styles.customForm} `}
          id="floatingPassword" 
          placeholder="Email"     
        />
      </div>
      <div className='text-center'>
        <button className="btn btn-primary ms-5 mb-3">submit</button></div>
    </div>
                </div>
    <div className=" d-flex justify-content-center align-items-end mb-0 ">
      <img className={`${styles.wIphone} `} src={images.iPhone} alt="iphone" />
            </div>
                </div>
            </div>
        </div>
    </>
  )
}
