import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { GridComponent } from './grid.component';
import {GridModule} from "../../grid.module";
import {AgGridModule} from "ag-grid-angular";
import {Columns, RowData} from "./stabs";

export default {
  title: 'GridComponent',
  component: GridComponent,
  decorators: [
    moduleMetadata({
      imports: [GridModule],
    })
  ],
} as Meta<GridComponent>;

const Template: Story<GridComponent> = (args: GridComponent) => ({
  template: `
  <div style="height: 300px; position: relative;">
    <driverz-grid [columns]="columns" [rowData]="rowData"></driverz-grid>
  </div>
  `,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  columns: Columns,
  rowData: RowData,
}
