// import React from "react";
// import TablePagination from "@material-ui/core/TablePagination";

// export default function TablePaginationDemo() {
//   const [page, setPage] = React.useState(2);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//     console.log(page);

//     const res = await fetch("/user", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
//     const data = await res.json();
//     if (data.error) {
//       window.alert("Invalid Username or Password..!");
//     } else {
//       window.alert("Login Successful");
//       localStorage.setItem("token", data.token);
//       window.location.href = "http://localhost:3000/profile";
//     }
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//     console.log(rowsPerPage);
//   };

//   return (
//     <TablePagination
//       component="div"
//       count={100}
//       page={page}
//       onPageChange={handleChangePage}
//       rowsPerPage={rowsPerPage}
//       onRowsPerPageChange={handleChangeRowsPerPage}
//     />
//   );
// }
