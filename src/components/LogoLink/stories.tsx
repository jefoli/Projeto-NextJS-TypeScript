import { Meta, Story } from '@storybook/react/types-6-0';
import { LogoLink, LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo',
    srcImg: '',
    link: 'http://localhost',
  },
  argTypes: {
    text: { type: 'string' },
    srcImg: { type: 'string' },
    link: { type: 'string' },
  },
} as Meta;

export const Template: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
