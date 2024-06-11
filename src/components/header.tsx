import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div style={{ background: "linear-gradient(90.49deg, #243b6c 0.28%, #432f91 96.69%)" }}>
      <div className="flex items-center justify-between max-w-[1140px] mx-auto text-white py-3">
        <div className="flex gap-x-2">
          <Link href='/#' className="text-2xl italic font-semibold text-white hover:text-white">Find My Uro!</Link>
          <span className="bg-[#f6a404] text-xs text-center px-1 text-[#432f91] self-end italic font-bold rounded-sm">BETA</span>
        </div>
        <Link href='/#'>
          <Image className="rounded-full" alt="user-avatar" src='/assets/icons/user-avatar.webp' width={40} height={40} />
        </Link>
      </div>
    </div>
  )
}