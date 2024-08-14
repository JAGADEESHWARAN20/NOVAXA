import React from 'react';





export const SignUpForm = () => (
  <div className='w-[500px] h-[800px] bg-gray-100 flex items-center justify-center'>
    <div className='max-w-md w-full space-y-8'>
      <div>
        <h2 className='mt-6 text-center text-[100px] font-extrabold text-gray-900'>
          Sign Up
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Or{' '}
          <a href='#' className='font-medium text-indigo-600 text-[25px] hover:text-indigo-500'>
            already have an account? Sign in
          </a>
        </p>
      </div>
      <form className='mt-8 space-y-6' action='#' method='POST'>
        <input type='hidden' name='remember' defaultValue='true' />
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <label htmlFor='first-name' className='sr-only'>
              First Name
            </label>
            <input
              id='first-name'
              name='firstName'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='First Name'
            />
          </div>
          <div>
            <label htmlFor='last-name' className='sr-only'>
              Last Name
            </label>
            <input
              id='last-name'
              name='lastName'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Last Name'
            />
          </div>
          <div>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Email address'
            />
          </div>
          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Password'
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
            />
            <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
              Remember me
            </label>
          </div>

          <div className='text-sm'>
            <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
);


export const BasicForm = () => (
  <div className='form-container bg-black p-8'>
    <div className="flex w-full justify-between">
    <h2 className='text-[70px] text-white mb-4'>Basic Form</h2>
    <button className='text-white'>copy code</button>
    </div>
  <form>
    <div className='mb-4'>
      <label htmlFor='name' className='block text-gray-100  text-[30px] font-bold mb-2'>
        Name
      </label>
      <input
        type='text'
        id='name'
        placeholder='Enter your name'
        className=" border rounded w-full py-2 px-3 text-gray-700 font-['poppins'] focus:outline-none"
      />
    </div>
    <div className='mb-6'>
      <label htmlFor='email' className='block text-gray-100 text-[30px] font-bold mb-2'>
        Email Address
      </label>
      <input
        type='email'
        id='email'
        placeholder='Enter your email address'
        className=" border rounded w-full py-2 px-3 text-gray-700 font-['poppins'] focus:outline-none "      />
    </div>
    <button
      type='submit'
      className='bg-red-600 hover:bg-red-800 duration-100 text-white text-3xl font-bold py-3 px-4 rounded '>
      Submit
    </button>
  </form>
</div>
);
  
