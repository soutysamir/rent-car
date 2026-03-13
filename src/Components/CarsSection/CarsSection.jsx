import { useEffect, useState } from "react"
import axios from "axios"
import { images } from "../../assets/images.js"
import CarCard from "../CarCard/CarCard.jsx"
import ReactPaginate from "react-paginate"
import { useNavigate } from "react-router-dom"

export default function CarsSection({ limit , search}) {

  const [cars, setCars] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
 
  const navigate = useNavigate()

  const carsPerPage = 16
  const imagesArr = [images.car1, images.car2, images.car3]
  const getCars = async () => {
    try {
      const response = await axios.get("https://myfakeapi.com/api/cars")

      const carsWithImages = response.data.cars.map((car, index) => ({
        ...car,
        image: imagesArr[index % imagesArr.length]
      }))

      setCars(carsWithImages)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCars()
  }, [])



  const viewDetails = (car) => {
    navigate(`/details/${car.id}`)
  }
const filteredCars = cars.filter((car) =>
  car.car?.toLowerCase().includes((search?.toLowerCase())
  ));
console.log(cars)

           ///////////paginationLogic/////////////
           
  if (limit) {
    return (

      <div className="row mt-5">
        {filteredCars.slice(0, limit).map((car) => (
          <CarCard
            key={car.id}
            carInfo={car}
            viewDetails={viewDetails}
          />
        ))}
      </div>
    )
  }

  const pageCount = Math.ceil(cars.length / carsPerPage)
  const offset = currentPage * carsPerPage
  const currentCars = cars.slice(offset, offset + carsPerPage)

  const handlePageClick = (data) => {
    setCurrentPage(data.selected)
  }

  return (
    <>


      <div className="row mt-5">
        {currentCars.map((car) => (
          <CarCard
            key={car.id}
            carInfo={car}
            viewDetails={viewDetails}
          />
        ))}
      </div>

       <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center mt-4'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  )
}