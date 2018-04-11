// @flow
import React from "react"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table"
import Paper from "material-ui/Paper"
import data from "common/data/data"
import { HeaderStyle } from "./TableStyles"

type Props = {
  /** The data to pass into this table */
  data: Object
}

const MostUsedGenes = (props: Props) => {
  return (
    <Paper>
      <HeaderStyle variant="title">Most Used Genes</HeaderStyle>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Strain Descriptor</TableCell>
            <TableCell>Strain Names</TableCell>
            <TableCell>Strain ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.tables.mostUsedGenes.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.descriptor}</TableCell>
              <TableCell>{item.names}</TableCell>
              <TableCell>{item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default MostUsedGenes
