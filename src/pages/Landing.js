import React from "react";
import {
  Box,
  chakra,
  useColorModeValue,
  Icon,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import landingPage_lottie from "../Assests/landingPage_lottie.json";
import { Link } from "react-router-dom";

const Landing = () => {
  const bg = useColorModeValue("white", "gray.800");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pos="relative" overflow="hidden" bg={bg} mt={10}>
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{
            base: 8,
            sm: 16,
            md: 20,
            lg: 28,
            xl: 32,
          }}
          maxW={{
            lg: "2xl",
          }}
          w={{
            lg: "full",
          }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{
              base: "none",
              lg: "block",
            }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{
              base: "7xl",
            }}
            px={{
              base: 4,
              sm: 6,
              lg: 8,
            }}
            mt={{
              base: 10,
              sm: 12,
              md: 16,
              lg: 20,
              xl: 28,
            }}
          >
            <Box
              w="full"
              textAlign={{
                sm: "center",
                lg: "left",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{
                  base: "4xl",
                  sm: "5xl",
                  md: "5xl",
                }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color="gray.900"
                _dark={{
                  color: "white",
                }}
              >
                <chakra.span
                  display={{
                    base: "block",
                    xl: "inline",
                  }}
                >
                  Calculate your{" "}
                </chakra.span>
                <chakra.span
                  display={{
                    base: "block",
                    lg: "inline",
                  }}
                  w="full"
                  bgClip="text"
                  bgGradient="linear(to-r, green.400,purple.500)"
                  fontWeight="bold"
                >
                  Income Tax and House Rent Allowance
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5,
                }}
                fontSize={{
                  sm: "lg",
                  md: "xl",
                }}
                maxW={{
                  sm: "xl",
                }}
                mx={{
                  sm: "auto",
                  lg: 0,
                }}
                color="gray.500"
              >
                One stop solution for all your tax calculation.
              </chakra.p>
              <Box
                mt={{
                  base: 5,
                  sm: 8,
                }}
                display={{
                  sm: "flex",
                }}
                justifyContent={{
                  sm: "center",
                  lg: "start",
                }}
                fontFamily="fantasy"
              >
                <Box rounded="full" shadow="md">
                  <chakra.a
                    onClick={onOpen}
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{
                      base: "md",
                      md: "lg",
                    }}
                    rounded="full"
                    textColor={"blackAlpha.1000"}
                    bgGradient="linear(to-r, green.400,purple.500)"
                    _hover={{
                      bg: "blue.500",
                    }}
                    px={{
                      base: 8,
                      md: 10,
                    }}
                    py={{
                      base: 3,
                      md: 4,
                    }}
                    cursor="pointer"
                  >
                    Get started
                  </chakra.a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{
          lg: "absolute",
        }}
        top={{
          lg: 0,
        }}
        bottom={{
          lg: 0,
        }}
        right={{
          lg: 0,
        }}
        w={{
          lg: "50%",
        }}
        border="solid 1px transparent"
      >
        <Box w="full" fit="cover" loading="lazy">
          <Lottie animationData={landingPage_lottie} />
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What do you want to Calculate?</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} gap={"20px"} justifyContent={"space-around"} >
            <Link to="/houserent">
            <Box
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
              px={{
                base:4,
                md:5
              }}
              py={{
                base: 3,
                md: 4,
              }}
              cursor="pointer"
              href="/houserent"
            >
              H.R Allowance
            </Box>
            </Link>
            
            <Link to="/incometax">
              <Box
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
                px={{
                  base:4,
                  md:5
                }}
                py={{
                  base: 3,
                  md: 4,
                }}
                cursor="pointer"
              >
                Income tax
              </Box>
            </Link>
          </ModalBody>
          <ModalFooter justifyContent={"center"} textAlign={"center"}>
            No need to worry its's{" "}
            <span style={{ color: "forestgreen", marginLeft: "4px" }}>
              free
            </span>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Landing;
