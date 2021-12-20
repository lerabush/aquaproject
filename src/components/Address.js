import React from 'react'

const Address=()=>{
    return(
        <div className="footer">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A411f963b366250fac94530186bd35e16ecdfc1ec2bd4b22c0f467533b197a936&amp;source=constructor"
                width="100%" height="350" frameBorder="0"></iframe>
            <div id="address">
                <div id="addressCtn" className="addressCtn container">
                    <div className="address">
                        <p>Турчанинов переулок, 6с2</p>
                        <p>Ежедневно, без выходных<br></br>24/7</p>
                        <div className="linkInst">
                            <p>Следите в Instagram за нами!</p>
                            <a href="https://www.instagram.com/aquaprojekt/"><img  height="30px" src="../resources/inst_logo.png"/>
                            </a>
                        </div>
                    </div>
                    <a style={{"text-decoration":"none","color":"white"}} id="phone" href="tel:+79858008106">+79858008106</ a>
                </div>
            </div>

        </div>

    );
}
export default Address;