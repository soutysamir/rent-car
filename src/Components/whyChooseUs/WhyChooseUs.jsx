import { images } from '../../assets/images.js'
import styles from './whychooseus.module.css'
export default function WhyChooseUs() {
  return (
    <>
  <div className="container-fluid mb-3">
      <div className="row">
        <div className={`col-md-6 ${styles.bgImage} ps-0 `}>
         <div >
            <img className={`${styles.top} `} src={images.audi1} alt="car1" />
         </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
        <span className=" p-2   text-primary fw-normal  fs-6 bg-primary-subtle  text-uppercase   border rounded-2 border-1 border-secondary-subtle">
          why choose us
        </span>
        <h2 className='fw-semibold mt-3 text-capitalize '>We offer the best experience with our rental deals</h2>
          <div className="row">
            <div className="col">
                <div className='d-flex justify-content-start align-items-center flex-row mt-5 '>
                    <img src={images.user} alt="userImg" />
                    <div className='mx-4'>
                        <h6 className='fs-4 fs-md-6 my-0'>Best price guaranteed</h6>
                        <p className='text-muted'>Find a lower price? We’ll refund you 100% of the difference.</p>
                    </div>
                </div>
                 <div className='d-flex justify-content-start align-items-center flex-row mt-5 '>
                    <img src={images.user} alt="userImg" />
                    <div className='mx-4'>
                        <h6 className='fs-4 fs-md-6 my-0'>24 hour car delivery</h6>
                        <p className='text-muted'>Book your car anytime and we will deliver it directly to you.</p>
                    </div>
                </div>
                 <div className='d-flex justify-content-start align-items-center flex-row mt-5 '>
                    <img src={images.message} alt="messageImg" />
                    <div className='mx-4'>
                        <h6 className='fs-4 fs-md-6 my-0'>Best price guaranteed</h6>
                        <p className='text-muted'>Find a lower price? We’ll refund you 100% of the difference.</p>
                    </div>
                </div>
                 <div className='d-flex justify-content-start align-items-center flex-row mt-5 '>
                    <img src={images.chat} alt="chatImg" />
                    <div className='mx-4'>
                        <h6 className='fs-4 fs-md-6 my-0'>24/7 technical support</h6>
                        <p className='text-muted'>Have a question? Contact Rentcars support any time when you have problem.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  </div>
    
    </>


  )
}
