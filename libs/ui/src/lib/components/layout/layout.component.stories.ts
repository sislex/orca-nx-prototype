import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LayoutComponent } from './layout.component';
import {UiModule} from "../../ui.module";

export default {
  title: 'LayoutComponent',
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    })
  ],
} as Meta<LayoutComponent>;

const Template: Story<LayoutComponent> = (args: LayoutComponent) => ({
  template: `
<driverz-layout style="height: 400px;">
  <div top style="height: 100%; background: aliceblue">top</div>
  <div middle style="height: 100%; background: antiquewhite">middle</div>
  <div bottom style="height: 100%; background: darkcyan">bottom</div>
</driverz-layout>
  `,
  props: args,
});

const WithMiddleLayoutTemplate: Story<LayoutComponent> = (args: LayoutComponent) => ({
  template: `
<driverz-layout style="height: 400px;">
  <div top style="height: 100%; background: aliceblue">top</div>
  <driverz-middle-layout middle style="height: 400px;">
    <div left style="height: 100%; background: darkcyan">left</div>
    <div middle style="height: 100%; background: antiquewhite">middle</div>
    <div right style="height: 100%; background: tomato">right</div>
  </driverz-middle-layout>
  <div bottom style="height: 100%; background: darkcyan">bottom</div>
</driverz-layout>
  `,
  props: args,
});


export const Primary = Template.bind({});
export const WithMiddleLayout= WithMiddleLayoutTemplate.bind({});
