import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Tooglecolor = () => {
    const { colorMode, toggleColorMode } = useColorMode(); // Use the useColorMode hook
    return (
        <Button onClick={() => toggleColorMode()}
        pos="absolute"
        top="0"
        right="0"
        m="1rem"
        >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
}

export default Tooglecolor