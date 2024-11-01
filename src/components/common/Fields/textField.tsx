import type { InputProps } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { forwardRef } from "react";

interface TextFieldProps extends InputProps {
  label: string;
  height?: string;
  borderColor?: string;
  focusBorderColor?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      height = "50px",
      borderColor = "#E3E3E3 solid 1.3px",
      focusBorderColor = "#95A4FC",
      ...inputProps
    },
    ref
  ) => {
    return (
      <FormControl display="flex" alignItems="center" gap={3}>
        <FormLabel
          minWidth="25%"
          m="0"
          color="#727272"
          fontSize={18}
          fontWeight={800}
        >
          {label}
        </FormLabel>
        <Input
          ref={ref}
          height={height}
          border={borderColor}
          focusBorderColor={focusBorderColor}
          type="text"
          {...inputProps}
        />
      </FormControl>
    );
  }
);
