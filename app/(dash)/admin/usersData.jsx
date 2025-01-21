"use client";

import * as React from "react";
import { subDays } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableContainer from "@mui/material/TableContainer";
import "moment-timezone";
import TablePagination from "@mui/material/TablePagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DatePickerWithRange from "@/components/ui/DatePickerWithRange";
import moment from "moment-timezone";
export const dynamic = "force-dynamic";

const columns = [
  { id: "index", label: "#" },
  { id: "email", label: "Email" },
  { id: "credit", label: "Credit Available" },
  { id: "successfulPayments", label: "Successful Payments" },
  { id: "failedPayments", label: "Failed Payments" },
  { id: "totalBills", label: "Total Bills" },
  { id: "createdAt", label: "Created At" },
];

function createData(
  email,
  credit,
  successfulPayments,
  failedPayments,
  totalBills,
  createdAt
) {
  // Convert createdAt to IST
  const createdAtIST = moment(createdAt).tz("Asia/Kolkata").toDate();
  return {
    email,
    credit,
    successfulPayments,
    failedPayments,
    totalBills,
    createdAt: moment(createdAtIST).format("YYYY-MM-DDTHH:mm:ssZ"),
    createdAtRaw: createdAtIST, // raw date for sorting and filtering
  };
}

export default function UserDashboard({ users }) {
  const [rows, setRows] = React.useState([]);
  const [sortColumn, setSortColumn] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState("asc");
  const [dateRange, setDateRange] = React.useState([
    subDays(new Date(), 28),
    new Date(),
  ]);
  const [filteredRows, setFilteredRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    const updatedRows = users.map((user) => {
      const successfulPayments = user.payments.filter(
        (payment) => payment.status
      ).length;
      const failedPayments = user.payments.filter(
        (payment) => !payment.status
      ).length;

      return createData(
        user.email,
        user.credit,
        successfulPayments,
        failedPayments,
        user.bills.length,
        user.createdAt // keep it as original date for conversion
      );
    });

    setRows(updatedRows);
  }, [users]);

  React.useEffect(() => {
    applyFilters();
  }, [rows, dateRange]);

  const handleSort = (columnId) => {
    const order =
      sortColumn === columnId && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(columnId);
    setSortOrder(order);
    const sortedRows = [...rows].sort((a, b) => {
      const valueA =
        columnId === "createdAt" ? moment(a.createdAtRaw) : a[columnId];
      const valueB =
        columnId === "createdAt" ? moment(b.createdAtRaw) : b[columnId];

      if (valueA < valueB) return order === "asc" ? -1 : 1;
      if (valueA > valueB) return order === "asc" ? 1 : -1;
      return 0;
    });
    setRows(sortedRows);
  };

  const applyFilters = () => {
    // Convert the dateRange to IST
    const [start, end] = dateRange.map((date) =>
      moment(date).tz("Asia/Kolkata").startOf("day").toDate()
    );
    const filtered = rows.filter((row) => {
      const date = row.createdAtRaw;
      if (start && date < start) return false;
      if (end && date > moment(end).endOf("day").toDate()) return false;
      return true;
    });
    setFilteredRows(filtered);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="">
      <Card className="w-full overflow-x-scroll">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="grid gap-2">
            <CardTitle>Users</CardTitle>
            <CardDescription>
              User account details and statistics.
            </CardDescription>
          </div>
          <div className="mb-4">
            <DatePickerWithRange
              initialRange={{ from: dateRange[0], to: dateRange[1] }}
              onDateChange={(range) => {
                setDateRange([range?.from, range?.to]);
              }}
            />
          </div>
        </CardHeader>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHeader className="sticky top-0">
                <TableRow>
                  {columns.map((column) => (
                    <TableHead
                      key={column.id}
                      onClick={() => handleSort(column.id)}
                      className="cursor-pointer last:text-right text-sm font-light"
                    >
                      {column.label}
                      {sortColumn === column.id
                        ? sortOrder === "asc"
                          ? " ↑"
                          : " ↓"
                        : ""}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => (
                    <TableRow role="checkbox" tabIndex={-1} key={i}>
                      <TableCell
                        align="left"
                        className="py-3 first:font-normal font-light first:text-left text-center"
                      >
                        {page * rowsPerPage + i + 1}
                      </TableCell>
                      {columns.slice(1).map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={
                              column.id === "email" ? "left" : column.align
                            }
                            className={`py-3 first:font-normal font-light first:text-left text-center last:text-right ${
                              column.id === "email" ? "text-left" : ""
                            }`}
                          >
                            {column.id === "createdAt"
                              ? moment(value)
                                  .tz("Asia/Kolkata")
                                  .format("DD-MM-YYYY")
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredRows.length}
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
