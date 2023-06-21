import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";

const Howitworks = () => {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Box>
      <Heading
        textAlign={"center"}
        bgClip="text"
        bgGradient="linear(to-r, green.400,purple.500)"
        fontWeight="extrabold"
        p={"30px"}
        mb={"15px"}
      >
        House rent allowance calculator
      </Heading>
      <Accordion allowMultiple maxW={"900px"} m={"auto"} bg={bg}>
        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <chakra.h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={"xl"}
                fontWeight="bold"
              >
                How to calculate Total Salary?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </chakra.h2>

          <AccordionPanel pb={4} textAlign="left">
            Total Salary is a Summation of basic Salary , DA forming part of
            Salary and Commission Received.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={"xl"}
                fontWeight="bold"
              >
                How to calculate excess of Rent paid over 10% of Salary?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            To calculate excess of Rent paid over 10% of Salary we need to
            deduct 10% of Total Salary from Rent paid amount.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={"xl"}
                fontWeight="bold"
              >
                How to determine which city will get 50% of deduction or 40% of
                deduction from Total Salary?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            Metro Cities like Delhi, Mumbai , Kolkata or Chennai will get 50% of
            deduction and any other Cities will get 40% of deduction.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          borderBottom={"1px solid black"}
          p={2}
          borderRadius={"10px"}
        >
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={"xl"}
                fontWeight="bold"
              >
                How to calculate Total Exempt House-Rent Allowance ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            To calculate Total Exempt House-Rent Allowance we need to find least
            of the below value :-
            <ul style={{ paddingLeft: "15px", fontSize: "13px" }}>
              <li style={{ fontWeight: "600" }}>
                House Rent Allowance Received.
              </li>
              <li style={{ fontWeight: "600" }}>
                Rent paid 10% of Salary (Rent Paid our 10% of Salary).
              </li>
              <li style={{ fontWeight: "600" }}>
                50% / 40% of Total salary (50% in case of Metro Cities and 40%
                in case of Non-Metro Cities.){" "}
              </li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Howitworks;
