import React from "react";
import {
  Table,
  TableColumn,
  Label,
  TableRow,
  TableCell,
  TableMode,
  TableGrowingMode,
  Link
} from "@ui5/webcomponents-react";
// import { useDispatch, useSelector } from 'react-redux'
// import { incrementUser } from '../../store/users/users';

class UserPanel extends React.Component <any, any>  {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { error, isLoaded, items } = this.props.resultData as any;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div></div>;
    } else {
      return (
        <Table
          mode={TableMode.SingleSelect}
          growing={TableGrowingMode.Button}
          stickyColumnHeader
          columns={
            <>
              <TableColumn>
                <Label>Name</Label>
              </TableColumn>
              <TableColumn>
                <Label>Email</Label>
              </TableColumn>
              <TableColumn>
                <Label>address</Label>
              </TableColumn>
            </>
          }
        >
          {items.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell>
                <Link href={'#/user/'+item.id} >{item.name}</Link>
              </TableCell>
              <TableCell>
                <Label>{item.email}</Label>
              </TableCell>
              <TableCell>
                <Label style={{width: '200px'}}>{`${item.address.suite} ${item.address.street} ${item.address.city}`}</Label>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      );
    }
  }
}

export default UserPanel;
