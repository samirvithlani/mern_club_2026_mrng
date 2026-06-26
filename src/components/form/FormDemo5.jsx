import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const [step, setstep] = useState(1)
    const {register,handleSubmit,formState:{errors},trigger}=useForm()
    const submitHandler = (data)=>{
        console.log(data)
    }
    const next = async()=>{
        var valid;
        if(step==1){
            valid = await trigger(["name","age"])
        }
       
        if(valid){
            setstep(step+1)
        }
    }
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required*"
            }
        },
        agealidator:{
            required:{
                value:true,
                message:"age is required*"
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:"email is required*"
            }
        },
        passwordValidator:{
            required:{
                value:true,
                message:"password is required*"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                step==1 && <>
                    <div>
                        <label>NAME</label>
                        <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                        {errors.name?.message}
                    </div>
                    <div>
                        <label>AGE</label>
                        <input type='text' {...register("age",validationSchema.agealidator)}></input>
                        {errors.age?.message}
                    </div>
                    <div>
                        <button onClick={()=>{next()}}>Next</button>
                    </div>
                </>
            }
            {
                step==2 && 
                <>
                    <div>
                        <label>email</label>
                        <input type='text' {...register("email",validationSchema.emailValidator)}></input>
                        {errors.email?.message}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='text' {...register("password",validationSchema.passwordValidator)}></input>
                        {errors.password?.message}
                    </div>
                    <div>
                        <button onClick={()=>{setstep(step-1)}}>Back</button>
                        <input type='submit'></input>
                    </div>
                </>
            }
        </form>
    </div>
  )
}
