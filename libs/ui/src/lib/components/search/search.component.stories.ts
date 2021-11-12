import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SearchComponent } from './search.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {UiModule} from "../../ui.module";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'SearchComponent',
  component: SearchComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        UiModule,
        CommonModule, MatFormFieldModule, MatIconModule, FormsModule,

        MatButtonModule,
        MatInputModule,
      ],
    })
  ],
  argTypes: { emitter: { action: 'emitter' } },
} as Meta<SearchComponent>;

const Template: Story<SearchComponent> = (args: SearchComponent) => ({
  component: SearchComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
