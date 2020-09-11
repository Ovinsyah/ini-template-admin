import React from 'react'
import { Wrapper, Sidebar, Content } from './style';

interface DefaultModel {
  children: React.ReactNode;
}
export default ({ children, ...props} : DefaultModel) => {
  return (
    <Wrapper>
      <Sidebar>
        1
      </Sidebar>
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}
