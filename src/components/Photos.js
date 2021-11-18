import React from 'react'

const Photos=()=>{
    return(
        <div className="photosCtn">
            <p id="photosName">Фото наших работ</p>
            <p style={{"font-family":"Montserrat","font-weight":"600"}}>Чистота и блеск</p>
            <div className="photos">
                <img src="../resources/cars/car_1.jpg"/>
                <img src="../resources/cars/car_2.jpg"/>
                <img src="../resources/cars/car_3.jpg"/>
                <img src="../resources/cars/car_4.jpg"/>
                <img src="../resources/cars/car_5.jpg"/>
                <img src="../resources/cars/car_7.jpg"/>
            </div>
            <button className="morePhoto">Больше фото</button>

        </div>
    );
}
export default Photos;