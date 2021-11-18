import React from 'react'

const Welcome=()=>{
    return(
        <div className="welcomeCtn">
            <div className="welcome">
                <p style={{"font-family":"Rubik","font-weight":"900","font-size":"25px","color":"white",
                "text-transform":"uppercase","text-align":"left"}}>
                    Всегда готовы <br></br> к сотрудничеству!</p>
                <p style={{"font-family":"Montserrat","font-weight":"400","font-size":"14px","color":"white",
                    "text-transform":"uppercase","text-align":"left"}}>Особые условия для <br></br> корпоративных клиентов</p>
            </div>

        </div>

    );
}
export default Welcome;