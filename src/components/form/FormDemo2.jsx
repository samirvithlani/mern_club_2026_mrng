import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log("errors",errors)

    const [data, setdata] = useState({})
    //register --> input handle ..
    //handleSubmit --> submit -->end submit

    const submitHandler = (data)=>{
        //alert("subbmited")
        console.log("data...",data)
        setdata(data)
    }

    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required*"
            },
        },
        genderValidator:{
            required:{
                value:true,
                message:"gender is required*"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                {/* <input type='text'{...register("name",{required:{value:true,message:"name is required"}})}></input> */}
                <input type='text'{...register("name",validationSchema.nameValidator)}></input>
                {errors.name && errors.name.message}
            </div>
            <div>
                <label>GENDER</label>
                <br></br>
                MALE : <input type='radio' {...register("gender",validationSchema.genderValidator)} value="male"></input>
                FEMALE : <input type='radio' {...register("gender",validationSchema.genderValidator)} value="female"></input>                
                {errors.gender && errors.gender.message}
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

