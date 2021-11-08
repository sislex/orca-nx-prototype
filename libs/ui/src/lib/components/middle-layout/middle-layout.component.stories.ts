import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MiddleLayoutComponent } from './middle-layout.component';
import {UiModule} from "../../ui.module";

export default {
  title: 'MiddleLayoutComponent',
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    })
  ],
} as Meta<MiddleLayoutComponent>;

const Template: Story<MiddleLayoutComponent> = (args: MiddleLayoutComponent) => ({
  template: `
<driverz-middle-layout style="height: 400px;">
  <div left style="height: 100%; background: aliceblue">left</div>
  <div middle style="height: 100%; background: antiquewhite">middle</div>
  <div right style="height: 100%; background: darkcyan">right</div>
</driverz-middle-layout>
  `,
  props: args,
});

export const Primary = Template.bind({});
