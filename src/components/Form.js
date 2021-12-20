import React from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function Form(){
    const [email,setEmail] = React.useState("");
    const [name,setName]=React.useState("");
    const[phone,setPhone]=React.useState("");
    const[isSent,setIsSent]=React.useState(false);
    const[isClicked,setIsClicked]=React.useState(false);
    const[textButton,setTextButton]=React.useState('Отправить')
    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsSent(true)
        setIsClicked(true)
        setTextButton('Отправлено')
    }

    const handleOnChange = value=>{
        setPhone(value)
    }
    return(
        <div id="form" className="formCtn">
            <h3 style={{"font-family":"Rubik","font-weight":"900","color":"black",
                "text-transform":"uppercase"}}>Оставьте ваши контакты</h3>
            <form className="formApply" onSubmit={handleSubmit}>
                <br></br>
                <input
                    placeholder="Название компании"
                    name="email"
                    value = {name}
                    onChange = {e=>setName(e.target.value)}
                    type="text"
                    required></input>
                <PhoneInput
                    id="phoneInput"
                    name="phone"
                    placeholder="Номер телефона"
                    country={'ru'}
                    disableDropdown={true}
                    disableSearchIcon={true}
                    onChange={handleOnChange}
                    onlyCountries={['ru']}
                    value={phone}
                    inputProps={{
                        name:"phone",
                        country:"ru",
                        require:true,
                        placeholder:"Номер телефона"
                    }}
                    inputStyle={{
                        "font-family":"Montserrat",
                        "padding-left":"10px",
                        "border":"none",
                        "box-shadow": "0px 6px 50px 4px rgba(0, 0, 0, 0.1)"
                    }}
                    containerStyle={{
                        "font-family":"Montserrat",
                        "width":"310px"

                    }}
                    required
                />
                <input
                    name="email"
                    placeholder="Email"
                    value = {email}
                    onChange = {e=>setEmail(e.target.value)}
                    type="email"
                    required></input>
                <button style={{backgroundColor:isClicked?'#195678':'#3491C5',disabled:isClicked}} type="submit">{textButton}</button>
            </form>
        </div>

    );
}
export default Form;