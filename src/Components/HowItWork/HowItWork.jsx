import { images } from '../../assets/images.js'
import styles from'./HowItWork.module.css'
export default function HowItWork() {
const brands=[images.jaguar,images.nissan,images.audi,images.volve]

  return (
    <>
     <section className= 'py-5 text-center'>

      <div className="container">
        <span className=" p-2  text-primary fw-normal   fs-6 bg-primary-subtle  text-uppercase   border rounded-2 border-1 border-secondary-subtle"
        >
          HOW IT WORK
        </span>

        <h2 className="fw-bold mt-4 mb-5">
          Rent With Following 3 Working Steps
        </h2>

        <div className="row gy-4 mb-5">

          {/* Step 1 */}
          <div className="col-md-4">
            <div className={`${styles.iconBox} mx-auto mb-3`}>
              <i className="fa-solid fa-car-side"></i>
            </div>
            <h4>Choose location</h4>
            <p className="text-muted">
              Choose your and find your best car
            </p>
          </div>

          {/* Step 2 */}
          <div className="col-md-4">
            <div className={`${styles.iconBox} mx-auto mb-3`}>
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h4>Pick-up date</h4>
            <p className="text-muted">
              Select your pick up date and time to book your car
            </p>
          </div>

          {/* Step 3 */}
          <div className="col-md-4">
            <div className={`${styles.iconBox} mx-auto mb-3`}>
              <i className="fa-solid fa-car"></i>
            </div>
            <h4>Book your car</h4>
            <p className="text-muted">
              Book your car and we will deliver it directly to you
            </p>
          </div>

        </div>
      </div>

      {/* Brands Slider */}
      <div className={`${styles.brandsWrapper}`}>
        <div className={`${styles.brandsTrack}`}>
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <img key={index} src={brand} alt="brand" />
          ))}
        </div>
      </div>

    </section>
    
    
    </>
  )
}
