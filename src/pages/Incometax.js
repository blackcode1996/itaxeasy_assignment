import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa";
import TableData from "../components/TableData";
import Lottie from "lottie-react";
import income_tax_cal_page from "../Assests/income_tax_cal_page.json";

const Incometax = () => {
  const [inputValues, setInputValues] = useState({
    annualIncome: "",
    employeePf: "",
    hraAllowance: "",
    exemptions: "",
    otherExemptions: "",
  });

  const [oldTaxableIncomeannual, setoldTaxableIncomeannual] = useState();
  const [oldTaxableIncomemonthly, setoldTaxableIncomemonthly] = useState();

  const [newTaxableIncomeannual, setnewTaxableIncomeannual] = useState();
  const [newTaxableIncomemonthly, setnewTaxableIncomemonthly] = useState();

  const [oldtaxannual, setoldtaxannual] = useState();
  const [oldtaxmonthly, setoldtaxmonthly] = useState();

  const [newtaxannual, setnewtaxannual] = useState();
  const [newtaxmonthly, setnewtaxmonthly] = useState();

  const [clicked, setclicked] = useState(false);

  const bg = useColorModeValue("white", "gray.700");

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleCalculateClick = (e) => {
    e.preventDefault();

    setclicked(true);

    let exepmtion_80c = Math.min(150000, +inputValues.exemptions);

    let excemptions = exepmtion_80c + +inputValues.otherExemptions;

    let EMPLOYER_PF = 21600;
    let PROFESSIONAL_TAX = 2500;
    let STANDARD_EXEMPTION = 50000;

    let oldTaxableIncome =
      +inputValues.annualIncome -
      +inputValues.hraAllowance -
      excemptions -
      EMPLOYER_PF -
      PROFESSIONAL_TAX -
      STANDARD_EXEMPTION -
      21600;
    setoldTaxableIncomeannual(oldTaxableIncome);

    let oldtaxableIncomeMonthly = Math.ceil(oldTaxableIncome / 12);
    setoldTaxableIncomemonthly(oldtaxableIncomeMonthly);

    let newTaxableIncome =
      +inputValues.annualIncome - EMPLOYER_PF - STANDARD_EXEMPTION;
    setnewTaxableIncomeannual(newTaxableIncome);

    let newtaxableIncomeMonthly = Math.ceil(newTaxableIncome / 12);
    setnewTaxableIncomemonthly(newtaxableIncomeMonthly);

    let annualoldtax = calculateoldTax(oldTaxableIncome);
    setoldtaxannual(annualoldtax);

    let monthlyoldtax = Math.ceil(annualoldtax / 12);
    setoldtaxmonthly(monthlyoldtax);

    let annualnewtax = calculatenewTax(newTaxableIncome);
    setnewtaxannual(annualnewtax);

    let monthlynewtax = Math.ceil(annualnewtax / 12);
    setnewtaxmonthly(monthlynewtax);
  };

  function calculateoldTax(taxableIncome) {
    let TAX_REBATE = 500000;

    if (taxableIncome < TAX_REBATE) {
      taxableIncome = 0;
    }
    let slab1Income = Math.min(taxableIncome, 250000);
    let slab1Tax = 0;
    let slab2Income = Math.max(Math.min(taxableIncome - 250000, 250000), 0);
    let slab2Tax = slab2Income * 0.05;
    let slab3Income = Math.max(Math.min(taxableIncome - 500000, 500000), 0);
    let slab3Tax = slab3Income * 0.2;
    let slab4Income = Math.max(taxableIncome - 1000000, 0);
    let slab4Tax = slab4Income * 0.3;

    return slab1Tax + slab2Tax + slab3Tax + slab4Tax;
  }

  function calculatenewTax(taxableIncome) {
    let TAX_REBATE = 700000;

    if (taxableIncome < TAX_REBATE) {
      taxableIncome = 0;
    }

    let slab1Income = Math.min(taxableIncome, 300000);
    let slab1Tax = 0;
    let slab2Income = Math.max(Math.min(taxableIncome - 300000, 300000), 0);
    let slab2Tax = slab2Income * 0.05;
    let slab3Income = Math.max(Math.min(taxableIncome - 600000, 300000), 0);
    let slab3Tax = slab3Income * 0.1;
    let slab4Income = Math.max(Math.min(taxableIncome - 900000, 300000), 0);
    let slab4Tax = slab4Income * 0.15;
    let slab5Income = Math.max(Math.min(taxableIncome - 1200000, 300000), 0);
    let slab5Tax = slab5Income * 0.2;
    let slab6Income = Math.max(taxableIncome - 1500000, 0);
    let slab6Tax = slab6Income * 0.3;

    return slab1Tax + slab2Tax + slab3Tax + slab4Tax + slab5Tax + slab6Tax;
  }

  function resetform() {
    inputValues.annualIncome = "";
    inputValues.employeePf = "";
    inputValues.hraAllowance = "";
    inputValues.exemptions = "";
    inputValues.otherExemptions = "";

    setclicked(false);
  }

  return (
    <Box  h={"85vh"}>
      <Flex flexDir={{base:"column",lg:"row"}}>
      {!clicked && (
        <Box

          p={"40px"}
          bg={bg}
          w={"max-content"}
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          rounded="md"
          ml={{lg:"150px"}}
          m={{base:"auto"}}
          mt={"50px"}
        >
            <form onSubmit={handleCalculateClick}>
              <FormControl id="annualIncome" mb={4}>
                <FormLabel>Annual Income</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Box as={FaRupeeSign} color="gray.500" />
                  </InputLeftElement>
                  <Input
                    required={true}
                    type="number"
                    id="annualIncome"
                    placeholder="Enter Annual Income"
                    value={inputValues.annualIncome}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </FormControl>

              <FormControl id="employeePf" mb={4}>
                <FormLabel>Employee PF</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Box as={FaRupeeSign} color="gray.500" />
                  </InputLeftElement>
                  <Input
                    required={true}
                    type="number"
                    id="employeePf"
                    placeholder="Enter Provident Fund"
                    value={inputValues.employeePf}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </FormControl>

              <FormControl id="hraAllowance" mb={4}>
                <FormLabel>House Rent Allowance</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Box as={FaRupeeSign} color="gray.500" />
                  </InputLeftElement>
                  <Input
                    required={true}
                    type="number"
                    id="hraAllowance"
                    placeholder="Enter House Rent Allowance"
                    value={inputValues.hraAllowance}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </FormControl>

              <FormControl id="exemptions" mb={4}>
                <FormLabel>Exemptions under 80C(excluding PF)</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Box as={FaRupeeSign} color="gray.500" />
                  </InputLeftElement>
                  <Input
                    required={true}
                    type="number"
                    id="exemptions"
                    placeholder="Enter excemptions under 80C"
                    value={inputValues.exemptions}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </FormControl>

              <FormControl id="otherExemptions" mb={4}>
                <FormLabel>Other Exemptions</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Box as={FaRupeeSign} color="gray.500" />
                  </InputLeftElement>
                  <Input
                    required={true}
                    type="number"
                    id="otherExemptions"
                    placeholder="Enter other exemptions"
                    value={inputValues.otherExemptions}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </FormControl>

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
        </Box>
      )}
      {!clicked && (
        <Box  h={"75vh"} m={"auto"}  w={"50%"}>
          <Lottie style={{height:"75vh"}} animationData={income_tax_cal_page}/>
        </Box>
      )}
      </Flex>


      {clicked && (
      <Box>
        <Box
          display={{lg:"flex",base:"column",md:"column"}}
          flexDir={"row"}
          gap={"30px"}
          textAlign={"center"}
        >
          <Box w={{lg:"50%"}} m={"auto"}>
            <TableData
              heading={"Old Tax Regime"}
              TaxableIncomeannual={oldTaxableIncomeannual}
              TaxableIncomemonthly={oldTaxableIncomemonthly}
              taxannual={oldtaxannual}
              taxmonthly={oldtaxmonthly}
            />
          </Box>
          <Box w={{lg:"50%"}} m={"auto"}>
            <TableData
              heading={"New Tax Regime"}
              TaxableIncomeannual={newTaxableIncomeannual}
              TaxableIncomemonthly={newTaxableIncomemonthly}
              taxannual={newtaxannual}
              taxmonthly={newtaxmonthly}
            />
          </Box>
        </Box>
        <Button
          onClick={resetform}
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={"auto"}
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
      </Box>
      )}
  </Box>
    
  );
};

export default Incometax;
