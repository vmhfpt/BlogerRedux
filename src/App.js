
import FooterPageContainer from './page/FooterPage/FooterPageContainer';
import HeaderPageContainer from './page/HeaderPage/HeaderPageContainer';
import RouterShow from './router';
import './template/css/style.css';
import './template/lib/owlcarousel/assets/owl.carousel.min.css';
import './template/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import './template/css/style.css';

 function App() {
 
  return (<div>
  <FooterPageContainer />
  <RouterShow />

  < HeaderPageContainer />
  </div>)
}

/*function App() {
  const [dataItem , setDataItem] = useState([]);
  useEffect(() => {
   // axios.get('http://127.0.0.1:8000/api/test-api')//http://127.0.0.1:8000/api/post-more
    axios.get('http://127.0.0.1:8000/api/post-more')
    .then(response => {
     console.log(response.data.data)
    setDataItem(response.data.data);
    
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (<div> 
         {dataItem.map((value, key) => (
           <div style={{'border' : '1px solid red'}} key={key}>
              <h2> Tên sảm phẩm : {value.name}</h2>
              <h3> Danh mục : {value.category.name}</h3>
              <h4> Nền tảng : {value.platform.name}</h4>
              <div>
              {
              value.comment.map((item, key)=> {
                return(<div style={{'border' : '2px solid green'}} key={key}>
                   <h5> {item.name}</h5>
                   <span> {item.content}</span>

                    <div>
  
                    {
              item.commentchild.map((child, keyc)=> {
                return(<div style={{'border' : '2px solid orange'}} key={keyc}>
                  <h6> {child.name}</h6>
                  <span>{child.content}</span>
                </div>)
              })
            }

                    </div>


                </div>)
              })
            }
              </div>
           </div>
         ))}



  </div>)
}*/
export default App;