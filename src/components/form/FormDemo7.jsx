import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {

    const{register,handleSubmit,formState:{errors},watch}=useForm({mode:"all"})
    const data = [
        {
            name:"india",
            states:["guj","mah","goa"]
        },{
            name:"usa",
            states:["california","new york","texas"]
        }   
    ]
    const password = watch("password")
    const countryName = watch("country")
    console.log(password)
    console.log(countryName)

    const validationSchema = {
        passwordValidator:{
            required:{
                value:true,
                message:"password is required"
            }
        },
        confirmpasswordValidator:{
            required:{
                value:true,
                message:"confirmpassword is required"
            },
            validate:(params)=>{

                return password == params || "pasword does not match"
            }
        }
    }
    const submitHandler = (data)=>{
        console.log(data)
    }



  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 7</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>PASSWORD</label>
            <input type='text' {...register("password",validationSchema.passwordValidator)}></input>
            {errors.password?.message}
        </div>
        <div>
            <label>CONFIRM PASSWORD</label>
            <input type='text' {...register("confirmpassword",validationSchema.confirmpasswordValidator)}></input>
            {errors.confirmpassword?.message}
        </div>
        <div>
            <label>SELECT COUNTRY</label>
            <select {...register("country")}>
                <option disabled value="">SELECT COUNTRY</option>
                {
                    
                    data.map((c)=>{
                        return <option value={c.name}>{c.name}</option>
                    })
                }
            </select>
            <select {...register("states")}>
                <option disabled value="">SELECT STATE</option>
                {
                    data.find((d)=>d.name == countryName)?.states.map((s)=>{
                        return <option value={s}>{s}</option>
                    })
                }
            </select>
        </div>
        <div>
            <input type='submit'></input>
        </div>
        </form>
    </div>
  )
}
