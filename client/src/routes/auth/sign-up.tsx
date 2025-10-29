import { useState } from 'react'
import { Link, createFileRoute, useRouter } from '@tanstack/react-router'
import { CircleX, Key, Mail, User } from 'lucide-react'
import { authClient } from '../../../lib/auth-client'

export const Route = createFileRoute('/auth/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {

  const router = useRouter()

  // session handler
  const { data: session } = authClient.useSession()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // navigate if session exists
  if (session) {
    router.navigate({
      to: '/todos'
    })
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setError('')
    setLoading(true)

    try {
      authClient.signUp.email({
        name: fullName,
        email,
        password,
      })
      router.navigate({
        to: '/todos'
      })
    } catch (err) {
      setError('An unexpected error occurred')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center bg-base-100 pt-12'>
      <div className='card bg-base-300 max-w-md'>
        <div className='card-body'>
          <div className='card-title text-3xl'>Create Account</div>
          <p className='text-base-content/70 mt-2'>Sign up to get started</p>

          {error && (
            <div role='alert' className='alert alert-error'>
              <CircleX />
              <span>Error: {error}</span>
            </div>
          )}
          <form onSubmit={handleSubmit}>
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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={loading}
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
                <input type="email"
                  id='email'
                  placeholder="mail@site.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading}
                />
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
              </p>
            </div>

            <div className="card-actions justify-start mt-5">
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm text-primary"></span>
                    <span className='ml-2'>Signing up...</span>
                  </>
                ) : (
                  'Sign Up'
                )}
              </button>
            </div>

            {/* already have an account */}
            <div className='mt-6 text-center'>
              <p className='text-base-content/70'>
                Already have an account?
                <Link to='/auth/sign-in' className='link link-primary ml-1'>
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
