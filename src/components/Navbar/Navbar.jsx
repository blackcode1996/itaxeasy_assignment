import React from "react";
import {
  Button,
  HStack,
  Box,
  chakra,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
  CloseButton,
  //   Icon,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.700");
  const mobileNav = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <React.Fragment>
      <chakra.header
        // position={"fixed"}
        // top={0}
        // zIndex={999}
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={2}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Link to="/">
              <chakra.h1
                textAlign="center"
                fontSize="4xl"
                ml="2"
                display={{
                  base: "block",
                  lg: "inline",
                }}
                w="full"
                bgClip="text"
                bgGradient="linear(to-r, green.400,purple.500)"
                fontWeight="extrabold"
              >
                Itaxeasy
              </chakra.h1>
            </Link>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link to="/howitworks">
                <Button variant="ghost" size={"lg"}>
                  How it works
                </Button>
              </Link>

              <Button onClick={onOpen} bg="blue.200" size="lg">
                Get Started
              </Button>

              <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>What do you want to Calculate?</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody display={"flex"} gap={"20px"}>
                    <chakra.a
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize={"sm"}
                      fontWeight={"bold"}
                      rounded="full"
                      textColor={"blackAlpha.1000"}
                      bgGradient="linear(to-r, green.400,purple.500)"
                      _hover={{
                        bg: "blue.500",
                      }}
                      py={{
                        base: 3,
                        md: 4,
                      }}
                      cursor="pointer"
                      href="/houserent"
                    >
                      House Rent Allowance
                    </chakra.a>
                    <chakra.a
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize={"sm"}
                      fontWeight={"bold"}
                      rounded="full"
                      textColor={"blackAlpha.1000"}
                      bgGradient="linear(to-r, green.400,purple.500)"
                      _hover={{
                        bg: "blue.500",
                      }}
                      py={{
                        base: 3,
                        md: 4,
                      }}
                      cursor="pointer"
                      href="/incometax"
                    >
                      Income tax
                    </chakra.a>
                  </ModalBody>
                  <ModalFooter justifyContent={"center"} textAlign={"center"}>
                    No need to worry its's{" "}
                    <span style={{ color: "forestgreen", marginLeft: "4px" }}>
                      free
                    </span>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </HStack>

            <Button size={"lg"} onClick={toggleColorMode}>
              {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                zIndex={5}
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link to="/howitworks">
                  <Button w="full" variant="ghost">
                    How It Works
                  </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                  {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
