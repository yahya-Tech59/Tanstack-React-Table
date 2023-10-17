export const columns = [
  {
    accessorKey: "id",
    header: "ID",
    footer: "ID",
  },
  //   {
  //     accessorKey: "first_name",
  //     header: "First_Name",
  //     footer: "First_Name",
  //   },
  //   {
  //     accessorKey: "last_name",
  //     header: "Last_Name",
  //     footer: "Last_Name",
  //   },
  {
    header: "Name",
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    footer: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
    footer: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
    footer: "Gender",
  },

  {
    accessorKey: "dob",
    header: "Dob",
    footer: "Dob",
  },
];
