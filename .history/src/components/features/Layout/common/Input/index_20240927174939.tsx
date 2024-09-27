import styled from '@emotion/styled';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';

type Props = {
  onSearch?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = ({ onSearch, ...props }: Props) => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <InputGroup>
      <StyledInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      <InputRightElement>
        <IconButton
          onClick={handleSearch}
          icon={<ArrowForwardIcon />}
          aria-label="Search"
          variant="ghost"
        />
      </InputRightElement>
    </InputGroup>
  );
};

const InputGroup = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const StyledInput = styled.input({
  width: '100%',
  paddingRight: '3rem',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  borderRadius: '13.86px',
  '&:focus': {
    boxShadow: 'outline',
  },
});

const InputRightElement = styled.div({
  position: 'absolute',
  right: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
});