import React from 'react'
import { useForm } from 'react-hook-form'


const HandleErrors = () => {
  const { register, handleSubmit, reset, trigger, formState: {errors, isDirty, isValid} } = useForm({
    defaultValues: {
      username: '',
      email: '',
      channel: '',
      age: 0,
      dob: new Date()
    },
    mode: "onBlur"
  });

  const onSubmit = (formData) => {
    console.log(formData);
  }

  const onError = (errors) => {
    console.log(errors);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className='form-control'>
          <label htmlFor='username'>Username: </label>
          <input type="text" id='username' {...register('username', {
            required: "Username is required"
          })} />
          <p className='error'>{errors.username?.message}</p>
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input type="email" id='email' {...register('email')} />
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel: </label>
          <input type="text" id='channel' {...register('channel', {
            required: {
              value: true,
              message: "Channel is required"
            }
          })} />
          <p className='error'>{errors.channel?.message}</p>
        </div>

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

          <button disabled={!isDirty || !isValid} type='submit'>Submit</button>
          <button type='button' onClick={() => reset()}>Reset</button>
          <button type='button' onClick={() => trigger()}>Validate All Field</button>
          <button type='button' onClick={() => trigger('username')}>Validate Single Field</button>
      </form>
    </div>
  )
}

export default HandleErrors