import { Grid, GridItem, Container, Heading, Flex, Text, Card, Link, CardBody, CardFooter, Input, Box, Stack, HStack } from "@chakra-ui/react";
import { blog, blog1, blog2, blog3, blog4, farmland, fruits, soil } from "../Components/Assets";

export default function Blog() {
  return (
    <>
   <Container maxW="100%" px="100" py="20">
    <Flex gap={{ base: "0", lg: "20" }} align="center" justify="center" flexDirection={{ base: "column-reverse", lg: "row" }}>
      
      <Box flexBasis="450px">

      <Heading display="flex" fontSize="55px" py="5" gap="10px">the <Text as="span" fontWeight="300" fontStyle="italic">Blog</Text></Heading>
      <Text fontSize="20px" pb="50px">We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.</Text>

<Box maxW="300px">
      <HStack display="flex" fontSize="20px"><Text>Subscribe to our </Text><Text as="span" color="grun.main" fontWeight="400">Newsletter</Text></HStack>
      <Input my="5" bg="gray.300" placeholder="e-mail"/>
</Box>

      </Box>

      <Grid flexBasis="500px" templateColumns="repeat(2, 1fr)" templateRows="repeat(3, 1fr)">
        <GridItem rowStart={1} rowEnd={-1} colStart={1} colEnd={-1} zIndex="1">
        <img src={ blog } />
        </GridItem>
        <GridItem rowStart={1} rowEnd={-1} colStart={1} colEnd={-1}>
        <img src={ fruits } />
        </GridItem>
      </Grid>
    </Flex>

     </Container>


    <Stack bg="gray.200" p="50">
      <Heading textAlign="center" p="8">Latest Posts</Heading>
    <Flex  gap="20" justify="center" flexDirection={{ base: "column", lg: "row" }}>
      {/* first card */}
    <Card bg="black" borderRadius="64px" flexBasis="400px">
      <CardBody p="0" color="gray.400" fontSize="20px">
        <img src={ blog1 } />

        <Heading color="white" py="6" px="8" fontSize="30px">Best Practices</Heading>
        <Text py="2" px="8" fontSize="22px">
          We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
        </Text>
      </CardBody>

      <CardFooter color="white" flexDirection="column" gap="10px" px="8">
        <Link color="grun.main" fontSize="20px">Read More...</Link>
        <Text pb="4" fontSize="20px">29th Sept 2024</Text>
      </CardFooter>
    </Card>

    {/* second card */}
    <Card bg="black" borderRadius="64px" flexBasis="400px">
      <CardBody p="0" color="gray.400" fontSize="20px">
        <img src={ blog2 } />

        <Heading color="white" py="6" px="8" fontSize="30px">Pros and cons to farm</Heading>
        <Text py="2" px="8" fontSize="22px">
          We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
        </Text>
      </CardBody>

      <CardFooter color="white" flexDirection="column" gap="10px" px="8">
        <Link color="grun.main" fontSize="20px">Read More...</Link>
        <Text pb="4" fontSize="20px">29th Sept 2024</Text>
      </CardFooter>
    </Card>
    </Flex>

    </Stack>


    {/* More blogs */}

   <Stack>
      <Heading textAlign="left" px="20" pt="10">Most Viewed Posts</Heading>

      <Flex columnGap="10" p={{ base: "5", lg: "20" }} flexDirection={{ base: "column", lg: "row"}}>


        <Box flexBasis="600px" >
          <img src={ blog3 } />
        </Box>

        <Box flexBasis="450px">
          <Heading py="2">Prices of beans are skyrocketting by the day</Heading>
          <Text fontSize="22px" color="gray.500" pb="4">
             We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
          </Text>
          
          <HStack justify="space-between">
          <Text as="span" color="grun.main" fontSize="20px" spacing="20px">29th Sept 2024</Text>
          <Link color="red" fontSize="20px">Read More...</Link>
          </HStack>
        </Box>
      </Flex>


      <Flex columnGap="10" p={{ base: "5", lg: "20" }} textAlign={{ base: "center", lg: "right" }} flexDirection={{ base: "column", lg: "row-reverse"}}>

        <Box flexBasis="600px">
          <img src={ soil } />
        </Box>

        <Box flexBasis="450px">
          <Heading py="2">Prices of beans are skyrocketting by the day</Heading>
          <Text fontSize="22px" color="gray.500" pb="4">
             We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
          </Text>
          
          <HStack justify="space-between">
          <Text as="span" color="grun.main" fontSize="20px" spacing="20px">29th Sept 2024</Text>
          <Link color="red" fontSize="20px">Read More...</Link>
          </HStack>
        </Box>
      </Flex>


      <Flex columnGap="10" p={{ base: "5", lg: "20" }} textAlign={{ base: "center", lg: "left" }} flexDirection={{ base: "column", lg: "row"}}>

        <Box flexBasis="600px">
          <img src={ blog4 } />
        </Box>

        <Box flexBasis="450px">
          <Heading py="2">Prices of beans are skyrocketting by the day</Heading>
          <Text fontSize="22px" color="gray.500" pb="4">
             We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
          </Text>
          
          <HStack justify="space-between">
          <Text as="span" color="grun.main" fontSize="20px" spacing="20px">29th Sept 2024</Text>
          <Link color="red" fontSize="20px">Read More...</Link>
          </HStack>
        </Box>
      </Flex>


      <Flex columnGap="10" p={{ base: "5", lg: "20" }} textAlign={{ base: "center", lg: "right" }} flexDirection={{ base: "column", lg: "row-reverse"}}>

        <Box flexBasis="600px">
          <img src={ farmland } />
        </Box>

        <Box flexBasis="450px">
          <Heading py="2">Prices of beans are skyrocketting by the day</Heading>
          <Text fontSize="22px" color="gray.500" pb="4">
             We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
          </Text>
          
          <HStack justify="space-between">
          <Text as="span" color="grun.main" fontSize="20px" spacing="20px">29th Sept 2024</Text>
          <Link color="red" fontSize="20px">Read More...</Link>
          </HStack>
        </Box>
      </Flex>

   </Stack>

   {/* Old posts */}

    <Stack bg="gray.200" py="20" px={{ base: "5", lg: "10" }}>
      <Heading as="h5">Old Posts</Heading>
      <HStack py="2">
        <Box width="24px" height="20px" borderRadius="50%" bg="grun.main"></Box>
        <Text px="5" fontWeight="700" fontSize="20px" lineHeight="1.5">Prices of Beans are skyrocketting by the day</Text>
      </HStack>


      <HStack py="2">
        <Box width="24px" height="20px" borderRadius="50%" bg="grun.main"></Box>
        <Text px="5" fontWeight="700" fontSize="20px" lineHeight="1.5">Prices of Beans are skyrocketting by the day</Text>
      </HStack>
      
      
      <HStack py="2">
        <Box width="24px" height="20px" borderRadius="50%" bg="grun.main"></Box>
        <Text px="5" fontWeight="700" fontSize="20px" lineHeight="1.5">Prices of Beans are skyrocketting by the day</Text>
      </HStack>
      
      
      <HStack py="2">
        <Box width="24px" height="20px" borderRadius="50%" bg="grun.main"></Box>
        <Text px="5" fontWeight="700" fontSize="20px" lineHeight="1.5">Prices of Beans are skyrocketting by the day</Text>
      </HStack>


      <HStack py="2">
        <Box width="24px" height="20px" borderRadius="50%" bg="grun.main"></Box>
        <Text px="5" fontWeight="700" fontSize="20px" lineHeight="1.5">Prices of Beans are skyrocketting by the day</Text>
      </HStack>


       <HStack py="2">
        <Box width="24px" height="20px" borderRadius="50%" bg="grun.main"></Box>
        <Text px="5" fontWeight="700" fontSize="20px" lineHeight="1.5">Prices of Beans are skyrocketting by the day</Text>
      </HStack>

       <HStack py="2">
        <Box width="24px" height="20px" borderRadius="50%" bg="grun.main"></Box>
        <Text px="5" fontWeight="700" fontSize="20px" lineHeight="1.5">Prices of Beans are skyrocketting by the day</Text>
      </HStack>

       <HStack py="2">
        <Box width="24px" height="20px" borderRadius="50%" bg="grun.main"></Box>
        <Text px="5" fontWeight="700" fontSize="20px" lineHeight="1.5">Prices of Beans are skyrocketting by the day</Text>
      </HStack>

       <HStack py="2">
        <Box width="24px" height="20px" borderRadius="50%" bg="grun.main"></Box>
        <Text px="5" fontWeight="700" fontSize="20px" lineHeight="1.5">Prices of Beans are skyrocketting by the day</Text>
      </HStack>
    </Stack>


   </>
  )
}
