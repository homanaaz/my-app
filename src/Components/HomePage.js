import React from "react";
import image1 from "../Images/Schermafbeelding18.14.16.png";
import image2 from "../Images/Schermafbeelding18.18.33.png";
import image3 from "../Images/Schermafbeelding18.18.07.png";
import image4 from "../Images/Schermafbeelding18.14.47.png";
import image5 from "../Images/Schermafbeelding18.15.04.png";
import image6 from "../Images/Schermafbeelding18.15.54.png";
import image7 from "../Images/Schermafbeelding18.14.47.png";
import image8 from "../Images/Schermafbeelding18.15.26.png";
import image9 from "../Images/Schermafbeelding18.14.47.png";
import image10 from "../Images/Schermafbeelding18.20.04.png";
import image11 from "../Images/Schermafbeelding18.19.36.png";
import image12 from "../Images/Schermafbeelding18.17.28.png";
import image13 from "../Images/Schermafbeelding18.16.52.png";
import image14 from "../Images/Schermafbeelding18.18.45.png";
import image15 from "../Images/Schermafbeelding18.14.47.png";
import image16 from "../Images/Schermafbeelding18.14.47.png";
import demo from "../Images/my-mementio.mp4";

const HomePage = () => (
  <div className="content-container">
        <div style={{ display: "flex" }}>
          <div className="content-grid-50">
            <div className=" content-one">
              Uw herinneringen voor altijd in goede handen?
            </div>
            <div>
              <button style={{ height: "54px" }} className="primary-button-blue">Begin nu met vastleggen</button>
            </div>
            <div style={{ margin: "28px 0" }}>
              Of ontdek eerst
		  <a className="momentio-blog-link" style={{color: "blue"}}>hoe het werkt</a>
	
            </div>
            <div className="image-container">
              <div className="image-section-1">
                {" "}
                <div className="image"><img src={image1}/></div>{" "}
                <div className="image"><img src={image2}/></div>{" "}
              </div>
              <div className="image-section-2">
                {" "}
                <div className="image"><img src={image3}/></div>{" "}
                <div className="image"><img src={image4}/></div>{" "}
              </div>
              <div>
                {" "}
                <div className="image"><img src={image5}/></div>{" "}
                <div className="image" style={{ height: "160px" }}>
                  <img src={image6}/>
                </div>{" "}
                <div className="image"><img src={image7}/></div>
              </div>
            </div>
          </div>
          <div
            className="content-grid-50 image-xl"
            style={{ display: "flex", "align-items": "flex-end" }}
          >
            <div class="image-container">
              <div className="image-section-3">
                {" "}
                <div className="image"><img src={image8}/></div>{" "}
                <div className="image"><img src={image9}/></div>{" "}
              </div>
              <div>
                {" "}
                <div className="image" style={{ height: "160px" }}>
                  <img src={image10}/>
                </div>{" "}
                <div className="image"><img src={image11}/></div>{" "}
                <div className="image" style={{ height: "160px" }}>
                  <img src={image12}/>
                </div>
                <div className="image" style={{ height: "160px" }}>
                  <img src={image13}/>
                </div>
              </div>
              <div className="image-section-4">
                {" "}
                <div className="image" style={{ height: "160px" }}>
                 <img src={image14}/>
                </div>{" "}
                <div className="image"><img src={image15}/></div>{" "}
                <div className="image" style={{ height: "160px" }}>
                  <img src={image16}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ "margin-top": "94px" }}>
          <div className="text1">HOE WERKT MOMENTIO</div>
          <div className="text2">
            Een waardevol archief aanleggen en delen met uw naasten.
          </div>
          <div className="text3" style={{ "margin-top": "28px" }}>
            Momentio is een veilig plek voor uw waardevolle herinneringen en
            documenten die u nu en in de toekomst met uw dierbaren kunt delen.
            Minimaliseer de administratieve rompslomp en laat uw nabestaande
            zich concentreren op de herinnering aan u.
          </div>
        </div>
        <div className="text4" style={{ "margin-top": "34px" }}>
          <div className="text5">
            <div style={{ "text-align": "center", height: "62px" }}>Icon1</div>
            <div style={{ display: "flex" }}>
              <div>
                <div
                  style={{
                    width: "44px",
                    font: "normal normal 800 24px/35px League Spartan",
                    "letter-spacing": "2.4px",
                    color: "#233155"
                  }}
                  className="text-circle"
                >
                  1
                </div>
              </div>
              <div style={{ paddingLeft: "24px" }}>
                <div
                  style={{
                    font: "normal normal 800 24px/35px Raleway",
                    "letter-spacing": "0px",
                    color: "#233155"
                  }}
                >
                  {" "}
                  Leg uw archief aan
                </div>
                <div
                  style={{
                    font: "normal normal 500 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155",
                    marginTop: "25px",
                    marginBottom: "14px"
                  }}
                >
                  In uw archief legt u die dingen vast die belangrijk zijn voor
                  uw naasten. Voor het geval u er straks net meer bent
                  bijvoorbeeld. Denk hierbij aan:
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  {" "}
                  Video’s
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  Foto’s
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  Geluidsopnames
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  Testament
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  En nog veel meer…
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#3B3DBB",
                    marginTop: "40px"
                  }}
                >
                  <a className="momentio-blog-link" href="">Archief aanleggen</a>
                </div>
              </div>
            </div>
          </div>
          <div className="text5">
            <div style={{ "text-align": "center", height: "62px" }}>Icon1</div>
            <div style={{ display: "flex" }}>
              <div>
                <div
                  style={{
                    width: "44px",
                    font: "normal normal 800 24px/35px League Spartan",
                    "letter-spacing": "2.4px",
                    color: "#233155"
                  }}
                  className="text-circle"
                >
                  2
                </div>
              </div>
              <div style={{ paddingLeft: "24px" }}>
                <div
                  style={{
                    font: "normal normal 800 24px/35px Raleway",
                    "letter-spacing": "0px",
                    color: "#233155"
                  }}
                >
                  {" "}
                  Creëer uw contactlijst
                </div>
                <div
                  style={{
                    font: "normal normal 500 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155",
                    marginTop: "25px",
                    marginBottom: "14px"
                  }}
                >
                  Hierin komen de mensen te staan waarmee u uw waardevolle
                  archief gaat delen. U bepaalt wie wat ziet en wanneer. Denk
                  hierbij aan:
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  {" "}
                  Uw partner
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  Uw kinderen
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  Uw bewindvoerder
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  Uw notaris
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  En nog veel meer…
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#3B3DBB",
                    marginTop: "40px"
                  }}
                >
                  <a href="" className="momentio-blog-link">Uw contactenlijst</a>
                </div>
              </div>
            </div>
          </div>
          <div className="text5" style={{ paddingRight: 0 }}>
            <div style={{ "text-align": "center", height: "62px" }}>Icon1</div>
            <div style={{ display: "flex" }}>
              <div>
                <div
                  style={{
                    width: "44px",
                    font: "normal normal 800 24px/35px League Spartan",
                    "letter-spacing": "2.4px",
                    color: "#233155"
                  }}
                  className="text-circle"
                >
                  3
                </div>
              </div>
              <div style={{ paddingLeft: "24px" }}>
                <div
                  style={{
                    font: "normal normal 800 24px/35px Raleway",
                    "letter-spacing": "0px",
                    color: "#233155"
                  }}
                >
                  {" "}
                  Deel uw archief
                </div>
                <div
                  style={{
                    font: "normal normal 500 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155",
                    marginTop: "25px",
                    marginBottom: "14px"
                  }}
                >
                  U kiest zelf wie wanneer wat uit uw archief ontvangt. Zo kunt
                  u in de toekomst toch dat ene mooie bericht toesturen. Denk
                  hierbij aan:
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  {" "}
                  Een verjaardagsboodschap
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  Uw testament
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  Die ene leuke foto samen
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  Een persoonlijke brief
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#233155"
                  }}
                >
                  En nog veel meer…
                </div>
                <div
                  style={{
                    font: "normal normal 800 18px/30px Raleway",
                    "letter-spacing": 0,
                    color: "#3B3DBB",
                    marginTop: "40px"
                  }}
                >
                  <a className="momentio-blog-link" href="">Uw archief delen</a>
                </div>
              </div>
            </div>
          </div>
        </div>
		 <div class="momentio-home-demo-container" style={{ "margin-top": "50px" }}><div className="momentio-home-demo-video">
		 
		 
		
   <video width="320" height="240" controls>
  <source src={demo} type="video/mp4"/>
  
