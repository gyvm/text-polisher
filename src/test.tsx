import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Checkbox,
  Button,
  Avatar,
  Badge,
  useBreakpointValue,
  Textarea,
} from "@chakra-ui/react";

const PatientVisitSummary = () => {
  const correctValue =
    "Dear Judy,\n\nI hope you are feeling better. I have reviewed your visit summary and have made some corrections. Please see the corrected text below.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nSincerely,\nDr. Smith";

  return (
    <Box p={5} bg="yellow" borderRadius="lg" shadow="md">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Heading size="lg" mb={{ base: 4, sm: 0 }}>
          Your patient's visit summary
        </Heading>
        <Box>
          <img src="/api/placeholder/100/30" alt="MUSC Health logo" />
        </Box>
      </Flex>

      <Flex mb={6}>
        <Avatar size="sm" name="Judy" mr={2} />
        <Text>Judy (42)</Text>
      </Flex>

      <Flex
        bg={"white"}
        direction={useBreakpointValue({ base: "column", md: "row" })}
        gap={4}
      >
        <Box
          flex={1}
          bg="#f0eeed"
          p={4}
          borderRadius="md"
          shadow="sm"
          mb={{ base: 4, md: 0 }}
        >
          <Heading size="md" mb={4}>
            文章を入力してください
          </Heading>
          <Textarea placeholder="Enter your assessment and treatment plan" />
        </Box>

        <Box flex={1} bg="#f0eeed" p={4} borderRadius="md" shadow="sm">
          <Heading size="md" mb={4}>
            添削された文章
          </Heading>
          <Text>Dear Judy,</Text>
          <Text mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Textarea value={correctValue} readOnly />
        </Box>
      </Flex>

      <Box mt={4} bg="white" p={4} borderRadius="md" shadow="sm">
        <HStack
          spacing={4}
          flexDirection={{ base: "column", sm: "row" }}
          alignItems={{ base: "flex-start", sm: "center" }}
        >
          <Avatar size="md" name="Judy Robertson" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold">Judy Robertson (42)</Text>
            <Text>Cold, sinus infection, or influenza</Text>
          </VStack>
        </HStack>
        <Flex mt={4} flexDirection={{ base: "column", sm: "row" }} gap={4}>
          <Button colorScheme="blackAlpha" width={{ base: "full", sm: "auto" }}>
            Review visit summary
          </Button>
          <Badge
            colorScheme="orange"
            p={2}
            borderRadius="full"
            alignSelf={{ base: "flex-start", sm: "center" }}
          >
            Virtual
          </Badge>
        </Flex>
      </Box>
    </Box>
  );
};

export default PatientVisitSummary;
