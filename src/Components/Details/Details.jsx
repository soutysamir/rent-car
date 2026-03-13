import { useEffect, useState } from "react"
import styles from './details.module.css'
import { images } from '../../assets/images'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function Details() {
const navigate = useNavigate()
  const { id } = useParams()
  const [cars, setCar] = useState(null)


  const goHome=()=>{
    navigate('/home')
  }
   const goCars=()=>{
    navigate('/Vehicles')
  }
  useEffect(() => {
    getCars()
  }, [id])
  const getCars = async () => {
    try {
      const response = await axios.get(`//myfakeapi.com/api/cars/${id}`)

      const car = {
        ...response.data.Car,
      
      }

      setCar(car)
    } catch (error) {
      console.log(error)
    }
  }
   console.log(cars)
  return (
<>

    {/* ////////// breadcrum////////////////// */}
   <nav aria-label="breadcrumb ">
  <ol className="breadcrumb w-50  w-100 p-4">
    <li className="breadcrumb-item" onClick={goHome}><a href="#">Home</a></li>
    <li className="breadcrumb-item" onClick={goCars}><a href="#">Cars</a></li>
    <li className="breadcrumb-item active" aria-current="page">Car Details</li>
  </ol>
</nav>

   {/* ///////////// view Details///////////// */}
   <div className=" mx-1 row ">
    <div className="col-md-6 my-md-4 my-0 ">
        <div className={`${styles.bgImg} ${styles.sec} `}>
        <img className='w-100 object-fit-cover  ' src={images.audi1} alt="carimg" />

        </div>

    </div>
    <div className="col-md-6 mt-5 mt-md-0 ">
        
     <div className='mt-4' >
    <span className=" py-2 px-3  text-primary fw-normal  fs-5 bg-primary-subtle  text-uppercase   border rounded-2 border-1 border-secondary-subtle"
        >
       why choose us
        </span> 

  <h2 className='fw-semibold text-capitalize  my-3'>
  We offer the best experience with our rental deals</h2>
  <h3 className="mt-5 fst-italic text-primary fs-2 fw-bold"> {cars?.car}</h3>
 
    
       
        <h5 className="mt-3 text-black "> <span className="fst-italic fw-4 text-primary-emphasis fw-bold ">Model:</span> {cars?.car_model}</h5>
        <h5 className="mt-3 text-black "><span className="fst-italic fw-4 text-primary-emphasis fw-bold ">Color:</span> {cars?.car_color}</h5>
   
   <h5 className="mt-3 text-black">
  <span className="fst-italic fw-4 text-primary-emphasis fw-bold">Availability:</span> {cars?.availability ? "Available" : "Not Available"}
</h5>
     <h5 className="mt-3 text-black "><span className="fst-italic fw-4 text-primary-emphasis fw-bold ">CarModelYear:</span> {cars?.car_model_year}</h5>
    <h5 className="mt-3 text-black "><span className="fst-italic fw-4 text-primary-emphasis fw-bold ">Vin:</span> {cars?.car_vin}</h5>
    <h5 className="mt-3 text-black "><span className="fst-italic fw-4 text-primary-emphasis fw-bold ">Price:</span> {cars?.price}</h5>
 </div>
    </div>
   
 </div>
 


       
        
   
   </>
  )
}
