import { Flex, Grid, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Box, Button, Text, GridItem, Container, HStack } from "@chakra-ui/react";
import { farmland, cows, night_farm, harvest, veggies, strawberries, onions, potatoes, beans, star_blank, star_fill } from "../Components/Assets";

export default function Home() {
  return (
    <section className="home_section">
    <Flex  p="100px" bgImage="url('/hero.webp')"  justifyContent="center" alignItems="center" textAlign="center" flexDirection="column">

      <Box>
      <Heading as="h1" fontSize="8xl" color="green.600"> Zenith </Heading>
      <Heading fontSize="6xl" fontWeight="400" > agro-allied </Heading>
      <Heading fontSize="5xl" fontWeight="900"> cooperative</Heading>
      <Heading fontSize="6xl" fontWeight="100" letterSpacing="2px"> society </Heading>
      </Box>

      <Button px="30px" py="10px" my="10" colorScheme="green" borderRadius="25px">join us</Button>

   </Flex>

{/* Project section */}

<Box p="8">
    <Heading p="16">Our Projects</Heading>
    <SimpleGrid p="10" minChildWidth="300px" spacing="10">
      <Box>
        <img src={ farmland } alt="picture of a farmland" />
      </Box>

      <GridItem>
        <Heading as="h4" fontSize="24px" textDecoration="underline"> The Soya Project</Heading>
        <Text color="gray.500" fontSize="26px">
          We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November.
        </Text>

        <Button px="8" my="10" colorScheme="green" fontSize="20px" borderRadius="25px">read more</Button>
      </GridItem>
    </SimpleGrid>

    <SimpleGrid p="10" minChildWidth="300px" spacing="10">
      <Box>
        <img src={ cows } alt="cows in a ranch" />
      </Box>

      <GridItem>
        <Heading as="h4" fontSize="24px" textDecoration="underline"> The Goat Farm Project</Heading>
        <Text color="gray.500" fontSize="26px">
          We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November.
        </Text>

        <Button px="8" my="10" colorScheme="green" fontSize="20px" borderRadius="25px">read more</Button>
      </GridItem>
    </SimpleGrid>

</Box>

{/* Blog section */}

<Container maxW="100%" bg="gray.200"  p="10">
<Heading textAlign="center">Recent Blog Posts</Heading>
<Text textAlign="center" py="5px" fontStyle="italic" color='gray.500' fontSize='16px'>Find our thoughts written all over our blog</Text>


<SimpleGrid spacing="10px" minChildWidth="200px" py="10" justify="start" alignItems="center">
<Card bg="inherit" boxShadow="none">
    <CardBody >
      <img src={ night_farm } alt="night farming" />
      <Text color="green">Farming</Text>
    </CardBody>
    <CardHeader fontSize="26px" fontWeight="600">4-Important things to do while farming at night</CardHeader>
    <CardFooter color="gray.400" fontSize="12px">25th Oct., 2024</CardFooter>
</Card>

<Card bg="inherit" boxShadow="none" >
    <CardBody >
      <img src={ veggies } alt="veggies" />
      <Text color="green">Farming</Text>
    </CardBody>
    <CardHeader fontSize="26px" fontWeight="600">Soya Bean or Maize Farming?</CardHeader>
    <CardFooter color="gray.400" fontSize="12px">2nd Nov., 2024</CardFooter>
</Card>

<Card bg="inherit" boxShadow="none" >
    <CardBody >
      <img src={ harvest } alt="harvesting crops" />
      <Text color="green">Farming</Text>
    </CardBody>
    <CardHeader fontSize="26px" fontWeight="600">10 Benefits of Organic Farming</CardHeader>
    <CardFooter color="gray.400" fontSize="12px">25th Oct., 2024</CardFooter>
</Card>
</SimpleGrid>

</Container>

{/* Shop section */}

    <Heading textAlign="center" p="12">Shop from us</Heading>

    <Grid templateColumns="repeat(4, 1fr)" m="10">
      
      <GridItem p="16" colSpan={{ base: 4, lg: 2}}>
        <Box pos=" relative ">
        <img src={ beans } />
        <Text 
        bg="green.400" 
        border="8px solid white" 
        py="8px" 
        px="12px" 
        color="white" 
        fontWeight="500" 
        pos="absolute" 
        borderRadius="25px"
         top="20" right="0"
         >
          25% discount
         </Text>
        <Text 
        bg="green.400" 
        border="8px solid white" 
        py="8px" 
        px="12px" 
        color="white" 
        fontWeight="500" 
        pos="absolute" 
        borderRadius="25px"
        top="80" left="-20"
        >
          Add to Cart</Text>

        </Box>

        <HStack align="center" gap="70px">
        <Heading py="6px">Rugged Beans</Heading>
        <Text bg="orange" fontWeight="600" p ="5px" borderRadius="10px"> N2,000 </Text>
        </HStack>
        <Text fontSize="20px"> We got 5 hectares of farm land in Kaduna, Nigeria.</Text>

      <HStack flexDirection="row" py="6px">
        <span><img src={star_fill} /></span>
        <span><img src={star_fill} /></span>
        <span><img src={star_fill} /></span>
        <span><img src={star_blank} /></span>
        <span><img src={star_blank} /></span>

      </HStack>
       
      </GridItem>

       <GridItem p="16" colSpan={{ base: 4, lg: 2}}>
        <Box pos=" relative ">
        <img src={ onions } />
        <Text 
        bg="green.400" 
        border="8px solid white" 
        py="8px" 
        px="12px" 
        color="white" 
        fontWeight="500" 
        pos="absolute" 
        borderRadius="25px"
        bottom="60"
        left="-20"
        >
          25% discount</Text>

        <Text 
        bg="green.400" 
        border="8px solid white" 
        py="8px" 
        px="12px" 
        color="white" 
        fontWeight="500" 
        pos="absolute" 
        borderRadius="25px"
        bottom="60"
        right="0"
        >
          Add to Cart</Text>

        </Box>

        <HStack align="center" gap="70px">
        <Heading py="6px">Special Onions</Heading>
        <Text bg="orange" fontWeight="600" p ="5px" borderRadius="10px"> N2,000 </Text>
        </HStack>
        <Text fontSize="20px"> We got 5 hectares of farm land in Kaduna, Nigeria.</Text>

      <HStack flexDirection="row" py="6px">
        <span><img src={star_fill} /></span>
        <span><img src={star_fill} /></span>
        <span><img src={star_fill} /></span>
        <span><img src={star_fill} /></span>
        <span><img src={star_fill} /></span>

      </HStack>
       
      </GridItem>


       <GridItem p="16" colSpan={{ base: 4, lg: 2}}>
        <Box pos="relative">
        <img src={ strawberries } />
        <Text 
        bg="green.400" 
        border="8px solid white" 
        py="8px" 
        px="12px" 
        color="white" 
        fontWeight="500" 
        pos="absolute" 
        borderRadius="25px"
        bottom="20"
        left="-10"
        >
          25% discount</Text>

        <Text 
        bg="green.400" 
        border="8px solid white" 
        py="8px" 
        px="12px" 
        color="white" 
        fontWeight="500" 
        pos="absolute" 
        borderRadius="25px"
        bottom="80"
        left="-10"
        >
          Add to Cart</Text>

        </Box>

        <HStack align="center" gap="70px">
        <Heading py="6px">Strawberries</Heading>
        <Text bg="orange" fontWeight="600" p ="5px" borderRadius="10px"> N2,000 </Text>
        </HStack>
        <Text fontSize="20px"> We got 5 hectares of farm land in Kaduna, Nigeria.</Text>

      <HStack flexDirection="row" py="6px">
        <span><img src={star_fill} /></span>
        <span><img src={star_blank} /></span>
        <span><img src={star_blank} /></span>
        <span><img src={star_blank} /></span>
        <span><img src={star_blank} /></span>

      </HStack>
       
      </GridItem>


       <GridItem p="16" colSpan={{ base: 4, lg: 2}}>
        <Box pos="relative">
        <img src={ potatoes } />
        <Text 
        bg="green.400" 
        border="8px solid white" 
        py="8px" 
        px="12px" 
        color="white" 
        fontWeight="500" 
        pos="absolute" 
        borderRadius="25px"
        bottom="-5"
        right="0"
        >
          25% discount</Text>

        <Text 
        bg="green.400" 
        border="8px solid white" 
        py="8px" 
        px="12px" 
        color="white" 
        fontWeight="500" 
        pos="absolute" 
        borderRadius="25px"
        top="20"
        left="-10"
        >
          Add to Cart</Text>

        </Box>

        <HStack align="center" gap="70px">
        <Heading py="6px">Irish potatoes</Heading>
        <Text bg="orange" fontWeight="600" p ="5px" borderRadius="10px"> N2,000 </Text>
        </HStack>
        <Text fontSize="20px"> We got 5 hectares of farm land in Kaduna, Nigeria.</Text>

      <HStack flexDirection="row" py="6px">
        <span><img src={star_fill} /></span>
        <span><img src={star_fill} /></span>
        <span><img src={star_fill} /></span>
        <span><img src={star_fill} /></span>
        <span><img src={star_blank} /></span>

      </HStack>
       
      </GridItem>

      <GridItem my="16px" mx="40px"  py="8px" align="center" borderRadius="30px" bg="green.400" colSpan="4">
          <Button fontWeight="700" fontSize="20px" color="white" bg ="inherit" href="#">See More</Button>
      </GridItem>
    

    </Grid>

    </section>
  )
}
