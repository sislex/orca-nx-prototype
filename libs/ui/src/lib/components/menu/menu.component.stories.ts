import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MenuComponent } from './menu.component';
import {UiModule} from "../../ui.module";
import {MenuStub} from "./stubs";

export default {
  title: 'MenuComponent',
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    })
  ],
  argTypes: { emitter: { action: 'emitter' } },
} as Meta<MenuComponent>;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  template: `
    <div style="height: 400px; width: 200px;">
      <driverz-menu [menu]="menu" (emitter)="emitter($event)"></driverz-menu>
    </div>
  `,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  menu: MenuStub,
}
