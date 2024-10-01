import Link from 'next/link'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex flex-col w-full items-center space-y-6'>
      <SignIn />
      <div>
        Not an admin? Check out the public <Link href="/">resources page</Link>.
      </div>
    </div>
  )
}
