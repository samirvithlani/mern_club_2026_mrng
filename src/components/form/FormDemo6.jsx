import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo6 = () => {
    const {register,handleSubmit,control}=useForm({defaultValues:{"medicine":[{"name":"",dosage:0,freq:0}]}})
    //fields = defaultvalue array
    //append function
    const {fields,append,remove}=useFieldArray({control,name:"medicine"})
    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo6</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            {
                fields.map((_,index)=>{
                    return <div>
                        
                            <label>NAME</label>
                            <input type='text'{...register(`medicine.${index}.name`)}></input>
                        
                        
                            <label>DOSAGE</label>
                            <input type='text' {...register(`medicine.${index}.dosage`)}></input>
                        
                        
                            <label>FREQ</label>
                            <input type='text' {...register(`medicine.${index}.freq`)}></input>
                        
                    </div>
                })
            }
            <div>
                <input type='submit'></input>
            </div>
        </form>
        <button onClick={()=>{append({"name":"",dosage:0,freq:0})}}>ADD MORE</button>
    </div>
  )
}
