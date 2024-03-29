import Footer from "./Footer";
import Navbar from "./Navbar";


const Plants = () => {
  return (
    <div>
   <Navbar/>
      <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Plants Categories</h1>
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
              {products.map((product, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img className="img-fluid w-100" src={product.image} alt={product.name} />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">{product.name}</h6>
                      <div className="d-flex justify-content-center">
                        <h6>Rs {product.price}</h6>
                        
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
const products = [
    {
        "name": "Aglaonema Creta",
        "image": "img/p1.jpeg",
        "price": "500"
      },
      {
        "name": "Neon Pothos",
        "image": "img/p2.jpeg",
        "price": "50 Per Plant"
      },
      {
        "name": "Variegated White Aralia plant",
        "image": "img/p3.jpeg",
        "price": "50 Per Plant"
      },
      {
        "name": "Snake plant",
        "image": "img/p4.jpeg",
        "price": "75 Per Plant"
      },
      {
        "name": "Costus speciosus marginatus plant",
        "image": "img/p5.jpeg",
        "price": "110 Per Plant"
      },
      {
        "name": "Aglaonema Spring Snow",
        "image": "img/p6.jpeg",
        "price": "150 Per Plant"
      },
      {
        "name": "Mixed Plants",
        "image": "img/p7.jpeg",
        "price": "80 Per Plant"
      },
     {
        "name": "Pandanus baptistii variegata",
        "image": "img/p8.jpeg",
        "price": "100 Per Plant"
      },
      {
        "name": "Aglaonema Silver Frost",
        "image": "img/p9.jpeg",
        "price": "400"
      },
      {
        "name": "Tradescantia zebrina Deep Purple",
        "image": "img/p10.jpeg",
        "price": "250 Per Plant"
      },
      {
        "name": "Aglaonema Pink Dalmatian",
        "image": "img/p11.jpeg",
        "price": "50 Per Plant"
      },
       {
        "name": "Syngonium Wendlandii",
        "image": "img/p12.jpeg",
        "price": "50 Per Plant"
      },
      {
        "name": "Musa Florida Variegated",
        "image": "img/p13.jpeg",
        "price": "3000 Per Plant"
      },
       {
        "name": "Coleus Splish splash",
        "image": "img/p14.jpeg",
        "price": "30 Per Plant"
      },
      {
        "name": "Coleus Wizard scarlet",
        "image": "img/p15.jpeg",
        "price": "30 Per Plant"
      },
      {
        "name": "Coleus Scarlet ribbon",
        "image": "img/p16.jpeg",
        "price": "30 Per Plant"
      },
      {
        "name": "Little flames",
        "image": "img/p17.jpeg",
        "price": "100 With Pots"
      },
      {
        "name": "Syngonium podophyllum",
        "image": "img/p18.jpeg",
        "price": "50 Per Plant"
      },
      {
        "name": "Anthurium Clarinervium",
        "image": "img/p19.jpeg",
        "price": "500 Per Plants"
      },

  // Add more products here as needed
];

export default Plants;
