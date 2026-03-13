import { images } from '../../assets/images.js'
import styles from './testimonials.module.css'



export default function Testimonials() {
    const testimonials = [
  {
    id: 1,
    img: images.girl,
  },
  {
    id: 2,
    img: images.rectangle,
  },
];
    const sliderData = [...testimonials, ...testimonials,...testimonials, ...testimonials,...testimonials, ...testimonials];
  return (
  <>
 <div className={`container-fluid my-5 py-5 ${styles.bgImage}`}>
    <div className='text-center'>
          <span className=" p-2 text-primary fw-normal  fs-5 bg-primary-subtle  text-uppercase   border rounded-2 border-1 border-secondary-subtle">
          testimonials
        </span>
        <h2 className='text-capitalize fs-1 my-3'>what people say about us?</h2>
    </div>
    <div className={`${styles.sliderWrapper} row`}>
        <div className={`${styles.sliderTrack}`}>
        {sliderData.map((items,index)=>(
        <div key={index} className={`${styles.card} `}>
            <img src={items.img} alt={items.name} />
            <div className='p-3'>
              <div>
                <div className='d-flex justify-content-start align-items-baseline'>
                    <span className='fs-3 fw-medium text-black'>5.5</span>
                    <span className='fs-6 ms-1 text-black'>stars</span>
                </div>
                <span>⭐⭐⭐⭐⭐</span>
              </div>

              <p className='text-black fs-5'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”"</p>

              <h6 className='  bold mb-0'>Charlie Johnson</h6>
              <span className=' text-muted'>Last updated 3 mins ago</span>
            </div>
          </div>
        ))}
      </div>
    </div>


  </div> 
  </>
  )
}
