import * as Dialog from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/themes"

interface Props {
  trigger: JSX.Element
  children: JSX.Element
  title: string
}

const Modal = ({ title, trigger, children }: Props) => {
  return (
    <Dialog.Root >
      <Dialog.Trigger>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 fixed inset-0" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-6 focus:outline-none flex flex-col items-center gap-2"
        >
          <Dialog.Title>{title}</Dialog.Title>
          <div className="mt-4">
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal