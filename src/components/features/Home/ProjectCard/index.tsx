import styled from "@emotion/styled";
import { MoreVertical } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  imageSrc?: string;
  width?: number | string;
  height?: number | string;
};

export const ProjectCard: React.FC<Props> = ({ title, imageSrc, width, height }) => (
  <Wrapper width={width} height={height}>
    <ImageArea>
      {imageSrc ? <StyledImage src={imageSrc} alt="" /> : <PurpleBackground />}
    </ImageArea>
    <SettingsButton>
      <MoreVertical size={16} />
    </SettingsButton>
    <TextArea>
      <Title>{title}</Title>
    </TextArea>
  </Wrapper>
);

const Wrapper = styled.div<{ width?: number | string; height?: number | string }>`
  width: ${props => props.width || "253px"};
  height: ${props => props.height || "161px"};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ImageArea = styled.div`
  width: 100%;
  height: 70%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PurpleBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #9F7AEA;
`;

const SettingsButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: black;
  padding: 4px;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
`;

const TextArea = styled.div`
  height: 30%;
  background: white;
  padding: 8px;
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default ProjectCard;