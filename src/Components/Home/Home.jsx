
import {useNavigate} from "react-router-dom"
import HeroSection from "../HeroSection/HeroSection.jsx"
import CarsSection from "../CarsSection/CarsSection.jsx"
import Footer from "../Footer/Footer.jsx"
import HowItWork from "../HowItWork/HowItWork.jsx"
import RentCar from "../RentCar/RentCar.jsx"
import WhyChooseUs from "../whyChooseUs/WhyChooseUs.jsx"
import Testimonials from "../Testimonials/Testimonials.jsx"
import Search from "../Search/Search.jsx"
import {  useState } from "react"


export default function Home() {
 const navigate = useNavigate()

const [search, setSearch] = useState("");
  return (
    <>
    {/* ///////////section1/////////// */}
      <HeroSection/> 
       {/*/////// RealTimeSearch/////// */}
         <div className={`container my-3  `}>
          <Search search={search} setSearch={setSearch}/>
         </div>
    {/* ///////////section2/////////// */}
    <section className="container mt-5">
      <div className='text-center'>
   <span className=" p-2  text-primary fw-normal   fs-5 bg-primary-subtle  text-uppercase   border rounded-2 border-1 border-secondary-subtle"
        >
          popular rental deals
        </span> 

  <h1 className='fw-semibold text-capitalize  my-3'>
  most popular cars rental deals

</h1>
</div>   
       <CarsSection limit={4} search={search} />
       <div className="text-center my-3">
          <button
            className="btn  border  fs-5 py-2 px-4 btn-outline-secondary   "
            onClick={() => navigate("/vehicles")}
          >
            Show All Vehicles <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
    </section>
    {/* ///////////section3/////////// */}
    <HowItWork/>
    {/* ///////////Why ChooseUs Section/////////// */}
     <WhyChooseUs/>
    {/* ///////////Testimonials/////////// */}
    <Testimonials/>
    {/* ///////////RentCar section/////////// */}
  <RentCar/>
   {/* ///////////Footer/////////// */}
  <Footer/>
    </>
  )
}
