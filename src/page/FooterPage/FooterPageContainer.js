import sideBarApi from '../../api/sideBarApi';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function FooterPageContainer(){
      const [dataItem , setDataItem] = useState([]);
      useEffect(() => {
        const handleApiCategory = async () => {
          try {
           /* const params = {
              _page: 1,
              _limit: 10,
    
            };*/
            const response = await sideBarApi.getAll();
          //  console.log(response.data);
           setDataItem(response);
          } catch (error) {
            console.log('Failed to fetch product list: ', error);
          }
        }
    
        handleApiCategory();
      }, []);
    

    return (  <div> 
        
        <div className="container-fluid bg-light pt-3 d-none d-lg-block">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <p><i className="fa fa-envelope mr-2"></i>vuminhhungltt904@gmail.com</p>
                    <p className="text-body px-3">|</p>
                    <p><i className="fa fa-phone-alt mr-2"></i>0359932904</p>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-primary px-3" href="">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-primary px-3" href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-primary px-3" href="">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-primary px-3" href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-primary pl-3" href="">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    
</div>


<div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{'zIndex': '9'}}>
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                <Link to="/" className="navbar-brand">
                    <h1 className="m-0 text-primary"><span className="text-dark">Blog</span>ER</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                      
                            
                             {dataItem.map((value, key) => (
                               <Link key={key} to={'category/' + value.slug} className="nav-item nav-link active">{value.title}</Link>
                              ))}
                    </div>
                </div>
            </nav>
        </div>
    </div>

</div>
);
}
export default FooterPageContainer;