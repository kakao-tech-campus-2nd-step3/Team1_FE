import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

interface DateFieldProps {
  label: string;
  height?: string;
  borderColor?: string;
  focusBorderColor?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
  errorMessage?: string;
}

export const DateField = forwardRef<HTMLInputElement, DateFieldProps>(
  (
    {
      label,
      height = "50px",
      borderColor = "#E3E3E3 solid 1.3px",
      focusBorderColor = "#95A4FC",
      value,
      onChange,
      onBlur,
      isInvalid,
      errorMessage,
    },
    ref
  ) => {
    return (
      <FormControl
        display="flex"
        alignItems="center"
        gap={3}
        isInvalid={isInvalid}
      >
        <FormLabel
          htmlFor={label}
          minWidth="25%"
          m="0"
          color="#727272"
          fontSize={18}
          fontWeight={800}
          height="50px"
        >
          {label}
        </FormLabel>
        <VStack width="100%" height="70px">
          <Input
            id={label}
            minHeight={height}
            border={borderColor}
            focusBorderColor={focusBorderColor}
            type="datetime-local"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
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
  }
);
