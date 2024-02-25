import { Box, Grid, Flex, GridItem, Heading, HStack } from "@chakra-ui/react";
import { logo,
    twitterX,
    instagram,
    tiktok,
    linkedin,
    youtube,
    facebook 
} from "../Components/Assets";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <Grid bg="grun.footer" p="16" color="white" templateColumns="repeat(4, 1fr)" justify="center" gap={{ base: 20, lg: 80 }}>
       
        <GridItem colSpan={{ base: 4, lg: 2}} justify="center" >

            <Flex align="center">
            <Box>
                <img src={ logo } />
            </Box>

            <Box>
                <Heading as="h1" fontSize="4xl" fontFamily="brand"> Zenith </Heading>
                <Heading fontSize="2xl" fontWeight="400" > agro-allied </Heading>
                <Heading fontSize="2xl" fontWeight="900"> cooperative</Heading>
                <Heading fontSize="3xl" fontWeight="100" letterSpacing="2px"> society </Heading>
            </Box>
            </Flex>
                <HStack >
                    <span><img src={ instagram } /></span>
                    <span><img src={ youtube } /></span>
                    <span><img src={ facebook } /></span>
                    <span><img src={ twitterX } /></span>
                    <span><img src={ linkedin } /></span>
                    <span><img src={ tiktok } /></span>
                </HStack>
        </GridItem>


        <GridItem justify="center" colSpan={{ base: 4, lg: 2}}>
            <Heading fontSize="20px" py="4px"> Quick Links</Heading>

            <Flex gap="20" py="8px" maxWidth={{ base: 60, lg: 80}} borderTop="2px solid white">
            <Box display="flex" flexDirection="column" fontSize="16px">
                <NavLink to ="/">Home</NavLink>
                <NavLink to ="project">Project</NavLink>
                <NavLink to ="contact">Contact us</NavLink>
            </Box>

            <Box display="flex" flexDirection="column" fontSize="16px">
                <NavLink to ="blog">Blog</NavLink>
                <NavLink to ="shop">Shop</NavLink>
                <NavLink to ="/">Join us</NavLink>
            </Box>
            </Flex>

            
            
        </GridItem>
    </Grid>
  )
}
