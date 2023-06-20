import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

const OverlayOne = () => (
  <ModalOverlay
    bg="rgba(0, 0, 0, 0.6)"
    zIndex={999}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Image
      src="https://example.com/image.jpg" // Replace with your image URL
      alt="Overlay Image"
      maxW="80%"
      maxH="80%"
      objectFit="contain"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    />
  </ModalOverlay>
);

const OverlayTwo = () => (
  <ModalOverlay
    bg="none"
    backdropFilter="auto"
    backdropInvert="80%"
    backdropBlur="2px"
  />
);

const CustomModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Use Overlay one
      </Button>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Use Overlay two
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Custom backdrop filters!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
