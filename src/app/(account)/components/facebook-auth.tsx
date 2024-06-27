import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function FacebookAuth() {
  return (
    <Button variant="ghost" className="bg-[#1877f2] rounded-lg text-white text-sm h-[50px]">
      <div className="flex items-center gap-x-2.5">
        <Image alt="facebook-icon" src="/assets/icons/facebook-icon.png" width={30} height={30} />
        <span>Continue with Facebook</span>
      </div>
    </Button>
  )
}
