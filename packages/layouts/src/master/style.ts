import styled from 'styled-components';
import {colors} from '@ini-admin/utils';

export const Wrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`;
export const Sidebar = styled.div `
  flex-basis: 0;
  flex-grow: 1;
  max-width: 240px;
`;
export const Content = styled.div `
  flex-basis: 0;
  flex-grow: 1;
`;