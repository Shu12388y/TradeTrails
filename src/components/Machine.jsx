import Footer from "./Footer";
import Navbar from "./Navbar";


const Machine = () => {
  return (
    <div>
   <Navbar/>
      <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Machine Categories</h1>
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
        "name": "Engine Operated Paddy Thresher Machine",
        "image": "https://imgs.search.brave.com/_Q73JhxHpxkWikqOUNH7Nue9TghSlWrJLoUJpzXgdpU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDIwLzEx/L0dXL09ML0xLLzQw/NDQ5OTAvYmVuc29u/LWVuZ2luZS1wYWRk/eS10aHJlc2hlci01/MDB4NTAwLnBuZw",
        "price": "800"
      },
      {
        "name": "Paddy Winnower Fan",
        "image": "https://imgs.search.brave.com/h6UJG_Q-pVi03POVzsp13eQjvNTKwr_BouFXx_b7V_U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcy/LmV4cG9ydGVyc2lu/ZGlhLmNvbS9wcm9k/dWN0X2ltYWdlcy9i/Yy1zbWFsbC9kaXJf/NDcvMTQwNTM3Ni9w/b3dlci13aW5ub3dp/bmctZmFuLTE2MTI4/NzYuanBn",
        "price": "1050"
      },
      {
        "name": "Chaff Cutter Machine",
        "image": "https://imgs.search.brave.com/kmB2mHLcWEmaBrT6_tUehVqIASE_czhWDSNirKkchWo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFydmVzdGVybWFj/aGluZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDYv/QW5pbWFsLWZlZWQt/Z3JlZW4tYW5kLWRy/eS1jaGFmZi1jdXR0/ZXItbWFjaGluZS01/MDB4MzgzLmpwZw",
        "price": "5000 "
      },
      {
        "name": "Drum Seeder Machine",
        "image": "https://imgs.search.brave.com/3xhBBbMcAQh0k820w5USRjMkjN6BN1g9nQw-vmq9Hhc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9DVi9MUS9URC9T/RUxMRVItMzk2MDk0/OC9zZWVkLXNvd2lu/Zy1tYWNoaW5lLTUw/MHg1MDAuanBn",
        "price": "550"
      },
      {
        "name": "Maize Sheller Machine",
        "image": "https://imgs.search.brave.com/oO_101Jbs0CiBxBfBsXMeUzyThhoecPkTRNVqqY9BGw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxMXFXeWR1LStM/LmpwZw",
        "price": "380"
      },
      {
        "name": "Seed Dressing Drum",
        "image": "https://imgs.search.brave.com/ZOfq9phABMIDiLSt2WqlGWuNgw9ipJAsFLLgZ8ywx2o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8zLmlt/aW1nLmNvbS9kYXRh/My9XQi9FUC9NWS0z/NTY3NjA5L3NlZWQt/dHJlYXRtZW50LWRy/dW0tNTAweDUwMC5q/cGc",
        "price": "450"
      },
      {
        "name": "Cono Weeder",
        "image": "https://imgs.search.brave.com/c8IemecBtSwOgFx-KoKNTPVagrlWc84OPEx8mCpXXVM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jcGlt/Zy50aXN0YXRpYy5j/b20vMDY3NTkyNDQv/Yi80L0Nvbm8tV2Vl/ZGVyLmpwZw",
        "price": "420"
      },
     {
        "name": "Nail Weeder",
        "image": "https://imgs.search.brave.com/qihKdQ-R7zTqtkCzOn0tgQdGRFzo6LJX0yKTyDEcLxw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxQ0VJZEpNa2xM/LmpwZw",
        "price": "425"
      },
      {
        "name": "Sri Row Weeder",
        "image": "https://imgs.search.brave.com/WHRhNJ9PXWwH0qqVBTlLzfddn7aETmIxe7_YVz4Ab3k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDIyLzEx/L0tNL1pNL01NLzMx/MjU2NTYvc3JpLW1h/cmtlci01MDB4NTAw/LmpwZw",
        "price": "700"
      },
      {
        "name": "Seed Drill",
        "image": "https://imgs.search.brave.com/MrdcnjWu-cyzfA4wwJEBpqGJ6pNTBFqKeIFJuiHemcs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFtTVQyVzFRbUwu/anBn",
        "price": "2800"
      },
      {
        "name": "Wheel Hoe",
        "image": "https://imgs.search.brave.com/jbLq5FspNi6w2c0hyoJmoE5EVa4pN9JeqvsLqtWOVNc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzExYk8wWEozQUwu/anBn",
        "price": "2800"
      },
      {
        "name":"GroundNut Sheller Machine",
        "image":"https://imgs.search.brave.com/77azmhnnFu8XXhXdaUdSx4-S34-dGQY-BMbwtK68Tw8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYWdyaWN1bHR1/cmUtbWFjaGluZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDkvZ3JvdW5k/bnV0LXNoZWxsZXIt/bWFjaGluZS53ZWJw",
        "price":"23000"
      }

  // Add more products here as needed
];

export default Machine;
