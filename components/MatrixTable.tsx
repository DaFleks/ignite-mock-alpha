"use client";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MatrixTable = () => {
  return (
    <Table className="bg-white border mt-8">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="bg-slate-700 text-white text-center"></TableHead>
          <TableHead className="bg-slate-700 text-white text-center">December</TableHead>
          <TableHead className="bg-slate-700 text-white text-center">January</TableHead>
          <TableHead className="bg-slate-700 text-white text-center">Feburary</TableHead>
          <TableHead className="bg-slate-700 text-white text-center">Cu text-centerrrent</TableHead>
          <TableHead className="bg-slate-700 text-white text-center">Current + 1</TableHead>
          <TableHead className="bg-slate-700 text-white text-center">Current + 2</TableHead>
          <TableHead className="bg-slate-700 text-white text-center">Current +3</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHead className="bg-slate-700 text-white">Sale</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="bg-slate-700 text-white">Lock</TableHead>
          <TableCell></TableCell>
          <TableCell>Anthony Flores</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="bg-slate-700 text-white">User-FCST</TableHead>
          <TableCell>10000 - Anthony Flores</TableCell>
          <TableCell>Anthony Flores</TableCell>
        </TableRow>
        <TableRow>
          <TableHead className="bg-slate-700 text-white">PRMO</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="bg-slate-700 text-white">Base</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="bg-slate-700 text-white">User1-FCST</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="bg-slate-700 text-white">User2-FCST</TableHead>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export default MatrixTable;
