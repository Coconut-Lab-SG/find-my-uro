import { UserInformation } from './components/UserInformation'

export default function Profile() {
  return (
    <div className="mobileL:min-w-[576px] max-w-[1140px] mx-auto px-5">
      <div className="w-full mb-5 mobileL:w-1/2 mobileL:mx-auto">
        <UserInformation />
      </div>
    </div>
  )
}
