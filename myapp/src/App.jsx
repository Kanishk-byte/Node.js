import './App.css';
import './NavBar';
import NavBar from './NavBar';
import HomeCarousel from './HomeCarousel';
import './HomeCarousel';
import CardImage from './CardImage';
import Data from './data';

const ncard = (val) =>{
  return (
    <CardImage 
    key={val.id}
    title={val.title} 
    imgsrc={val.imgsrc} 
    desc={val.desc} />
  )
}

function App() {
  return (

    <div>
      <NavBar/>
      <HomeCarousel/>

      <div className="row">
      {Data.map((val,index)=>(
        <div key={val.id} className="col-md-4">
          {ncard(val)}
        </div>
    ))}

      </div>
      </div>
  );
}

export default App;
