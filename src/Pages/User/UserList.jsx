import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserList = () => {
  const naviagte = useNavigate();
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.leosagitrades.com/public/users_list`
      );
      if (response.status === 201) {
        setUserList(response.data.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server error in getting User List...");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.post(
        `https://api.leosagitrades.com/public/delete_user`,
        { user_id: item.id }
      );
      if (response.status === 201) {
        toast.success(response.data.message);
        getUserList();
      }
    } catch (error) {
      console.error(error);
      toast.error("Error in deleting user");
    }
  };

  const handleEdit = (item) => {
    naviagte(`/add-user/${item.id}`);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5}>Loading...</td>
              </tr>
            ) : userList.length > 0 ? (
              userList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <FaEdit onClick={() => handleEdit(item)} />
                    <MdDelete onClick={() => handleDelete(item)} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>No User Found!.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UserList;
