import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    
    const submitHandler =(data)=>{
        console.log(data)
    }

    const validationSchema = {
        refCodeValidator:{
            required:{
                value:true,
                message:"ref code is required*"
            },

            validate:(params)=>{
                //console.log("parasm...",params)
                return params=="insta" || "invalid ref code"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>REF CODE</label>
                <input type='text' {...register("refcode",validationSchema.refCodeValidator)}></input>
                {errors.refcode && errors.refcode.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
