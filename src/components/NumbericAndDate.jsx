import React from 'react'
import { useForm } from 'react-hook-form'


const NumbericAndDate = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
     age: 0,
     dob: new Date()
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className='form-control'>
        <label htmlFor='age'>Age: </label>
        <input type="number" id='age' {...register('age', {
          valueAsNumber: true,
          required: {
            value: true,
            message: "Age is required"
          }
        })} />
        <p className='error'>{errors?.age?.message}</p>
      </div>

      <div className='form-control'>
        <label htmlFor='dob'>Date Of Birdth: </label>
        <input type="date" id='dob' {...register('dob', {
          valueAsDate: true,
          required: {
            value: true,
            message: "DOB is required"
          }
        })} />
        <p className='error'>{errors?.dob?.message}</p>
      </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default NumbericAndDate