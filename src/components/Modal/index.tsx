import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useTheme } from "styled-components";
import { Close, Content, Overlay } from "./styles";
type ModalProps = {
  title: string;
  children: React.ReactNode;
  trigger: React.ReactNode;
};

function Modal({ children, trigger, title }: ModalProps) {
  const { colors } = useTheme();
  return (
    <Dialog.Root>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>
      <Dialog.Overlay asChild>
        <Overlay />
      </Dialog.Overlay>
      <Dialog.Portal>
        <Dialog.Content asChild>
          <Content>
            <Dialog.Title>{title}</Dialog.Title>
            {children}
            <Dialog.Close asChild>
              <Close>
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
