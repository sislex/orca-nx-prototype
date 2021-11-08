import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MiddleLayoutComponent } from './middle-layout.component';

export default {
  title: 'MiddleLayoutComponent',
  component: MiddleLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MiddleLayoutComponent>;

const Template: Story<MiddleLayoutComponent> = (args: MiddleLayoutComponent) => ({
  component: MiddleLayoutComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}