Your browser does not support the video tag.
</video>
		 </div>
		 <div className="momentio-home-demo-link ">
		 <div>
            <div className="moment-video-header">WAT VINDEN ANDEREN</div>
            <div className="moment-video-description">‘Dankzij Momentio kan ik mijn vrouw straks toch nog een bloementje sturen.’</div>
            <div className="moment-video-user">– Bart van Achtereeckte</div>
            <div> <button className="moment-video-navigate">Bekijk meer reacties</button></div>
			</div>
          </div>
		 
		 </div>
		 <div style={{clear:"both"}}></div>
		 
		 <div style={{ "margin-top": "34px" }}>
		 <div className="momentio-blog-header">UIT ONS BLOG</div>
		 <div className="momentio-blog-title">De laatste ontwikkelingen</div>
		 <div className="text4" >
          <div className="momentio-home-tips-container">
            <div> <img src={image10}/></div>
            <div className="momentio-tips-content-container">
             
              <div className="momentio-tips-content-header">TIPS & TRICS </div>
			  <div  className="momentio-tips-content-title"> Een persoonlijke boodschap opnemen</div>
			  <div className="momentio-tips-content-desc">Het is makkelijker gezegd dan gedaan. Een boodschap inspreken of een video opnemen voor iemand als je er zelf niet meer bent. </div>
            </div>
          </div>
         <div className="momentio-home-tips-container">
            <div>
			 <img src={image10}/>
			</div>
           <div className="momentio-tips-content-container">
             
              <div className="momentio-tips-content-header"> HOE WERKT DAT</div>
			   <div  className="momentio-tips-content-title">Wat is en doet een bewindvoerder?</div>
			  <div className="momentio-tips-content-desc">De personen die onder bewind staan kunnen in de meeste gevallen niet meer zelf hun financiën regelen. Ze hebben meestal te maken persoonlijke omstandigheden.</div>
            </div>
          </div>
          <div className="momentio-home-tips-container">
            <div> <img src={image10}/></div>
            <div className="momentio-tips-content-container">
             
               <div className="momentio-tips-content-header">PRODUCT </div>
			   <div  className="momentio-tips-content-title">Uploaden van het juiste audio bestand</div>
			  <div className="momentio-tips-content-desc">MP4 en WAV zijn twee van de meest populaire bestandsindelingen voor geluidsopnames die gewone muziekspelers ondersteunen.</div>
            </div>
          </div>
		  </div>
		  <div className="momentio-blog-link">Naar ons blog</div>
        </div>
		<div className="momentio-home-begin">
		<div className="momentio-home-begin-title">AANMELDEN</div>
		<div className="momentio-home-begin-desc">Begin vandaag nog met uw persoonlijk archief!</div>
		<div ><button className="primary-button-yellow momentio-home-begin-btn">Meld je nu aan </button></div>
		<div className="momentio-home-begin-link">Bekijk eerst onze pakketen</div>
		
		</div>
		
      </div>
)

export default HomePage;
