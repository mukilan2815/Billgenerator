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
  { id: "id", label: "ID", align: "left" },
  { id: "email", label: "User Email", align: "left" },
  { id: "credit", label: "Credit" },
  { id: "amount", label: "Amount" },
  { id: "status", label: "Status" },
  { id: "createdAt", label: "Created At" },
];

function createData(id, email, credit, amount, status, createdAt) {
  // Convert createdAt to IST
  const createdAtIST = moment(createdAt).tz("Asia/Kolkata").toDate();
  return {
    id,
    email,
    credit,
    amount,
    status,
    createdAt: moment(createdAtIST).format("YYYY-MM-DDTHH:mm:ssZ"),
    createdAtRaw: createdAtIST, // raw date for sorting and filtering
  };
}

export default function PaymentDashboard({ payments }) {
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
    const updatedRows = payments.map((payment, index) => {
      return {
        index: index + 1,
        ...createData(
          payment.id,
          payment.user.email, // Adding the user email here
          payment.credit,
          payment.amount,
          payment.status ? "Successful" : "Failed",
          payment.createdAt // keep it as original date for conversion
        ),
      };
    });

    setRows(updatedRows);
  }, [payments]);

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
    // console.log(`Date Range Start: ${start}, End: ${end}`);
    const filtered = rows.filter((row) => {
      const date = row.createdAtRaw;
      // console.log(`Filtering Row: ${row.id}, Date: ${date}`);
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
            <CardTitle>Payments</CardTitle>
            <CardDescription>Payment details and statistics.</CardDescription>
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
                              column.id === "email" || column.id === "id"
                                ? "left"
                                : column.align
                            }
                            className={`py-3 first:font-normal font-light first:text-left text-center last:text-right ${
                              column.id === "email" || column.id === "id"
                                ? "text-left"
                                : ""
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
