import React from 'react';
import { joiResolver } from "@hookform/resolvers/joi"
import * as Joi from 'joi';
import { useForm } from 'react-hook-form';

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: Joi.string().email({tlds: false})
})

const JoiIntegrationSchema = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: joiResolver(schema)
  });

  const onSubmit = (data) => {
    console.log('form has been submitted');
  };

  return (
    <div>
      <h2>Joi Integration Schema Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor='username'>Username: </label>
        <input type="text" id='username' {...register('username')} />
        <p className='error'>{errors.username?.message}</p>
      </div>

      <div>
        <label htmlFor='password'>Password: </label>
        <input type="text" id='password' {...register('password')} />
        <p className='error'>{errors.password?.message}</p>
      </div>

      <div>
        <label htmlFor='email'>Email: </label>
        <input type="text" id='email' {...register('email')} />
        <p className='error'>{errors.email?.message}</p>
      </div>

      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default JoiIntegrationSchema
