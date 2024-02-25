import { NavLink } from "react-router-dom";
import { Box, Flex, HStack } from "@chakra-ui/react"
import { logo } from "./Assets";

export default function Navbar() {
  return (
  
      <Flex as ="nav" px="10" align="center" gap="400px" pos=" absolute ">
        <Box w="80px">
        <img src={logo} alt="" />
        </Box>


        <HStack spacing="8" fontSize="24px">
        <NavLink to ="/">home</NavLink>
        <NavLink to ="Project">project</NavLink>
        <NavLink to ="Blog">blog</NavLink>
        <NavLink to ="Shop">shop</NavLink>
        </HStack>
      </Flex>

  )
}
