import * as React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableContainer from "@mui/material/TableContainer";
import Moment from "react-moment";
import "moment-timezone";
import TablePagination from "@mui/material/TablePagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const columns = [
  { id: "type", label: "Type" },
  { id: "credit", label: "Credit Used" },
  {
    id: "createdAt",
    label: "Created At",
  },
];

function createData(type, credit, createdAt) {
  return { type, credit, createdAt };
}

export default function DashBills({ user }) {
  const reverse_bills = [...user.bills].reverse();
  const rows = reverse_bills.map((bill, i) => {
    return createData(
      bill.data.template_data.tag,
      bill.data.template_data.creditRequired,
      <Moment format="DD-MM-YYYY" tz="Asia/Kolkata">
        {bill.createdAt}
      </Moment>
    );
  });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="">
      <Card className=" w-full">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Bill History</CardTitle>
            <CardDescription>Bill generation history details.</CardDescription>
          </div>
          {/* <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="#">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button> */}
        </CardHeader>
        <CardContent>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table>
              <TableHeader className=" sticky top-0">
                <TableRow>
                  <TableHead>Type</TableHead>

                  <TableHead>Credit Used</TableHead>
                  <TableHead className="text-right">Created At</TableHead>
                </TableRow>
              </TableHeader>
              {/* 
              <TableHead>
                <TableRow>
                  {columns.map((column, i) => (
                    <TableCell
                      key={i}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead> */}
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => {
                    return (
                      <TableRow role="checkbox" tabIndex={-1} key={i}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              className="  last:text-right"
                              key={column.id}
                              align={column.align}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CardContent>
      </Card>
    </div>
  );
}
