import { DevTool } from '@hookform/devtools';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const YouTubeForm = () => {
  const { register, control, handleSubmit, formState: {errors} } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log('form has been submitted');
  };
  
  return (
    <div>
      <h1>YouTube Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor='username'>Username: </label>
          <input type="text" id='username' {...register('username', {
            required: {
              value: true,
              message: 'Username is required'
            },
            validate: {
              alreadyExist: (fieldValue) => {
                return fieldValue === 'rranjan306' ? 'Username is already taken' : null
              }
            }
          })} />
          <p className='error'>{errors.username?.message}</p>
        </div>

        <div>
          <label htmlFor='email'>Email: </label>
          <input type="email" id='email' {...register('email', {
            required: {
              value: true,
              message: "Email is required"
            },
            pattern: {
              value: new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'),
              message: "Invalid Email"
            },
            validate: {
              isEmailUsed: async (fieldValue) => {
                const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const data = await resp.json();
                return fieldValue === data.email ? "Email is already taken" : null
              }
            }
          })} />
           <p className='error'>{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor='channel'>Channel: </label>
          <input type="text" id='channel' {...register('channel', {
            required: {
              value: true,
              message: "Channel is required"
            }
          })} />
           <p className='error'>{errors.channel?.message}</p>
        </div>
        <button type='submit'>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default YouTubeForm