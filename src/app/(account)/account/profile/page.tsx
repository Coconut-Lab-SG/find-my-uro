import { cookies } from 'next/headers'

export default function Profile() {
  const storedCookie = cookies()

  return (
    <div className="mobileL:min-w-[576px] max-w-[1140px] mx-auto px-5">
      <div className="w-full mb-5 mobileL:w-1/2 mobileL:mx-auto">
        <h1>Profile page</h1>
      </div>
    </div>
  )
}
