import * as Styled from './styles';

export type HeadingProps = {
  //befor:
  //children: P.node.isRequired,
  //now:
  children: React.ReactNode;

  //before
  //colorDark: P.bool,
  //now:
  colorDark?: boolean;

  //before:
  //as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  //now
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  //before:
  //size: P.oneOf(['small', 'medium', 'big', 'huge']),
  //now:
  size?: 'small' | 'medium' | 'big' | 'huge';

  //now
  uppercase?: boolean;
};

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}: HeadingProps) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};
