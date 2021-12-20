import React from 'react'
import ImageGallery from 'react-image-gallery';

const Photos=()=>{

    const images2 = [
        {
            original: '../resources/cars/car_1.jpg',
            thumbnail: '../resources/cars/car_1.jpg',
            originalHeight:'400px',
            thumbnailHeight:'60px'
        },
        {
            original: '../resources/cars/car_2.jpg',
            thumbnail: '../resources/cars/car_2.jpg',
            originalHeight:'400px',
            thumbnailHeight:'60px'
        },
        {
            original: '../resources/cars/car_3.jpg',
            thumbnail: '../resources/cars/car_3.jpg',
            originalHeight:'400px',
            thumbnailHeight:'60px'
        },
        {
            original: '../resources/cars/car_4.jpg',
            thumbnail: '../resources/cars/car_4.jpg',
            originalHeight:'400px',
            thumbnailHeight:'60px'
        },
        {
            original: '../resources/cars/car_5.jpg',
            thumbnail: '../resources/cars/car_5.jpg',
            originalHeight:'400px',
            thumbnailHeight:'60px'
        },
        {
            original: '../resources/cars/car_7.jpg',
            thumbnail: '../resources/cars/car_7.jpg',
            originalHeight:'400px',
            thumbnailHeight:'60px'
        },
    ];

    return(
        <div id="photos" className="photosCtn">
            <h3 id="photosName">Фото наших работ</h3>
            <p style={{"font-family":"Montserrat","font-weight":"600"}}>Чистота и блеск</p>
            <ImageGallery  showThumbnails={false} items={images2}/>

        </div>
    );
}
export default Photos;