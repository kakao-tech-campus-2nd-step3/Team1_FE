import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface DateFieldProps {
  label: string;
  height?: string;
  borderColor?: string;
  focusBorderColor?: string;
  selected?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export const DateField = ({
  label,
  height = "50px",
  borderColor = "#E3E3E3 solid 1.3px",
  focusBorderColor = "#95A4FC",
  selected,
  onChange,
}: DateFieldProps) => {
  return (
    <FormControl display="flex" alignItems="center" gap={3}>
      <FormLabel
        htmlFor={label}
        minWidth="25%"
        m="0"
        color="#727272"
        fontSize={18}
        fontWeight={800}
      >
        {label}
      </FormLabel>
      <Input
        id={label}
        height={height}
        border={borderColor}
        focusBorderColor={focusBorderColor}
        type="datetime-local"
        value={selected}
        onChange={onChange}
      />
    </FormControl>
  );
};
