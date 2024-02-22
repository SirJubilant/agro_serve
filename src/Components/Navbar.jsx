import { NavLink } from "react-router-dom";
import { Box, Flex, HStack } from "@chakra-ui/react"
import { logo } from "./Assets";

export default function Navbar() {
  return (
  
      <Flex as ="nav" align="center" gap="500px" pos=" absolute ">
        <Box w="80px">
        <img src={logo} alt="" />
        </Box>


        <HStack spacing="20px" fontSize="20px">
        <NavLink to ="/">home</NavLink>
        <NavLink to ="Project">project</NavLink>
        <NavLink to ="Blog">blog</NavLink>
        <NavLink to ="Shop">shop</NavLink>
        </HStack>
      </Flex>

  )
}
