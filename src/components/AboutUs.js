import React from "react";

const AboutUs=()=>{
    return(
        <div className="aboutCtn">
            <div className="about">
                <div className="aboutText">
                    <p id="oneAbout">Качественная<br></br> мойка</p>
                    <p style={{color:"#10A6E7"}}>В центре<br></br> Москвы</p>
                </div>
                <img className="aboutPhoto" src="../resources/cars/car_1.jpg"/>
            </div>
            <div className="about-2">
                <div className="row-1">
                    <div className="aboutItem">
                        <img className="aboutIcon" src="../resources/icons_service/icon-1.png"/>
                        <p style={{"font-family":"Rubik","font-weight":"900","word-spacing":"5px"}}>Быстро и с блеском!</p>
                        <p style={{"font-family":"Montserrat","font-weight":"400"}}>Мы ценим ваше время</p>
                    </div>
                    <div className="aboutItem">
                        <img className="aboutIcon" src="../resources/icons_service/icon-2.png"/>
                        <p style={{"font-family":"Rubik","font-weight":"900","word-spacing":"5px"}}>Широкий спектр услуг</p>
                        <p style={{"font-family":"Montserrat","font-weight":"400"}}>Моем, чистим, полируем!</p>
                    </div>
                    <div className="aboutItem">
                        <img className="aboutIcon" src="../resources/icons_service/icon-3.png"/>
                        <p style={{"font-family":"Rubik","font-weight":"900","word-spacing":"5px"}}>Эффективные средства</p>
                        <p style={{"font-family":"Montserrat","font-weight":"400"}}>Мы не экономим на качестве и экологичности средств для нашей работы</p>
                    </div>
                </div>
                <div className="row-2">
                    <div className="aboutItem">
                        <img className="aboutIcon" src="../resources/icons_service/icon-4.png"/>
                        <p style={{"font-family":"Rubik","font-weight":"900","word-spacing":"5px"}}>Опытные специалисты</p>
                        <p style={{"font-family":"Montserrat","font-weight":"400"}}>Наша команда готова к любым уровням сложности работ!</p>
                    </div>
                    <div className="aboutItem">
                        <img className="aboutIcon" src="../resources/icons_service/icon-5.png"/>
                        <p style={{"font-family":"Rubik","font-weight":"900","word-spacing":"5px"}}>Результат 100%</p>
                        <p style={{"font-family":"Montserrat","font-weight":"400"}}>Взгляните на фото наших работ!</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default AboutUs;