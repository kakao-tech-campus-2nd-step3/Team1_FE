import type { InputProps } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { forwardRef } from "react";

interface TextFieldProps extends InputProps {
  label: string;
  height?: string;
  borderColor?: string;
  focusBorderColor?: string;
  isInvalid?: boolean;
  errorMessage?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label = "",
      height = "50px",
      borderColor = "#E3E3E3 solid 1.3px",
      focusBorderColor = "#95A4FC",
      isInvalid,
      errorMessage = "",
      ...inputProps
    },
    ref,
  ) => {
    return (
      <FormControl
        display="flex"
        alignItems="center"
        gap={3}
        isInvalid={isInvalid}
      >
        <FormLabel
          minWidth="25%"
          m="0"
          color="#727272"
          fontSize={18}
          height="50px"
          fontWeight={800}
        >
          {label}
        </FormLabel>
        <VStack width="100%" height="70px">
          <Input
            ref={ref}
            height={height}
            border={borderColor}
            focusBorderColor={focusBorderColor}
            type="text"
            {...inputProps}
          />
          {errorMessage && (
            <FormErrorMessage
              m={-1}
              fontSize={"13px"}
              width="100%"
              textAlign="left"
            >
              {errorMessage}
            </FormErrorMessage>
          )}
        </VStack>
      </FormControl>
    );
  },
);
