import Footer from "./Footer";
import Navbar from "./Navbar";


const Plants = () => {
  return (
    <div>
   <Navbar/>
      <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Tools Categories</h1>
        </div>
      </div>
      
      {/* Shop Start */}
      <div className="container-fluid pt-3">
        <div className="row justify-content-center w-100 align-items-center">
          {/* Shop Product Start */}
          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search by name" />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4">
                    <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort by
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                      <a className="dropdown-item" href="#">Latest</a>
                      <a className="dropdown-item" href="#">Popularity</a>
                      <a className="dropdown-item" href="#">Best Rating</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample product cards */}
              {/* Replace the sample product cards with your actual product data */}
              {tools.map((product, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img className="img-fluid w-100" src={product.image} alt={product.name} />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">{product.name}</h6>
                      <div className="d-flex justify-content-center">
                        <h6>Rs {product.price}</h6>
                        <h6 className="text-muted ml-2"><del>${product.discountedPrice}</del></h6>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                      <a href="#" className="btn btn-sm text-dark p-0">
                        <i className="fas fa-eye text-primary mr-1"></i>View Detail
                      </a>
                      <a href="#" className="btn btn-sm text-dark p-0">
                        <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              {/* End of sample product cards */}
              
            </div>
          </div>
          {/* Shop Product End */}
        </div>
      </div>
      <Footer/>
      {/* Shop End */}
    </div>
   
  );
}

// Sample product data
const tools = [
    {
        "name": "Mashki 1/2 Inch 3-Layered Braided Water Hose Pipe With Water Sprayer",
        "image": "https://m.media-amazon.com/images/I/81f8YCl04HL._AC_UL480_FMwebp_QL65_.jpg",
        "price": "800"
      },
      {
        "name": "Drip Irrigation kit for Home Garden 50 Plants Automatic Watering System for Plants.",
        "image": "https://m.media-amazon.com/images/I/81Il+iJbl+L._AC_UL480_FMwebp_QL65_.jpg",
        "price": "1050"
      },
      {
        "name": "Variegated White Aralia plant",
        "image": "https://m.media-amazon.com/images/I/71YzmoEiIvL._AC_UL480_FMwebp_QL65_.jpg",
        "price": "50 Per Plant"
      },
      {
        "name": "Garden Sprinkler, 360Ã‚° Rotating Lawn Sprinkler with up to 3,000 Sq.",
        "image": "https://m.media-amazon.com/images/I/51Rh+NxkIcL._AC_UL480_FMwebp_QL65_.jpg",
        "price": "550"
      },
      {
        "name": "Garden Water Hose Tap Connectors Universal Adapter",
        "image": "https://m.media-amazon.com/images/I/71ImZH2s-8L._AC_UL480_FMwebp_QL65_.jpg",
        "price": "380"
      },
      {
        "name": "Lukzer 3 Arm Sprinkler for Watering Garden Lawn Yard Irrigation System 360 Degree Sprayer",
        "image": "https://m.media-amazon.com/images/I/71qek5s3QdL._AC_UL960_FMwebp_QL65_.jpg",
        "price": "450"
      },
      {
        "name": "Bombay Greens Set of 3 Garden Tools Set | Home Gardening Kit",
        "image": "https://m.media-amazon.com/images/I/71huY611M2L._AC_UL480_FMwebp_QL65_.jpg",
        "price": "420"
      },
     {
        "name": "GOLD DUST Watering Can for Plants",
        "image": "https://m.media-amazon.com/images/I/51kabfS2vqL._AC_UL480_FMwebp_QL65_.jpg",
        "price": "425"
      },
      {
        "name": "ecofynd 1.5 Litre Metal Watering can for Plants,",
        "image": "https://m.media-amazon.com/images/I/61aooPBuHWL._AC_UL480_FMwebp_QL65_.jpg",
        "price": "700"
      },
      {
        "name": "HASTHIP® Drip Irrigation Timer for Garden Farm, Irrigation Water Timer with Rainy Sensor",
        "image": "27.jpg",
        "price": "2800"
      },

  // Add more products here as needed
];

export default Plants;
