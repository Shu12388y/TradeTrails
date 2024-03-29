
const Footer = () => {
  return (
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-2 pr-xl-5">
          <div className="d-flex align-items-center mb-3">
            <img src="img/tradetrials.png" width="85" height="50" className="mr-2" alt="Trade Trails Logo" />
            <h1 className="m-0 display-5 font-weight-semi-bold">
              <span className="font-weight-bold border px-3 mr-1 text-success">Trade</span>Trails
            </h1>
          </div>
          <p>Welcome to Trade Trails, your one-stop destination for high-quality agricultural products delivered right to your doorstep. Our platform is designed to offer you a seamless and enjoyable shopping experience.</p>
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
          <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
        </div>

        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-dark mb-2" href="index.html"><i className="fa fa-angle-right mr-2"></i>Home</a>
                <a className="text-dark mb-2" href="shop.html"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                <a className="text-dark mb-2" href="detail.html"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                <a className="text-dark mb-2" href="cart.html"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                <a className="text-dark mb-2" href="checkout.html"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                <a className="text-dark" href="contact.html"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-dark mb-2" href="index.html"><i className="fa fa-angle-right mr-2"></i>Home</a>
                <a className="text-dark mb-2" href="shop.html"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                <a className="text-dark mb-2" href="detail.html"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                <a className="text-dark mb-2" href="cart.html"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                <a className="text-dark mb-2" href="checkout.html"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                <a className="text-dark" href="contact.html"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
              <form action="">
                <div className="form-group">
                  <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control border-0 py-4" placeholder="Your Email" required />
                </div>
                <div>
                  <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top border-light mx-xl-5 py-4">
        <div className="col-md-6 px-xl-0">
          <p className="mb-md-0 text-center text-md-left text-dark">
            &copy; <a className="text-dark font-weight-semi-bold" href="#">Trade Trials</a>. All Rights Reserved. 2024 Nothing.in
            by <a className="text-dark text-center font-weight-semi-bold" href="https://htmlcodex.com">TechSinu</a><br />
          </p>
        </div>
        <div className="col-md-6 px-xl-0 text-center text-md-right">
          <img className="img-fluid" src="img/payments.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
