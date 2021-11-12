import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  SimpleChanges,
  EventEmitter
} from '@angular/core';
import {ColDef, ColumnResizedEvent, GridOptions, GridReadyEvent} from "ag-grid-community";
import {GridApi} from "ag-grid-community/dist/lib/gridApi";
import {ColumnApi} from "ag-grid-community/dist/lib/columns/columnApi";

@Component({
  selector: 'driverz-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input() public rowData: any[] = [];
  public rowDataList: any[] = [];
  @Input() public columns: (ColDef)[] = [];
  columnDefs: (ColDef)[] = [];

  @Output() emitter = new EventEmitter();

  private gridApi: GridApi | any;
  private gridColumnApi: ColumnApi | undefined;

  public overlayLoadingTemplate = '<span class="ag-overlay-loading-center">Loading</span>';

  @Input() defaultColDef = {
    flex: 1,
    minWidth: 150,

    sortable: false,
    filter: true,
    suppressMenu: true,

    resizable: true,
    wrapText: false,
    autoHeight: true,
  };

  gridOptions: GridOptions = {
    rowSelection: 'multiple',
    getRowHeight: rowNode => rowNode.data.gridDetails ? 300 : null,

    isFullWidthCell: function (rowNode) {
      return rowNode.data.isGroup || rowNode.data.gridDetails;
    },
    suppressColumnVirtualisation: true,
    groupUseEntireRow: true,

    animateRows: true,
    suppressContextMenu: true,
    enableCellTextSelection: true
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.rowData?.currentValue) {
      if (this.isRowDataChangeNeed()) {
        this.rowDataList = this.rowData;
      }
    }

    if (changes?.columns?.currentValue) {
      if (this.isColumnsChangeNeed(this.columnDefs, this.columns)) {
        this.columnDefs = this.columns;
      }
    }
  }

  isColumnsChangeNeed(prevList: (ColDef | any)[], currentList: (ColDef | any)[]) {
    let isChangeNeed = false;
    if (prevList.length !== currentList.length) {
      isChangeNeed = true;
    } else {
      prevList.forEach((item, key) => {
        if (item.field !== currentList[key]?.field) {
          isChangeNeed = true;
        } else {
          if (item.wrapText !== currentList[key].wrapText || item.hidden !== currentList[key]?.hidden) {
            isChangeNeed = true;
          }
        }
      });

      currentList.forEach((item, key) => {
        if (item.field !== prevList[key]?.field) {
          isChangeNeed = true;
        } else {
          if (item.wrapText !== prevList[key].wrapText || item.hidden !== prevList[key]?.hidden) {
            isChangeNeed = true;
          }
        }
      });
    }

    return isChangeNeed;
  }

  isRowDataChangeNeed(rowData = this.rowData, rowDataList = this.rowDataList) {
    let isChangeNeed = false;

    const rowIds = new Set(rowDataList.map(item => item.id));
    const rowIdsNew = new Set(rowData.map(item => item.id));
    rowDataList.forEach(item => {
      if (!isChangeNeed) {
        if (!rowIdsNew.has(item.id)) {
          isChangeNeed = true;
        }
      }
    });

    rowData.forEach((item) => {
      if (!isChangeNeed) {
        if (!rowIds.has(item.id)) {
          isChangeNeed = true;
        }
      }
    });

    return isChangeNeed;
  }


  ngOnInit() {
    this.gridOptions.onSelectionChanged = (() => {
      this.emitter.emit({
        event: 'GridComponent:CHANGE_SELECTIONS',
        data: {selectedRows: this.gridApi.getSelectedNodes().map((row: any) => row.data.id)}
      });
    });
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.gridApi.refreshCells(this.gridOptions);
  }

  onColumnResized(params: ColumnResizedEvent) {
    // params.api.resetRowHeights();
  }

  public showLoading() {
    this.gridApi.showLoadingOverlay();
  }
}
