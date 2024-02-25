import { Flex, Box, VStack, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { farmer } from "../Components/Assets";

export default function Contact() {
  return (
    <Flex py="150px" align="flex-end">
      <Box >
        <img src={ farmer } />
      </Box>

    <Box flexBasis="450px" border="1px solid #ddd" py="5" px="20">

      <VStack pb="10">
        <Heading> Contact Us</Heading>
        <Text textAlign="center">Send us a message to make your inquiry. We shall respond promptly.</Text>
      </VStack>
     
        <FormControl pb="5">
          <FormLabel> Full Name</FormLabel>
          <Input type="text" name="name"></Input>
        </FormControl>

        <FormControl pb="5">
          <FormLabel> Phone Number</FormLabel>
          <Input type="tel" name="phone number"></Input>
        </FormControl>

        <FormControl pb="5">
          <FormLabel> E-mail Address</FormLabel>
          <Input type="email" name="email"></Input>
        </FormControl>

        <FormControl pb="5">
          <FormLabel> Gender </FormLabel>
          <Input type="text" name="gender"></Input>
        </FormControl>

        <FormControl pb="5">
          <FormLabel> Message</FormLabel>
          <Textarea></Textarea>
        </FormControl>

        <Button type="submit" colorScheme="green" px="150px" maxW="100%" borderRadius="25px" mt="5">submit</Button>
     
    </Box>
    </Flex>
  )
}
