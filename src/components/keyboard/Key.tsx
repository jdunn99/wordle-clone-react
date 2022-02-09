import styled from "styled-components";

// TODO: Convert to singular type shared with Grid

export const Key = styled.button<{
  background?: string;
  large?: boolean;
}>`
  background: ${(props) => (props.background ? props.background : `#818384`)};
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0;
  border-radius: 4px;
  height: 58px;
  margin: 0 6px 0 0;
  display: flex;
  align-items: center;
  flex: ${({ large }) => (large ? 1.5 : 1)};
  justify-content: center;
  font-size: ${({ large }) => (large ? "12px" : "14px")};
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`;
