import { useEffect, useState } from "react";
import postApi from "../../api/postApi";
import { Link } from "react-router-dom";
import packageJson from  '../../../package.json';
function HomePageContainer() {
  const [dataItem, setDataItem] = useState([]);
  const [more, setMore] = useState([]);
  useEffect(() => {
    const handleApiPost = async () => {
      try {
        const params = {};
        const response = await postApi.getAll(params);
        const moreItem = await  postApi.getMoreHome(params);
        setDataItem(response);
        setMore(moreItem.data);
        console.log(moreItem.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };

    handleApiPost();
  }, []);
  return (
      <div>
     
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Bài viết mới
          </h6>
          <h1>BÀI VIẾT NỔI BẬT</h1>
        </div>
        <div className="row">
          {dataItem.map((value, key) => (
            <div key={key}className="col-lg-4 col-md-6 mb-4">
              <div className="package-item bg-white mb-2">
                <img className="img-fluid" src= {packageJson.domain_api + value.thumb} alt="" />
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0">
                      <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                      {value.created_at}
                    </small>
                    <small className="m-0">
                      <i className="fa fa-calendar-alt text-primary mr-2"></i>danh mục
                    </small>
                    <small className="m-0">
                      <i className="fa fa-user text-primary mr-2"></i>Vũ Minh Hùng
                    </small>
                  </div>
                  <Link className="h5 text-decoration-none" to={'post/' + value.slug}>
                    {value.title}
                  </Link>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0">
                        {value.description}
                      </h6>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

   
        </div>
      </div>
    </div>
    {more.map((value, key) => (
  
  <div key={key} className="container-fluid py-5">
    
  <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{"letterSpacing" : "5px"}} >Danh mục</h6>
          <h1>{value.title}</h1>
      </div>
      <div className="row">
        

      {
              value.getpost.map((post, keypost)=> {
                return( <div key={keypost} className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hiclassNameen mb-2">
                  
                    <img className="img-fluid" src={packageJson.domain_api + post.post.thumb} alt=""/>
                    <Link className="destination-overlay text-white text-decoration-none"  to={'post/' + post.post.slug}>
                        <h5 className="text-white">{post.post.title}</h5>
                        <span>{post.post.created_at}</span>
                    </Link>
                </div>
            </div> )
              })
            }
            
      </div>
  </div>
</div>
))}



<div className="container-fluid bg-registration py-5" style={{"margin": "90px 0"}}>
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h6 className="text-primary text-uppercase" style={{"letterSpacing": "5px"}}>Mega Offer</h6>
                        <h1 className="text-white"><span className="text-primary">30% OFF</span> For Honeymoon</h1>
                    </div>
                    <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor</p>
                    <ul className="list-inline text-white m-0">
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-primary text-center p-4">
                            <h1 className="text-white m-0">Sign Up Now</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-white p-5">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control p-4" placeholder="Your name" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control p-4" placeholder="Your email" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control p-4" placeholder="Your messager" required="required" />
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-block py-3" type="submit">Sign Up Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}
export default HomePageContainer;
