import {  Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { useState , useEffect} from "react";
import headerApi from '../../api/headerApi';
function HeaderPageContainer(){
    const [dataItem, setDataItem] = useState([]);
    useEffect(() => {
        const handleApiHeader = async () => {
            try {
        
              const response = await headerApi.getAll();
              setDataItem(response);
             
            } catch (error) {
              console.log("Failed to fetch product list: ", error);
            }
          };
          handleApiHeader();
    }, [])
    const  scrollToTop = () => {
        scroll.scrollToTop();
      }
     
    return (

<div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{'marginTop' : '90px'}}>
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <a href="" className="navbar-brand">
                    <h1 className="text-primary"><span className="text-white">Blog</span>ER</h1>
                </a>
                <p>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
                <h6 className="text-white text-uppercase mt-4 mb-3" style={{"letterSpacing" : "5px"}}>Theo dõi tôi</h6>
                <div className="d-flex justify-content-start">
                    <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-white text-uppercase mb-4" style={{"letterSpacing" : "5px"}}>Đọc thêm</h5>
                <div className="d-flex flex-column justify-content-start">
                   {dataItem.map((value, key) => (
                    <Link onClick={() => scroll.scrollTo(100)} key={key}  className="text-white-50 mb-2" to={"/footer/" + value.slug }><i className="fa fa-angle-right mr-2"></i>{value.title}</Link>
                   ))}
                    
                    
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-white text-uppercase mb-4" style={{"letterSpacing" : "5px"}}>Liên kết</h5>
                <div className="d-flex flex-column justify-content-start">
                <p type="button" onClick={() => {
                                window.location.assign('https://www.facebook.com/lethamduong.edu.vn');
                              }} className="text-white-50 mb-2"><i className="fa fa-angle-right mr-2"></i>TS Lê Thẩm Dương</p>
                   <p type="button" onClick={() => {
                                window.location.assign('https://www.facebook.com/gaming/vuminhhung2000');
                              }} className="text-white-50 mb-2"><i className="fa fa-angle-right mr-2"></i>Top Hài Hước</p>
                              <p type="button" onClick={() => {
                                window.location.assign('https://www.youtube.com/watch?v=CLdANJrQzrg&list=PLIMX2To2lOgY-9bOGYtUfUMMwrljoq1P3');
                              }} className="text-white-50 mb-2"><i className="fa fa-angle-right mr-2"></i>Lập trình C/C++</p>
                                <p type="button" onClick={() => {
                                window.location.assign('https://vuminhhung.000webhostapp.com/#1');
                              }} className="text-white-50 mb-2"><i className="fa fa-angle-right mr-2"></i>Thông tin về tôi</p>
                                <p type="button" onClick={() => {
                                window.location.assign('https://www.youtube.com/watch?v=0NhD5H10RGE&list=PLIMX2To2lOgY7jEg8IcsW4GHayEWrZMDq');
                              }} className="text-white-50 mb-2"><i className="fa fa-angle-right mr-2"></i>Review Game</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-white text-uppercase mb-4" style={{"letterSpacing" : "5px"}}>Liên hệ tôi</h5>
                <p><i className="fa fa-map-marker-alt mr-2"></i>LIên Chiểu,Đà Nẵng</p>
                <p><i className="fa fa-phone-alt mr-2"></i>0359932904</p>
                <p><i className="fa fa-envelope mr-2"></i>vuminhhungltt904@gmail.com</p>
                <h6 className="text-white text-uppercase mt-4 mb-3" style={{"letterSpacing" : "5px"}}>Tìm kiếm</h6>
                <div className="w-100">
                    <div className="input-group">
                        <input type="text" className="form-control border-light" style={{'padding': '25px'}}placeholder="Nhập từ khóa" />
                        <div className="input-group-append">
                            <button className="btn btn-primary px-3">Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p onClick={scrollToTop} className="btn btn-lg btn-primary btn-lg-square back-to-top" style={{"display": "inline"}}><i className="fa fa-angle-double-up"></i></p>
    </div>






    );
}
export default HeaderPageContainer;