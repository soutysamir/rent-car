import { images} from '../../assets/images';
export default function CarCard(props) {

let{carInfo,viewDetails}=props;
  return (
    <>
    <div key={carInfo.id} className="col-md-3  mb-4">
          <div className="card h-100 p-3">
           
             <img className='object-fit-cover h-100 w-100' src={carInfo?.image}alt="car" />
           
            <h5 className=' mt-2 text-primary fs-3 fst-italic'> {carInfo?.car}</h5>
            <h5> <span className='fw-bold fst-italic'>Model:</span> {carInfo?.car_model}</h5>

            <span className='text-muted' > <i className="fa-solid fa-star text-warning"></i>review(1345 reviews)</span>
            <div className='d-flex justify-content-between align-items-center'>
              <span className='text-muted'><i className="fa-regular fa-user"></i>2 Passanger</span>
              <span className='text-muted w-50'><img className='me-1' src={images.airconditioning} alt="irconditioning" />Air conditioning</span>
            </div> 
            
            <div className='d-flex justify-content-between align-items-center mt-3 '>
              <span className='text-muted'><i className="fa-solid fa-calendar-days text-black"></i>{carInfo.car_model_year}</span>
              <span className='text-muted w-50 '><img src={images.frame} alt="frame" />Automatic</span>
            </div>
            <hr />
            <div className='d-flex justify-content-between align-items-center my-1'>
              <span className='text-muted'>Price</span>
              <span className='text-muted'><span className='text-black fw-medium'>{carInfo?.price}</span>/day</span>
            </div>
           <button type="button" onClick={()=>viewDetails(carInfo,carInfo.id)} className="btn btn-primary my-2">View details <i className="fa-solid fa-arrow-right"></i> </button>
          </div>
        </div>
    
    </>
  )
}
