import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { boots, soil, machine, kid, goat, maize, sheep } from "../Components/Assets";


export default function Project() {
  return (

    <>

    <Grid  py="150px">

      <Heading bg="grun.main" py="20px" mx="0" color="white" textAlign="center"> Our Projects</Heading>
      <Heading as="h3" textAlign="center" py="30px">The Soya Project - Kaduna State</Heading>
      
      <Grid templateColumns="repeat(6, 1fr)" align="center" rowGap="70">

        <GridItem colSpan="6">
          <img src={ machine } />
        </GridItem>

        <GridItem colSpan={{ base: 6, lg: 3}}>
            <img src={ boots } width={460}/>
        </GridItem>

        <GridItem colSpan={{ base: 6, lg: 3}}>
            <img src={ soil } width={460}/>
        </GridItem>

      </Grid>

      <Text color="gray.600" fontSize="20px" px="90px" py="10">
        We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November. We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
      </Text>

      <Text color="gray.600" fontSize="20px" px="90px" py="10">
        We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November. We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
      </Text>

      <Text color="gray.600" fontSize="20px" px="90px" py="10">
        We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November. We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
      </Text>

      <Text color="gray.600" fontSize="20px" px="90px" py="10">
        We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November. We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
      </Text>

      <Text color="gray.600" fontSize="20px" px="90px" py="10">
        We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November. We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
      </Text>

      <Text  align="center" borderBottom="1px solid #000" mx="90px"/>
    </Grid>


     <Grid >
      <Heading as="h3" textAlign="center" py="20px">The Goat Farm Project - Niger State</Heading>
      
      <Grid templateColumns="repeat(6, 1fr" align="center" rowGap="70">

        <GridItem colSpan="6">
          <img src={ kid } />
        </GridItem>

        <GridItem colSpan={{ base: 6, lg: 3}}>
            <img src={ goat } width={460}/>
        </GridItem>

        <GridItem colSpan={{ base: 6, lg: 3}}>
            <img src={ sheep } width={460}/>
        </GridItem>

      </Grid>

      <Text color="gray.600" fontSize="20px" px="90px" py="10">
        We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November. We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
      </Text>

      <Text color="gray.600" fontSize="20px" px="90px" py="10">
        We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November. We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
      </Text>

      <Text color="gray.600" fontSize="20px" px="90px" py="10">
        We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November. We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans.
      </Text>

      <Text  align="center" borderBottom="1px solid #000" mx="90px"/>
    </Grid>


      <Grid >
      <Heading as="h3" textAlign="center" pt="20">The Maize Project - Plateau State</Heading>
          <GridItem align="center" py="20">
          <img src={ maize } />
          </GridItem>
      </Grid>
  </>
  )
}
