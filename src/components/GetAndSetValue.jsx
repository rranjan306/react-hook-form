import React from 'react'
import { useForm } from 'react-hook-form'

const GetAndSetValue = () => {
  const { register, getValues, setValue, formState: {errors} } = useForm({
    defaultValues: {
      username: '',
      email: '',
      channel: '',
      age: 0,
      dob: new Date()
    }
  });

  const handleGetValues = () => {
    // console.log(getValues(['age', 'dob']));
    console.log(getValues('age'));
  }

  const handleSetValues = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await resp.json();
      setValue("username", "", {
        shouldValidate: true,
        shouldTouch: true,
        shouldDirty: true
      })
  }

  return (
    <div>
      <form>
      <div className='form-control'>
          <label htmlFor='username'>Username: </label>
          <input type="text" id='username' {...register('username', {
            disabled: 'admin' === 'user' ? true : false
          })} />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input type="email" id='email' {...register('email', {
            disabled: true
          })} />
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel: </label>
          <input type="text" id='channel' {...register('channel')} />
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

          <button type='button' onClick={handleGetValues}>Get Form Values</button>
          <button type='button' onClick={handleSetValues}>Set Form Values</button>
      </form>
    </div>
  )
}

export default GetAndSetValue