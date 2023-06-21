import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Flex,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Divider,
  useColorModeValue
} from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa";

import hra_calculator_banner from "../Assests/hra_calculator_banner.svg";

const Houserentallownace = () => {

  const bg = useColorModeValue("white", "gray.700");


  const [inputValues, setInputValues] = useState({
    basicSalary: "",
    daSalary: "",
    commission: "",
    hraReceived: "",
    rentPaid: "",
  });

  const [checked, setChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [excessOfRentPaidOver10Percent, setexcessOfRentPaidOver10Percent] =
    useState();
  const [percentofbasic, setpercentofbasic] = useState();
  const [exempthra, setexempthra] = useState();
  const [taxablehra, settaxablehra] = useState();

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleCalculateClick = (e) => {

    e.preventDefault()

    const totalSalary =
      +inputValues.basicSalary +
      +inputValues.daSalary +
      +inputValues.commission;

    const HraReceived = +inputValues.hraReceived;

    const excessOfRentPaidOver10Percent =
      +inputValues.rentPaid - (10 / 100) * totalSalary;

    setexcessOfRentPaidOver10Percent(excessOfRentPaidOver10Percent);

    let cityAmount;

    if (checked) {
      cityAmount = (50 / 100) * totalSalary;
    } else {
      cityAmount = (40 / 100) * totalSalary;
    }

    setpercentofbasic(cityAmount);

    let exemptedHouseRentAllowance = Math.min(
      HraReceived,
      excessOfRentPaidOver10Percent,
      cityAmount
    );

    setexempthra(exemptedHouseRentAllowance);

    let taxableHouseRentAllowance = HraReceived - exemptedHouseRentAllowance;

    settaxablehra(taxableHouseRentAllowance);

    console.log(exemptedHouseRentAllowance, taxableHouseRentAllowance);

    setShowAlert(true);
  };

  const resetform = () => {
    inputValues.basicSalary = "";
    inputValues.daSalary = "";
    inputValues.commission = "";
    inputValues.hraReceived = "";
    inputValues.rentPaid = "";

    setShowAlert(!showAlert);
  };

  return (
    <Box
      backgroundImage={{ lg: hra_calculator_banner }}
      backgroundSize="cover"
      backgroundPosition="center"
      minH={"75vh"}
      display="flex"
      justifyContent={{ lg: "flex-end", base: "center", md: "center" }}
    >
      <Box
        bg={bg}
        p={4}
        maxW={{ lg: "500px" }}
        mt={{ lg: "50px", base: "30px" }}
        mr={{ lg: "200px" }}
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        rounded="md"
      >
        {!showAlert && (
          <form onSubmit={handleCalculateClick}> 
            <FormControl id="basicSalary" mb={4}>
              <FormLabel>Basic Salary</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaRupeeSign} color="gray.500" />
                </InputLeftElement>
                <Input
                  required={true}
                  type="number"
                  id="basicSalary"
                  placeholder="Enter Basic Salary"
                  value={inputValues.basicSalary}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="daSalary" mb={4}>
              <FormLabel>DA forming part of salary</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaRupeeSign} color="gray.500" />
                </InputLeftElement>
                <Input
                  required={true}
                  type="number"
                  id="daSalary"
                  placeholder="Enter Dearness Allowance"
                  value={inputValues.daSalary}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="commission" mb={4}>
              <FormLabel>
                Commission (as % of turnover achieved by the employee)
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaRupeeSign} color="gray.500" />
                </InputLeftElement>
                <Input
                  required={true}
                  type="number"
                  id="commission"
                  placeholder="Enter commission amount"
                  value={inputValues.commission}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="hraReceived" mb={4}>
              <FormLabel>HRA Received</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaRupeeSign} color="gray.500" />
                </InputLeftElement>
                <Input
                  required={true}
                  type="number"
                  id="hraReceived"
                  placeholder="Enter House Rent Allowance received"
                  value={inputValues.hraReceived}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </FormControl>

            <FormControl id="rentPaid" mb={4}>
              <FormLabel>Rent Paid</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaRupeeSign} color="gray.500" />
                </InputLeftElement>
                <Input
                  required={true}
                  type="number"
                  id="rentPaid"
                  placeholder="Enter rent paid"
                  value={inputValues.rentPaid}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </FormControl>

            <Flex alignItems="start" mb={"20px"}>
              <Flex alignItems="center" h={5}>
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  borderColor="gray.500"
                  _dark={{
                    borderColor: "gray.50",
                  }}
                  id="offers"
                  rounded="md"
                />
              </Flex>
              <Box ml={3} fontSize="sm">
                <Text
                  color="gray.500"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Do you live in Delhi, Mumbai, Kolkata or Chennai?
                </Text>
              </Box>
            </Flex>
            <Button
              type="submit"
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
              Calculate
            </Button>
          </form>
        )}

        {showAlert && (
          <Box bg={bg}>
            <Flex
              justifyContent={"space-between"}
              textAlign={"center"}
              p={"20px"}
            >
              <Text fontSize={"1xl"}>HRA Received</Text>
              <Flex>
                <Box mt={"4px"} as={FaRupeeSign} color="gray.500" />
                <Text color={"blue.300"}>{inputValues.hraReceived}</Text>
              </Flex>
            </Flex>

            <Divider />
            <Flex
              justifyContent={"space-between"}
              textAlign={"center"}
              p={"20px"}
            >
              <Text fontSize={"1xl"}>
                {checked ? "50%" : "40%"} of Basic Salary
              </Text>
              <Flex>
                <Box mt={"4px"} as={FaRupeeSign} color="gray.500" />
                <Text color={"blue.300"}>{percentofbasic}</Text>
              </Flex>
            </Flex>
            <Divider />

            <Flex justifyContent={"space-between"} p={"20px"}>
              <Text fontSize={"1xl"}>
                Excess of Rent paid over <br /> 10% of salary
              </Text>
              <Flex>
                <Box mt={"4px"} as={FaRupeeSign} color="gray.500" />
                <Text color={"blue.300"}>{excessOfRentPaidOver10Percent}</Text>
              </Flex>
            </Flex>
            <Divider />

            <Flex justifyContent={"space-between"} p={"20px"}>
              <Text fontSize={"1xl"}>
                {" "}
                <span style={{ fontWeight: "bolder" }}>Note:</span> The least of
                the above three is exempt from HRA
              </Text>
            </Flex>
            <Divider />

            <Box textAlign={"center"} p={"20px"}>
              <Text fontWeight={"extrabold"}>Total Exempt HRA</Text>
              <Flex justifyContent={"center"}>
                <Box mt={"4px"} as={FaRupeeSign} color="gray.500" />
                <Text color={"green.300"}>{exempthra}</Text>
              </Flex>
            </Box>
            <Divider />

            <Box textAlign={"center"} p={"20px"}>
              <Text fontWeight={"extrabold"}>Taxable HRA</Text>
              <Flex justifyContent={"center"}>
                <Box mt={"4px"} as={FaRupeeSign} color="gray.500" />
                <Text color={"green.300"}>{taxablehra}</Text>
              </Flex>
            </Box>
            <Divider />
          </Box>
        )}

        {showAlert && (
          <Button
            onClick={resetform}
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
            Calculate Again
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Houserentallownace;
