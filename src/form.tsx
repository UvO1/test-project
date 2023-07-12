import React, { useState } from "react";
import { useRef } from "react";
import FormStyle from "./form.module.css";
import { IMaskInput } from "react-imask";

function Form(){
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('+7 \(');
    const [temp, setTemp] = useState<string>('50');
    const [comment, setComment] = useState<string>('');
    const tempRef: any = useRef<HTMLInputElement>(null);
    const phoneRef: any = useRef<HTMLInputElement>(null);
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    } 
    const mask = [{
        mask: '+{7} (000) 000-00-00'
      }];
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    const handleTemperature = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemp(e.target.value);
        tempRef.current.style.background = 'linear-gradient(90deg, #FF69B4 ' + temp + '%, #5BAAF9 ' + temp + '%)';
    }
    const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }
    const handleSubmit = () => {
        const regex = new RegExp(/^(\+7)\s\(\d{3}\)\s\d{3}\-\d{2}-\d{2}$/);
        const formData = ((phone.search(regex) != -1) ? "OK. Phone is valid \n" : "ERROR. Phone isn't valid\n" ) + "Name: " + name + "\nPhone: " + phone + "\nTemperature: " + temp + "\n" + "Comment: " + comment;
        console.log(formData);
    }
    return(
        <form className={FormStyle.form}>
            <div>
                <div className={FormStyle.line}>
                    <label>name</label>
                    <input type="text" name="name" id="name" onChange={handleName}/>
                </div>
                <div className={FormStyle.line}>
                    <label>phone</label>
                    <IMaskInput type="text" name="phone" id="phone" ref = {phoneRef} mask={mask} placeholder="+7(xxx)xxx-xx-xx" onChange={handlePhone} />
                    
                </div>
                <div className={FormStyle.line}>
                    <label>temp</label>
                    <input type="range" name="temp" id="temp" ref = {tempRef} min={0} max={100} step={1} className={FormStyle.slider} onChange={handleTemperature}/>
                    <div className={FormStyle.legend}>
                        <span>hot</span>
                        <span>cold</span>
                    </div>
                </div>
                <div className={FormStyle.line}>
                    <label>comments</label>
                    <input type="text" name="comments" id="comments" onChange={handleComment}/>
                </div>
            </div>
            <div className={FormStyle.buttonline}>
                <div className={FormStyle.button} onClick={handleSubmit}><span>Call me</span></div>
                <div className={FormStyle.agreement}>By pressing “Send” button<br/>
I agree with <a>Privacy Policy</a></div>
            </div>
        </form>

    );
}
export default Form;