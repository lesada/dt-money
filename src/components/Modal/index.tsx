import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useTheme } from "styled-components";
import { Close, Content, Overlay } from "./styles";
type ModalProps = {
  title: string;
  children: React.ReactNode;
  trigger: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ children, trigger, title, open, setOpen }: ModalProps) {
  const { colors } = useTheme();
  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild type="button" onClick={() => setOpen(true)}>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Overlay asChild>
        <Overlay onClick={() => setOpen(false)} />
      </Dialog.Overlay>
      <Dialog.Portal>
        <Dialog.Content asChild>
          <Content>
            <Dialog.Title>{title}</Dialog.Title>
            {children}
            <Dialog.Close asChild>
              <Close onClick={() => setOpen(false)}>
                <X size={24} color={colors.gray[500]} />
              </Close>
            </Dialog.Close>
          </Content>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
