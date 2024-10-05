import styled from "@emotion/styled";
import { MoreVertical } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  imageSrc?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ProjectCard = ({ title, imageSrc, ...rest }: Props) => (
  <Wrapper {...rest}>
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

const Wrapper = styled.div({
  width: "253px",
  height: "161px",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  position: "relative",
});

const ImageArea = styled.div({
  width: "100%",
  height: "70%",
});

const StyledImage = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const PurpleBackground = styled.div({
  width: "100%",
  height: "100%",
  backgroundColor: "#9F7AEA",
});

const SettingsButton = styled.button({
  position: "absolute",
  top: "8px",
  right: "8px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "black",
  padding: "4px",
  "&:hover": {
    background: "rgba(0, 0, 0, 0.1)",
    borderRadius: "50%",
  },
});

const TextArea = styled.div({
  height: "30%",
  background: "white",
  padding: "8px",
  display: "flex",
  alignItems: "center",
});

const Title = styled.h3({
  margin: 0,
  fontSize: "14px",
  fontWeight: "bold",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export default ProjectCard;
