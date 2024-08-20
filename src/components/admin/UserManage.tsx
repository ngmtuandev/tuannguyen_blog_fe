import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useDeleteUser, useGetAll } from "../../hooks";
import { toast } from "react-toastify";

const UserManage = () => {
  const { allUser } = useGetAll();
  const { mutate: $deleteUser } = useDeleteUser();

  return (
    <div className="w-[80%] h-screen px-6 pt-6">
      {/* {
        dataUsers?.map((item: any) => {
          <div>{item.userName}</div>
        })
      } */}
      <div>
        <h3 className="font-bold my-4">Manage User</h3>
      </div>
      <div>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>ACTION</TableColumn>
          </TableHeader>
          <TableBody>

            {
              allUser && allUser?.data.map((item: any) => {
                return (
                  <TableRow key={item?.id}>
                    <TableCell>{item?.id}</TableCell>
                    <TableCell>{item?.userName}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <div className="font-bold hover:underline cursor-pointer" onClick={() => {
                          $deleteUser(item?.id, {
                            onSuccess: () => {
                              toast.success("Delete User Successfully");
                            },
                            onError: () => {
                              toast.warning("Delete User Failure");
                            },
                          });
                        }}>Delete</div>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default UserManage