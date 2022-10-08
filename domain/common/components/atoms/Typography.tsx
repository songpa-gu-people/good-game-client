import styled from "@emotion/styled";
import { css } from "@emotion/react";
import palette from "../../../../styles/palette";

type textPositionType = "start" | "center" | "end";

interface ITypographyProps {
  size?: string;
  color?: string;
  weight?: string | number;
  textPosition?: textPositionType;
  children?: any;
}

const Span = styled.span<{
  size: string;
  color: string;
  weight: string | number;
  textPosition: textPositionType;
}>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};

  ${(props) =>
    props.textPosition &&
    css`
      display: inline-flex;
      align-items: ${props.textPosition};
    `}
`;

const Typography = ({
  size = "0.8rem",
  color = palette.black,
  weight = "normal",
  textPosition = "center",
  children,
  ...rest
}: ITypographyProps) => {
  return (
    <Span color={color} size={size} weight={weight} textPosition={textPosition} {...rest}>
      {children}
    </Span>
  );
};

export default Typography;
