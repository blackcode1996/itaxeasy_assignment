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
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.700");
  const mobileNav = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <React.Fragment  >
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
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              {/* <Logo /> */}
            </chakra.a>
            
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
              <Button variant="ghost" size={"lg"}>How it works</Button>
              <Button bg="blue.200"  size="lg">
              Get Started
            </Button>
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
                <Button w="full" variant="ghost">
                  How It Works
                </Button>
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
