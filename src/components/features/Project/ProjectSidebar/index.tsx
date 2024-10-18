import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "./Sidebar";

export const ProjectSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Box>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Box>
        {!isOpen && (
          <Button
            onClick={onOpen}
            borderRadius="full"
            backgroundColor="transparent"
            _hover={{ backgroundColor: "gray.100" }}
            margin={3}
            zIndex={1}
          >
            <HamburgerIcon boxSize={5} />
          </Button>
        )}

        <Box
          marginLeft={isOpen ? "250px" : "0"}
          transition="margin-left 0.3s ease"
          p={4}
          flex="1"
          zIndex={1}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
