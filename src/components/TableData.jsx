import { Heading, Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const TableData = ({
  heading,
  TaxableIncomeannual,
  TaxableIncomemonthly,
  taxannual,
  taxmonthly,
  takehomeannual
}) => {
  return (
    <Box  p={"20px"}>
      <Heading
        textAlign="center"
        fontSize="4xl"
        ml="2"
        p="10px"
        w="full"
        bgClip="text"
        bgGradient="linear(to-r, green.400,purple.500)"
        fontWeight="extrabold"
        mb="30px"
      >
        {heading}
      </Heading>
      <Table
        size="sm"
        variant="striped"
        colorScheme="twitter"
        borderRadius="md"
        boxShadow="lg"
        overflow="hidden"
      >
        <Thead>
          <Tr>
            <Th
              fontSize="16px"
              bgColor="gray.100"
              p="2"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Component
            </Th>
            <Th
              fontSize="16px"
              bgColor="gray.100"
              p="2"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Annual
            </Th>
            <Th
              fontSize="16px"
              bgColor="gray.100"
              p="2"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Monthly
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td fontSize="16px" p="2">
              Taxable Income
            </Td>
            <Td fontSize="16px" p="2">
              {TaxableIncomeannual}
            </Td>
            <Td fontSize="16px" p="2">
              {TaxableIncomemonthly}
            </Td>
          </Tr>
          <Tr>
            <Td fontSize="16px" p="2">
              Tax
            </Td>
            <Td fontSize="16px" p="2">
              {taxannual}
            </Td>
            <Td fontSize="16px" p="2">
              {taxmonthly}
            </Td>
          </Tr>
          <Tr>
            <Td fontSize="16px" p="2">
              Take Home
            </Td>
            <Td fontSize="16px" p="2">
              {takehomeannual}
            </Td>
            <Td fontSize="16px" p="2">
              {Math.ceil(takehomeannual/12)}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableData;
