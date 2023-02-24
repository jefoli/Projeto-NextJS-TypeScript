import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et
          deleniti laudantium mollitia aspernatur, ullam iure quasi! Incidunt
          culpa unde sapiente. Facilis corrupti quod ex voluptatem similique
          placeat nulla inventore!
        </p>
      </div>
    ),
    background: true,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    background: { type: 'boolean' },
  },
} as Meta;

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
