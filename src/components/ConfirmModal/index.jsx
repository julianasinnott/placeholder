import { Check, X } from "phosphor-react";
import { StyledModalBackground, StyledIcon, StyledModal, StyledModalOptions, StyledModalTitle } from "./styles";

export function ConfirmModal({titleModal, closeModal, confirmDeleteItem, Xicon, horizontalPosition}) {

  return(
    <StyledModalBackground>
      <StyledModal horizontalPosition={horizontalPosition}>
        <StyledModalTitle>
          {titleModal}
        </StyledModalTitle>
        
          <StyledModalOptions>
            <StyledIcon
              onClick={confirmDeleteItem}
            >
              <Check size={40} />
            </StyledIcon>
            {
          Xicon &&
            <StyledIcon
              onClick={closeModal}
            >
              <X size={40} />
            </StyledIcon>
          }
          </StyledModalOptions>
      </StyledModal>
    </StyledModalBackground>
  )
}