import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#eee]">
      <div className="flex flex-col gap-y-5 max-w-[1140px] py-5 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <span>© 2023 WPE Digital, Inc.</span>
            <Link href='/terms-of-use' className="hover:text-[#432f91]">Terms</Link>
            <Link href='/privacy' className="hover:text-[#432f91]">Privacy</Link>
            <Link href='/#' className="hover:text-[#432f91]">FAQ</Link>
            <Link href='/#' className="hover:text-[#432f91]">Sitemap</Link>
          </div>
          <Image alt="hipaa-badge" src='/assets/images/HIPAA-badge.webp' width={100} height={35} />
        </div>

        <p className="text-xs leading-5">The contents herein are subject to change without prior notice. All content made available on or via this website is for information purposes only and does not constitute or is not intended to be a substitute for professional medical advice, diagnosis or treatment.
          Please consult a physician or any other health care professional for your specific health care and/or medical needs or concerns.
          The provider of this website, does not recommend or endorse any particular healthcare provider whose information or ratings appear on this website.
          The information herein is not designed or intended as a promotion or advertisement of any kind.
        </p>

      </div>
    </div>
  )
}