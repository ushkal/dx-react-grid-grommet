import { withComponents } from '@devexpress/dx-react-core';
import { Table as TableBase } from '@devexpress/dx-react-grid';
import { Table as TableComponent } from '../templates/table';
import { TableHeader } from '../grommet/TableHeader';
import { TableBody } from '../grommet/TableBody';
import { TableFooter } from '../grommet/TableFooter';
import { TableRow as Row } from '../templates/table-row';
import { TableLayout as Layout } from '../templates/table-layout';
import { TableCell as Cell } from '../templates/table-cell';
import { TableStubCell as StubCell } from '../templates/table-stub-cell';
import { TableNoDataCell as NoDataCell } from '../templates/table-no-data-cell';
import { TableContainer as Container } from '../templates/table-container';
import { TableStubRow as StubRow } from '../templates/table-stub-row';

export const Table = withComponents({
  Table: TableComponent,
  TableHead: TableHeader,
  TableBody,
  TableFooter,
  Container,
  Layout,
  Row,
  Cell,
  NoDataRow: Row,
  NoDataCell,
  StubRow,
  StubCell,
  StubHeaderCell: StubCell,
})(TableBase);

Table.COLUMN_TYPE = TableBase.COLUMN_TYPE;
Table.ROW_TYPE = TableBase.ROW_TYPE;
Table.NODATA_ROW_TYPE = TableBase.NODATA_ROW_TYPE;