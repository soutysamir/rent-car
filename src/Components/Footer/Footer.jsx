import styles from './footer.module.css'
export default function footer() {
  return (
  <>
  
   <footer className={`${styles.bgColor} text-light pt-5 pb-3`}>
      <div className="container">
        <div className="row gy-4">

          {/*////// Logo & Contact////// */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-4">
              <i className="fa-solid fa-car-side me-2"></i>
              RENTCARS
            </h5>

            <p className="mb-2">
              <i className="fa-solid fa-location-dot me-2"></i>
              25566 Hc 1, Glenallen, Alaska, 99588, USA
            </p>

            <p className="mb-2">
              <i className="fa-solid fa-phone me-2"></i>
              +603 4784 273 12
            </p>

            <p>
              <i className="fa-solid fa-envelope me-2"></i>
              rentcars@gmail.com
            </p>
          </div>

          {/*///// Our Products////// */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-4">Our Products</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Carrers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Cars</a></li>
              <li><a href="#" className="text-light text-decoration-none">Packages</a></li>
              <li><a href="#" className="text-light text-decoration-none">Features</a></li>
              <li><a href="#" className="text-light text-decoration-none">Priceline</a></li>
            </ul>
          </div>

          {/*/////// About/////////// */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-4">About Rent Cars</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Why Choose Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Our Story</a></li>
              <li><a href="#" className="text-light text-decoration-none">Investor Relations</a></li>
              <li><a href="#" className="text-light text-decoration-none">Press Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Advertise</a></li>
            </ul>
          </div>

          {/*/////// Resources/////// */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-4">Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Download</a></li>
              <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Guides</a></li>
              <li><a href="#" className="text-light text-decoration-none">Partner Network</a></li>
              <li><a href="#" className="text-light text-decoration-none">Cruises</a></li>
              <li><a href="#" className="text-light text-decoration-none">Developer</a></li>
            </ul>
          </div>

          {/*//////// Social///////// */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-4">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className=" small">
          Copyright 2023 • Rentcars, All Rights Reserved
        </div>
      </div>
    </footer>
  </>
  )
}
