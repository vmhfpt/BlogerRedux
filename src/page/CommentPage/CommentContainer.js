import { useDispatch, useSelector } from "react-redux";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import selectsComment from './selectsComment';
import getCommentState from './selectsComment';
import { handleChange } from '../../state/comment/commentActions';
import { useState } from 'react';
import commentApi from '../../api/commentApi';
function CommentContainer({slug}){
   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [content, setContent] = useState('');
    const [errorName, setErrorName] = useState('* Bắt buộc');
    const [errorEmail, setErrorEmail] = useState(' * Bắt buộc');
    const [errorNumber, setErrorNumber] = useState('* Bắt buộc');
    const [errorContent, setErrorContent] = useState('* Bắt buộc');
    const  emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if( regex.test(email) === false){
            setErrorEmail('* Email không hợp lệ');
        }else {
            setErrorEmail('');
        }
    }
  
    const handleName = (e) => {
        setName(e.target.value);
      
        if(e.target.value === '' || e.target.value[0] === ' '){
            setErrorName('* Tên không được để trống');
        }else {  
            setErrorName('');
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value === ''){
            setErrorEmail('* Email không được để trống');
        }else {
            emailValidation();
        }
    }
    const handleNumber = (e) => {
        setNumber(e.target.value);
        if(e.target.value === '' || e.target.value[0] === ' '){
            setErrorNumber('* Số điện thoại không được để trống');
        }else {
            setErrorNumber('');
        }
    }
    const handleContent = (e) => {
        setContent(e.target.value);
        if(e.target.value === '' ||  e.target.value[0] === ' '){
            setErrorContent('* Nội dung không được để trống');
        }else {
            setErrorContent('');
        }
    }
    const data = useSelector(getCommentState);
    const dispatch = useDispatch();
    
    const handleSubmit = () => {

    
      
      //  
      if (errorEmail === '' && errorContent === '' && errorName === '' && errorNumber === ''){
          var  dataApi = {
               name : name,
               email : email,
               content : content,
               number : number,
               slug : slug,
               parent_id : 0
           }
           const handleApiCategory = async () => {
            try {
              scroller.scrollTo('anchor', {
                duration: 500,
                delay: 0,
                smooth: true
              });
              const response = await commentApi.postComment(dataApi);
              dispatch(handleChange(!data));
              setContent('');
              setEmail('');
              setName('');
              setNumber('');
              setErrorContent('* Bắt buộc nhập');
            setErrorEmail('* Bắt buộc nhập');
            setErrorName('* Bắt buộc nhập');
            setErrorNumber('* Bắt buộc nhập');
            } catch (error) {
              console.log("Failed to fetch product list: ", error);
            }
          };
          handleApiCategory();
      }else {
        scroller.scrollTo('detail-form', {
          //anchor
          duration: 500,
          delay: 0,
          smooth: true
        });
      }
      
    }
    
    return (
        <div id="detail-form" className="bg-white mb-3" style={{ padding: "30px" }}>
          <h4
            className="text-uppercase mb-4"
            style={{ letterSpacing: "5px" }}
          >
            Gửi bình luận của bạn
          </h4>
         
            <div className="form-group">
              <label htmlFor="name">Tên *</label>
              <input value={name} onChange={(e) => handleName(e)} type="text" className="form-control" id="name" />
              <span className="error-custom">  {errorName}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input value={email} onChange={(e) => handleEmail(e)} type="email" className="form-control" id="email" />
              <span className="error-custom"> {errorEmail}</span>
            </div>
            <div className="form-group">
              <label   htmlFor="phone_number">Số điện thoại *</label>
              <input type="number" value={number} onChange={(e) => handleNumber(e)} className="form-control" id="phone_number" />
              <span className="error-custom">  {errorNumber}</span>
            </div>

            <div className="form-group">
              <label htmlFor="message">Nội dung *</label>
              <textarea
                onChange={(e) => handleContent(e)}
                id="message"
                cols="30"
                rows="5"
                value={content}
                className="form-control"
              >{content}</textarea>
                <span className="error-custom">  {errorContent}</span>
            </div>
            <div className="form-group mb-0">
             <button onClick={handleSubmit} className="btn btn-primary font-weight-semi-bold py-2 px-3"> Gửi </button>
            </div>
          
        </div>);
}
export default CommentContainer;