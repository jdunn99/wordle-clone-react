import styled from "styled-components";
import React from "react";

interface StyledCellProps {
  background?: string;
  isActive?: boolean;
}

interface CellProps {
  word: string;
  index: number;
  background?: string;
  isActive?: boolean; // means the cell rendered is in the guess row
}

const StyledCell = styled.div<StyledCellProps>`
  background: ${(props) => (props.background ? props.background : `#0f0e11`)};
  border: ${({ isActive }) =>
    isActive
      ? "1px solid rgba(255, 255, 255, 0.45)"
      : "1px solid rgba(255, 255, 255, 0.1)"};
  border-radius: 0.5rem;
  width: 100px;
  height: 100px;
  margin: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 767.98px) {
    width: 55px;
    height: 55px;
  }
`;

/**
 * Renders a letter of empty space in the grid
 */
export const Cell: React.FC<CellProps> = ({
  word,
  index,
  background,
  isActive,
}) => {
  return !!word[index] ? (
    <StyledCell isActive={isActive} background={background}>
      {word[index]}
    </StyledCell>
  ) : (
    <StyledCell />
  );
};
