import React from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import "./styles.scss"
const ModalExample = ({
  className,
  isModalOpen,
  modalBody,
  modalToggle,
  headerText,
}) => {
  return (
    <div>
      <Modal isOpen={isModalOpen} toggle={modalToggle} className={className}>
        <ModalHeader toggle={modalToggle}>{headerText}</ModalHeader>
        <ModalBody>{modalBody}</ModalBody>
      </Modal>
    </div>
  )
}
export default ModalExample
