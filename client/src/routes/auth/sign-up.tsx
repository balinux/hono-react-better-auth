import { createFileRoute } from '@tanstack/react-router'
import { Key, Mail, User } from 'lucide-react'

export const Route = createFileRoute('/auth/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex items-center justify-center bg-base-100 pt-12'>
      <div className='card bg-base-300 max-w-md'>
        <div className='card-body'>
          <div className='card-title text-3xl'>Create Account</div>
          <p className='text-base-content/70 mt-2'>Sign up to get started</p>
          <form action="">
            {/* full name */}
            <div className='mt-2'>
              <label className="input validator">
                <User />
                <input
                  id='full-name'
                  type="text"
                  required
                  placeholder="Full Name"
                  pattern="[A-Za-z][A-Za-z\-]*"
                  minLength={3}
                  maxLength={30}
                  title="Only letters or dash"
                />
              </label>
              <p className="validator-hint hidden">
                Must be 3 to 30 characters only letters or dash
              </p>
            </div>

            {/* email */}
            <div className='mt-2'>
              <label className="input validator">
                <Mail />
                <input type="email" id='email' placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">Enter valid email address</div>
            </div>

            {/* password */}
            <div className='mt-2'>
              <label className="input validator">
                <Key />
                <input
                  id='password'
                  type="password"
                  required
                  placeholder="Password"
                  minLength={8}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
              </p>
            </div>
            {/* confirm password */}
            <div className='mt-2'>
              <label className="input validator">
                <Key />
                <input
                  id='confirm-password'
                  type="password"
                  required
                  placeholder="Confirm Password"
                  minLength={8}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
              </p>
            </div>

            <div className="card-actions justify-start mt-5">
              <button className="btn btn-primary w-full">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
