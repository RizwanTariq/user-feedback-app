import Swal from "sweetalert2";

async function confirmAlert(callback) {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#5DADE2",
    cancelButtonColor: "#E74C3C",
    confirmButtonText: "Yes, delete it!",
  });
  if (result.isConfirmed) {
    callback();
    Swal.fire({
      title: "Deleted!",
      text: "Deleted successfully.",
      icon: "success",
      confirmButtonColor: "#5DADE2",
    });
  }
}

export default confirmAlert;
