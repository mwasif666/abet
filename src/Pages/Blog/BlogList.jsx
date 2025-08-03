import axios from "axios";
import Swal from "sweetalert2";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BlogList = () => {
  const naviagte = useNavigate();
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.leosagitrades.com/public/blogs_list`
      );
      console.log(response);
      
      if (response.status === 201) {
        setBlogList(response.data.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server error in getting User List...");
    } finally {
      setLoading(false);
    }
  };

 const handleDelete = async (item) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  });

  if (result.isConfirmed) {
    try {
      const response = await axios.post(
        `https://api.leosagitrades.com/public/delete_blog`,
        { blog_id: item.id }
      );
      if (response.status === 201) {
        toast.success(response.data.message);
        getBlogList();
      }
    } catch (error) {
      console.error(error);
      toast.error("Error in deleting blog");
    }
  }
};

  const handleEdit = (item) => {
    naviagte(`/add-blog/${item.id}`);
  };

  useEffect(() => {
    getBlogList();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Status</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5}>Loading...</td>
              </tr>
            ) : blogList.length > 0 ? (
              blogList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title.slice(0,30)}</td>
                  <td>{item.status}</td>
                  <td>{item.short_description.slice(0,50)}</td>
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

export default BlogList;
