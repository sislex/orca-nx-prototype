import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { GridLayoutComponent } from './grid-layout.component';

export default {
  title: 'GridLayoutComponent',
  component: GridLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<GridLayoutComponent>;

const Template: Story<GridLayoutComponent> = (args: GridLayoutComponent) => ({
  component: GridLayoutComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}