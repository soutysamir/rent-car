
 import { useNavigate } from "react-router-dom"
import CarsSection from "../CarsSection/CarsSection.jsx"


export default function AllVehicles() {
  const navigate= useNavigate()
 const goHome=()=>{
    navigate('/home')
  }
  return (
    <>
            {/*//////// breadcrumb//////// */}
<div className="container p-3 ">
<nav aria-label="breadcrumb ">
  <ol className="breadcrumb">
    <li className="breadcrumb-item" onClick={goHome}><a href="#">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Cars</li>
  </ol>
</nav>

            {/*//////// Title//////// */}
            
<div className='text-center mt-3'>
  <span className=" p-2  text-primary fw-normal   fs-5 bg-primary-subtle  text-uppercase   border rounded-2 border-1 border-secondary-subtle"
        > 
      popular rental deals  </span>

  <h1 className='fw-semibold text-capitalize  my-3'>
  most popular cars rental deals

</h1>
</div>
       <CarsSection />
</div>
</>

  )
}
