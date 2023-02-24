import { Meta, Story } from '@storybook/react/types-6-0'; //importamos

import { Footer, FooterProps } from '.';

//como estamos fazendo export default, não temos como tipar, logo temos que colocar as Meta ao final do objeto

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p>Feito por Jeferson de Oliveira</p>`,
  },
} as Meta; //para tipar

export const Template: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
