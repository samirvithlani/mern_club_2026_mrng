import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const {register,handleSubmit} = useForm()
    const [data, setdata] = useState({})
    //register --> input handle ..
    //handleSubmit --> submit -->end submit

    const submitHandler = (data)=>{
        //alert("subbmited")
        console.log("data...",data)
        setdata(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text'{...register("name")}></input>
            </div>
            <div>
                <label>GENDER</label>
                <br></br>
                MALE : <input type='radio' {...register("gender")} value="male"></input>
                FEMALE : <input type='radio' {...register("gender")} value="female"></input>                
            </div>
            <div>
                <label>COUTRY</label>
                <select {...register("country")}>
                    <option value="india">INDIA</option>
                    <option value="china">CHINA</option>
                    <option value="usa">USA</option>
                </select>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        <div>
            <h1>OUTPUT</h1>
            <h1>NAME = {data.name}</h1>
            <h1>Country = {data.country}</h1>
            <h1>GENDER = {data.gender}</h1>
            
        </div>
    </div>
  )
}

