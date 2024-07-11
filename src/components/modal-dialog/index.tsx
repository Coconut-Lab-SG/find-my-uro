import { ReactNode } from 'react'
import { Dialog, DialogContent } from '../ui/dialog'

type ModalDialogProps = {
  isOpen: boolean
  setOpen: (value: boolean) => void
  title: string
  children: ReactNode
}

export function ModalDialog({ isOpen, title, setOpen, children }: ModalDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="max-w-[500px] max-h-dvh py-4 flex flex-col justify-center bg-transparent rounded-2xl border-0 gap-0 px-6">
        {/* Modal Title */}
        <div
          className="flex justify-center w-full text-center p-2.5 rounded-t-2xl"
          style={{ background: 'linear-gradient(90.49deg, #243b6c 0.28%, #432f91 96.69%)' }}
        >
          <span className="text-2xl italic font-medium text-white">{title}</span>
        </div>
        {/* Modal Content */}
        <div className="flex bg-white rounded-b-2xl overflow-y-auto">{children}</div>
      </DialogContent>
    </Dialog>
  )
}
