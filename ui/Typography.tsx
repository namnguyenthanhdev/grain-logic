import * as React from "react";
import styled from "styled-components";
import cl from "classnames";

const EnhancedParagraph = styled.p<{ $color: string }>`
  font-style: normal;
  color: ${(props) => props.$color};
  &.label {
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
  }

  &.title {
    font-size: 64px;
    line-height: normal;
    font-weight: 500;
  }

  &.sub-header {
    font-size: 48px;
    line-height: 72px;
    font-weight: 600;
  }

  &.header {
    font-size: 80px;
    line-height: 72px;
    font-weight: 800;
  }
`;

interface TypographyProps {
  className?: string;
  children: React.ReactNode;
  type?: "label" | "header" | "sub-header" | "title";
  color?: string;
}

export const Typography = (props: TypographyProps) => {
  const { className, type = "title", children, color } = props;
  return (
    <EnhancedParagraph
      className={cl("responsive-typography", className, { [type]: type })}
      $color={color}
    >
      {children}
    </EnhancedParagraph>
  );
};
