import { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

export default function AccountLayout({ children }: Props) {
  return (
    <div className="mobileL:min-w-[576px] max-w-[1140px] mx-auto px-5">
      <div className="w-full mb-5 mobileL:w-1/2 mobileL:mx-auto">{children}</div>
    </div>
  )
}
