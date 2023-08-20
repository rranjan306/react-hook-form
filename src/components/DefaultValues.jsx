import React from 'react'
import { useForm } from 'react-hook-form'

const DefaultValues = () => {
  // Example - 1
  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      username: 'rjan354',
      email: 'sample@gmail.com',
      channel: 'lordAI',
      address: {
        village: '',
        city: '',
        postal: '',
        state: ''
      },
      phoneNumbers: ["", ""]
    }
  });

  //Example - 2
  // const { register, handleSubmit } = useForm({
  //   defaultValues: async() => {
  //     const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
  //     const data = await resp.json();
  //     return {
  //       username: data.username,
  //       email: data.email,
  //       channel: data.website
  //     }
  //   }
  // });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Default Values</h1>
       <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-control'>
          <label htmlFor='username'>Username: </label>
          <input type="text" id='username' {...register('username')} />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input type="email" id='email' {...register('email')} />
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel: </label>
          <input type="text" id='channel' {...register('channel')} />
        </div>

        <div className='form-control'>
          <label htmlFor='village'>Village: </label>
          <input type="text" id='village' {...register('address.village')} />
        </div>

        <div className='form-control'>
          <label htmlFor='city'>City: </label>
          <input type="text" id='city' {...register('address.city')} />
        </div>

        <div className='form-control'>
          <label htmlFor='postal'>Postal: </label>
          <input type="text" id='postal' {...register('address.postal', {
            required: {
              value: true,
              message: "Postal Code is required"
            }
          })} />
          <p className='error'>{errors.address?.postal?.message}</p>
        </div>

        <div className='form-control'>
          <label htmlFor='state'>State: </label>
          <input type="text" id='state' {...register('address.state')} />
        </div>

        <div className='form-control'>
          <label htmlFor='primary-number'>Primary Phone Number: </label>
          <input type="text" id='state' {...register('phoneNumbers[0]')} />
        </div>

        <div className='form-control'>
          <label htmlFor='secondary-number'>Secondary Phone Number: </label>
          <input type="text" id='secondary-number' {...register('phoneNumbers[1]')} />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default DefaultValues