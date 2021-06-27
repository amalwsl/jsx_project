import './App.css';
import imageInSrc from './imageInSrc.jpg'

function App() {
  return (
    <>
    <div className="App"> 
          <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

              <h1 className="title red">ama wesleti</h1>

              <br/>

              <img src={imageInSrc}  alt="imgsrc" width="20%" />

              <br />

              <img src="/imageInPublic.jpg" alt="imgpublic" width="20%"/>

          </div>

          <video width="320" height="240" controls>

            <source src="myVideo.mp4" type="video/mp4" />

          </video>
    </div>
    </>
  );
}

export default App;
