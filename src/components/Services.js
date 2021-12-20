import React from "react";

const Services=()=>{
    return(
        <div id="services" className="servicesCtn">
            <h3 style={{"color":"white","font-family":"Rubik","letter-spacing": "0.1em",
                "font-weight":"800","font-size":"30px","text-transform":"uppercase","padding-top":"30px","padding-bottom":"10px"}}>
                Наши услуги</h3>
            <div className="services container">
                <div className="serviceItem">
                    <img src="../resources/cars/car_2.jpg"/>
                    <p >Мойка кузова <br></br>автомобиля</p>
                </div>
                <div className="serviceItem" >
                    <img src="../resources/cars/car_3.jpg"/>
                    <p >Профессиональная <br></br> полировка</p>
                </div>
                <div className="serviceItem">
                    <img src="../resources/cars/car_4.jpg"/>
                    <p >Бережная химчистка <br></br> салона</p>
                </div>
            </div>
            <a href="../resources/ПРАЙС_ЛИСТ.docx" download="" id="services" >Полный перечень услуг</a>
        </div>
    );
}
export default Services;