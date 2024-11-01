import { FormControl, FormLabel, HStack, Switch, Text } from "@chakra-ui/react";

interface SwitchFieldProps {
  title: string;
  description?: string;
  id: string;
  isChecked: boolean;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export const SwitchField = ({
  title,
  description,
  id,
  onChange,
  isChecked,
}: SwitchFieldProps) => {
  return (
    <FormControl>
      <HStack width="100%" justifyContent="space-between" alignItems="center">
        <FormLabel fontWeight="bold" mb="0">
          {title}
        </FormLabel>
        <Switch
          id={id}
          size="md"
          isChecked={isChecked}
          onChange={onChange}
          aria-label={title}
        />
      </HStack>
      {description && (
        <Text fontSize="sm" color="gray.500" mt={2}>
          {description}
        </Text>
      )}
    </FormControl>
  );
};
