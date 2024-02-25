import { Grid, GridItem, Button, Container, Spacer, Heading, Flex, Text, Box, Stack, VStack, HStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons"; 
import { bannana1, bannana2, bannana3, beans, bookmark, cart, chicken, corn, cow, forward, goats, love, oranges1, oranges2, oranges3, rice, services, shop1, strawb1, strawb2, strawb3 } from "../Components/Assets";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div className='shop'>
       <VStack  pt="250px" pb="150px" bgImage="url('/shopBg.webp')" >

          <Heading as="h1" fontSize="8xl" color="black"> SHOP </Heading>
          <Heading as="h3" fontSize="3xl" color="gray.600"> fresh farm produce </Heading>

   </VStack>

   <Flex justify="center" align="center" gap="20" flexDirection={{ base: "column", lg: "row" }}>
      <Grid templateColumns="3" templateRows="3" justify="center" align="center">

        <GridItem rowStart={1} rowEnd={-1} colStart={1} colEnd={-1}>
          <img src={ shop1 } alt="" />
        </GridItem>

          <GridItem rowStart={1} rowEnd={-1} colStart={1} colEnd={-1} color="white" py="30%" fontSize="40px" fontWeight="500"><Text>Products</Text></GridItem>
      </Grid>

      <Grid templateColumns="3" templateRows="3" align="center">

        <GridItem rowStart={1} rowEnd={-1} colStart={1} colEnd={-1}>
          <img src={ services } alt="" />
        </GridItem>

          <GridItem rowStart={1} rowEnd={-1} colStart={1} colEnd={-1}color="white" py="30%" fontSize="40px" fontWeight="500"><Text>Services</Text></GridItem>
      </Grid>
    </Flex>

    <Stack px={{ base: "24px", lg: "100px" }} py="52px">
      <Heading>Oranges</Heading>
      <Text fontSize="20px" pb="20px">We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.</Text>

      <Flex  direction={{ base: "column", lg: "row"}} justify="start" gap="10">
        <Box pos="relative">
          <img src={ oranges1 } />
          <Box pos="absolute" top="85%" left="90%">
        <Button display="block" bg="grun.main" color="white" borderRadius="25px" border="4px solid white" >Add to Cart</Button>
        <Text color="grun.main" ml="60px" py="5px" fontWeight="600">N35,999</Text>
          </Box>
        </Box>

        <Box>
          <img src={ oranges2 } />
        </Box>

        <Box>
          <img src={ oranges3 } />
        <Stack gap="120px">

       
          <HStack pt="5px" fontSize="24">
            <StarIcon ml="auto" color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
          </HStack>


          <HStack>
            <Box ml="auto" mb="auto">
              <Link >
            <img src={ cart } />
            </Link>
            </Box>
            

             <Link>
            <img src={ love } />
            </Link>

             <Link>
            <img src={ bookmark } />
            </Link>

             <Link>
            <img src={ forward } />
            </Link>
          </HStack>

        </Stack>
          
        </Box>
      </Flex>
    </Stack>


    <Stack px={{ base: "24px", lg: "100px" }} py="52px">
      <Heading>Strawberries</Heading>
      <Text fontSize="20px" pb="20px">We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.</Text>

      <Flex  direction={{ base: "column", lg: "row"}} justify="start" gap="10">

         <Box>
             <Stack gap="120px">

          <HStack>
            <Box ml="auto" mb="auto">
              <Link >
            <img src={ cart } />
            </Link>
            </Box>
            

             <Link>
            <img src={ love } />
            </Link>

             <Link>
            <img src={ bookmark } />
            </Link>

             <Link>
            <img src={ forward } />
            </Link>
          </HStack>

          
          <HStack pb="5px" fontSize="24">
            <StarIcon ml="auto" color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="gray.300"/>
          </HStack>

        </Stack>

          <img src={ strawb1 } />   
        </Box>
        
        <Box mt="auto">
          <img src={ strawb2 } />
        </Box>

      
        <Box pos="relative">
          <img src={ strawb3 } />
          <Box pos="absolute" bottom="75%" right="90%">
        <Button display="block" bg="grun.main" color="white" borderRadius="25px" border="4px solid white" >Add to Cart</Button>
        <Text color="grun.main" ml="5" py="5px" fontWeight="600">N12,999</Text>
          </Box>
        </Box>
      </Flex>
    </Stack>

     <Stack px={{ base: "24px", lg: "100px" }} py="52px">
      <Heading>Bananas</Heading>
      <Text fontSize="20px" pb="20px">We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.</Text>

      <Flex  direction={{ base: "column", lg: "row"}} justify="start" gap="10">

         <Box mt="auto">
          <img src={ bannana1 } />
        </Box>

        <Box pos="relative">
          <img src={ bannana2 } />
          <Box pos="absolute" bottom="75%" right="90%">
        <Button display="block" bg="grun.main" color="white" borderRadius="25px" border="4px solid white" >Add to Cart</Button>
        <Text color="grun.main" ml="5" py="5px" fontWeight="600">N12,999</Text>
          </Box>
        </Box>

        <Box>
             <Stack gap="120px">

          <HStack>
            <Box ml="auto" mb="auto">
              <Link >
            <img src={ cart } />
            </Link>
            </Box>
            

             <Link>
            <img src={ love } />
            </Link>

             <Link>
            <img src={ bookmark } />
            </Link>

             <Link>
            <img src={ forward } />
            </Link>
          </HStack>

          
          <HStack pb="5px" fontSize="24">
            <StarIcon ml="auto" color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="gray.300"/>
          </HStack>

        </Stack>

          <img src={ bannana3 } />   
        </Box>
        
      </Flex>
    </Stack>

  {/*Food Section*/}

  <Stack bg="gray.300" align="center" justify="center" py="10" gap="16" direction={{ base: "column", lg: "row"}}>
    <Box >
      <img src={ corn } />
      <Flex justify="space-between" pt="5px" pb="20">
        <Text fontWeight="600">Maize</Text>
        <Text fontWeight="600" color="grun.main">N8,999</Text>
      </Flex>
        <Button bg="grun.main" color="white" size="xs" borderRadius="25px">Add to Cart</Button>
    </Box>

    <Box>
      <img src={ corn} />
      <Flex justify="space-between" pt="5px" pb="20">
        <Text fontWeight="600">Beans</Text>
        <Text fontWeight="600" color="grun.main">N8,999</Text>
      </Flex>
        <Button bg="grun.main" color="white" size="xs" borderRadius="25px">Add to Cart</Button>
    </Box>

    <Box>
      <img src={ rice } />
      <Flex justify="space-between" pt="5px" pb="20">
        <Text fontWeight="600">Rice</Text>
        <Text fontWeight="600" color="grun.main">N8,999</Text>
      </Flex>
        <Button bg="grun.main" color="white" size="xs" borderRadius="25px">Add to Cart</Button>
    </Box>

  </Stack>

    {/* Animal Section*/}

    <Grid py="20" px="100px">
      <Flex gap={{ base: "5", lg: "20" }} direction={{ base: "column", lg: "row"}} pb={{base:"10", lg: "20"}}> 
        <img src={ cow } />
        <Flex direction="column" >
          <Heading>Cows</Heading>

          <Spacer />
          
          <Stack direction={{ base: "column", lg: "row"}} spacing={{base: "40px", lg: "180px"}}>
          
          <HStack pb="5px" fontSize="24">
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="gray.300"/>
          </HStack>


          <HStack>
              <Link >
            <img src={ cart } />
            </Link>
              
         
             <Link>
            <img src={ love } />
            </Link>

             <Link>
            <img src={ bookmark } />
            </Link>

             <Link>
            <img src={ forward } />
            </Link>
          </HStack>
          </Stack>

        </Flex>
      </Flex>


       <Flex gap={{ base: "5", lg: "20" }} direction={{ base: "column", lg: "row"}} pb={{base:"10", lg: "20"}}>
        <img src={ chicken } />
        <Flex direction="column" >
          <Heading>Chickens</Heading>

          <Spacer />
          
          <Stack direction={{ base: "column", lg: "row"}} spacing={{base: "40px", lg: "180px"}}>
          
          <HStack pb="5px" fontSize="24">
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="gray.300"/>
          </HStack>


          <HStack>
              <Link >
            <img src={ cart } />
            </Link>
              
         
             <Link>
            <img src={ love } />
            </Link>

             <Link>
            <img src={ bookmark } />
            </Link>

             <Link>
            <img src={ forward } />
            </Link>
          </HStack>
          </Stack>

        </Flex>
      </Flex>


       <Flex gap={{ base: "5", lg: "20" }} direction={{ base: "column", lg: "row"}} pb={{base:"10", lg: "20"}}>
        <img src={ goats } />
        <Flex direction="column" >
          <Heading>Goats</Heading>

          <Spacer />
          
          <Stack direction={{ base: "column", lg: "row"}} spacing={{base: "40px", lg: "180px"}}>
          
          <HStack pb="5px" fontSize="24">
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="grun.star"/>
            <StarIcon color="gray.300"/>
          </HStack>


          <HStack>
              <Link >
            <img src={ cart } />
            </Link>
              
         
             <Link>
            <img src={ love } />
            </Link>

             <Link>
            <img src={ bookmark } />
            </Link>

             <Link>
            <img src={ forward } />
            </Link>
          </HStack>
          </Stack>

        </Flex>
      </Flex>



    </Grid >

    </div>
  )
}
