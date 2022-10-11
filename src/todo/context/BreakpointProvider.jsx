import { useBreakpointValue } from "@chakra-ui/react";
import { BreakpointContext } from "./";

export const BreakpointProvider = ({ children }) => {
  const gridListColumns = useBreakpointValue({ sm: 2, md: 3 });
  const gridHomeColumns = useBreakpointValue({ sm: 1, md: 2 });

  const brandSize = useBreakpointValue({ base: "md", lg: "xl" });
  const fontSize = useBreakpointValue({ base: "sm", lg: "md" });
  const buttonSize = useBreakpointValue({ base: "sm", lg: "md" });
  const badgeSize = useBreakpointValue({ base: ".70rem", lg: ".75rem" });

  return (
    <BreakpointContext.Provider
      value={{
        badgeSize,
        brandSize,
        buttonSize,
        fontSize,
        gridListColumns,
        gridHomeColumns,
      }}
    >
      {children}
    </BreakpointContext.Provider>
  );
};
