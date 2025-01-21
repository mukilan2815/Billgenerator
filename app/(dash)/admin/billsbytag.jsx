import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default function BillsList({ billSummary }) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Bills Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead className="text-right font-light">
                  Bills Count
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(billSummary).map(([tag, count]) => (
                <TableRow key={tag}>
                  <TableCell className="py-3">{tag}</TableCell>
                  <TableCell className="py-3 text-right font-light">
                    {count}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
