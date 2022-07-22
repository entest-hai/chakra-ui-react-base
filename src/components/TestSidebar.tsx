import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  CloseButton,
  FlexProps,
  Link,
  Icon,
  useDisclosure,
  BoxProps,
  Drawer,
  DrawerContent,
  IconButton,
} from "@chakra-ui/react";
import React, { ReactNode, ReactText } from "react";
import { IconType } from "react-icons";
import {
  FiCompass,
  FiHome,
  FiMenu,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourite", icon: FiStar },
  { name: "Setting", icon: FiSettings },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("teal.100", "orange.100")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "xs" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        h="20"
        mx="8"
      >
        <Text fontSize={"2xl"} fontFamily="monospace" fontWeight={"bold"}>
          Logo
        </Text>
        <CloseButton
          display={{ base: "flex", md: "flex" }}
          onClick={onClose}
        ></CloseButton>
      </Flex>

      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align={"center"}
        p={"4"}
        mx={"4"}
        cursor="pointer"
        _hover={{ bg: "cyan.400", color: "white" }}
        borderRadius="lg"
        role={"group"}
      >
        {icon && (
          <Icon
            mr={"4"}
            fontSize="16"
            _groupHover={{ color: "white" }}
            as={icon}
          ></Icon>
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      bg={useColorModeValue("white", "gray.900")}
      minH={"16"}
      // bgColor={"blue.100"}
    >
      {/* <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        // alignItems={"center"}
        bg={useColorModeValue("white", "gray.900")}
        // justifyContent={"flex-start"}
        // display={{ base: "flex", md: "flex" }}
      > */}
      <IconButton
        variant={"outline"}
        onClick={onOpen}
        icon={<FiMenu></FiMenu>}
        aria-label="open menu"
      ></IconButton>
      <Text fontSize={"2xl"} ml="8" fontFamily={"monospace"} fontWeight="bold">
        Logo
      </Text>
      {/* </Flex> */}
      {/* <Flex alignItems={"center"} bg={useColorModeValue("white", "gray.900")}>
        <IconButton
          variant={"outline"}
          icon={<FiMenu></FiMenu>}
          aria-label="open menu"
          // onClick={onOpen}
        ></IconButton>
      </Flex> */}
    </Flex>
  );
};

export const TestSidebar = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      {/* <SidebarContent
        display={{ base: "none", md: "block" }}
        onClose={() => onClose}
      ></SidebarContent> */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={"xs"}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose}></SidebarContent>
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen}></MobileNav>
      <Box bg={"orange.100"} ml={{ base: "0", md: "60" }}>
        {children}
      </Box>
    </Box>
  );
};
