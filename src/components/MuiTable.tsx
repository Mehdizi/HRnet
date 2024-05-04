import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

export default function MuiTable(data: any) {

  const rows = data.data;

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "dateOfStart",
      headerName: "Date of start",
      width: 150,
      editable: true,
      renderCell(params) {
        const choosenDate = new Date(params.value);
        const day = String(choosenDate.getDate()).padStart(2, "0");
        const month = String(choosenDate.getMonth() + 1).padStart(2, "0");
        const year = choosenDate.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;
        console.log("formatted date :", formattedDate);
        return <div>{formattedDate}</div>;
      },
    },
    {
      headerName: "Department",
      field: "department",
      width: 175,
      editable: true,
    },

    {
      headerName: "Date of birth",
      field: "dateOfBirth",
      width: 150,
      editable: true,
      renderCell(params) {
        const choosenDate = new Date(params.value);
        const day = String(choosenDate.getDate()).padStart(2, "0");
        const month = String(choosenDate.getMonth() + 1).padStart(2, "0");
        const year = choosenDate.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;
        console.log("formatted date :", formattedDate);
        return <div>{formattedDate}</div>;
      },
    },
    {
      headerName: "Street",
      field: "street",
      width: 175,
      editable: true,
    },
    {
      headerName: "City ",
      field: "city",
      width: 150,
      editable: true,
    },
    {
      headerName: "State",
      field: "state",
      width: 125,
      editable: true,
    },
    {
      headerName: "Zip code",
      field: "zipCode",
      type: "number",
      editable: true,
      width: 125,
    },
  ];

  return (
    <div style={{ height: 400, width: '100%', maxWidth:1200, margin:'auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
          filter: {
            filterModel: {
              items: [],
              quickFilterValues: [],
            },
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
        disableRowSelectionOnClick
      />
    </div>
  );
}
