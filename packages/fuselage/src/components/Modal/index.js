
import React from 'react';

import { Tile } from '../Tile';
import { Box, Margins, MarginsWrapper } from '../Box';
import { Button } from '../Button';
import { Scrollable } from '../Box/Scrollable';
import { Flex } from '../Box/Flex';
import { Icon } from '../Icon';
import { Avatar } from '../Avatar';


const HeaderInner = Box.extend('rcx-modal__header-inner', 'div');
const Container = Box.extend('rcx-modal__container', 'div');
const Footer = Box.extend('rcx-modal__footer', 'footer');
const Thumb = React.memo((props) => <Avatar size='x32' {...props} />);


const Close = React.memo((props) => <Flex.Item shrink={0}><Button small ghost><Icon name='cross' size='24' {...props}/></Button></Flex.Item>);

export const Header = React.memo(({ children, ...props }) => (
  <Margins all={32}>
    <Box is='header' className='rcx-modal__header' {...props}>
      <Flex.Container alignItems='center'>
        <MarginsWrapper all={8}>
          <HeaderInner>{React.Children.map(children, (c) => <Margins all={8}>{c}</Margins>)}</HeaderInner>
        </MarginsWrapper>
      </Flex.Container>
    </Box>
  </Margins>
));

export const Modal = ({ children, ...props }) => (
  <Flex.Container>
    <Box componentClassName='rcx-modal' { ...props } is='dialog'>
      <Flex.Container direction='column'>
        <Flex.Item grow={1}>
          <Tile elevation='2' className='rcx-modal__inner' padding='none' is='div'>
            {children}
          </Tile>
        </Flex.Item>
      </Flex.Container>
    </Box>
  </Flex.Container>
);
Modal.Title = React.memo(({ children }) => (
  <Flex.Item grow={1} shrink={1}>
    <Box textStyle='headline' className='rcx-modal__title'>{children}</Box>
  </Flex.Item>
));
Modal.Header = Header;
Modal.Footer = React.memo(({ children }) => (
  <Margins all={32}>
    <Footer> {children}</Footer>
  </Margins>
));
Modal.Container = ({ children }) => (
  <Scrollable vertical>
    <Margins inline={32}>
      <Container> {children}</Container>
    </Margins>
  </Scrollable>
);
Modal.Close = Close;
Modal.Thumb = Thumb;