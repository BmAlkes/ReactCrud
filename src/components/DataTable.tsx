import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { User } from "../types/User";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton, Stack } from "@mui/material";

export default function Grid() {
  const onCall = (params: GridRenderCellParams) => {
    // Chamada via WhatsApp
  };

  const onEdit = (params: GridRenderCellParams) => {
    // Edição de usuário
  };

  const onDelete = (params: GridRenderCellParams) => {
    // Exclusão de usuário
  };
}

const columns: GridColDef<User>[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "firstName",
    headerName: "Name",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.fullName.split(" ")?.shift() || ""}`,
  },
  {
    field: "lastName",
    headerName: "LastName",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.fullName.split(" ")?.pop() || ""}`,
  },
  { field: "document", headerName: "CPF", width: 150 },
  {
    field: "age",
    headerName: "Idade",
    type: "number",
    valueGetter: (params: GridValueGetterParams) =>
      params.row.birthDate &&
      `${
        new Date().getFullYear() - new Date(params.row.birthDate).getFullYear()
      }`,
  },
  { field: "email", headerName: "E-mail", minWidth: 200 },
  { field: "mobile", headerName: "Celular", minWidth: 180 },
  {
    field: "actions",
    headerName: "Ações",
    minWidth: 150,
    sortable: false,
    renderCell: (params) => {
      return (
        <Stack direction="row" spacing={2}>
          <IconButton
            color="success"
            size="small"
            onClick={() => onCall(params)}
          >
            <WhatsAppIcon fontSize="inherit" />
          </IconButton>

          <IconButton color="info" size="small" onClick={() => onEdit(params)}>
            <EditIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            color="error"
            size="small"
            onClick={() => onDelete(params)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Grid() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
