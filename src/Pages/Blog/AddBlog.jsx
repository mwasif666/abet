import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

const AddBlog = () => {
  const formRef = useRef();
  const { id } = useParams();

  const [blog, setBlog] = useState({
    title: "",
    url: "",
    description: "",
    long_description: "",
    imageFile: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getBlogDetail();
    } else {
      setLoading(false);
    }
  }, [id]);

  const getBlogDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.leosagitrades.com/public/blogs_list/${id}`
      );
      const data = response?.data?.data?.[0];
      if (data) {
        setBlog({
          title: data.title || "",
          url: data.url || "",
          description: data.description || "",
          long_description: data.long_description || "",
          imageFile: data.original_name || "",
        });
      }
    } catch (error) {
      toast.error("Failed to fetch blog details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const title = form.elements.formBasicTitle.value;
    const url = form.elements.formBasicUrl.value;
    const description = form.elements.formShortDescription.value;
    const longDescription = form.elements.formLongDescription.value;
    const imageFile = form.elements.formImage.files[0];

    if (!title || !url || !description || (!id && !imageFile)) {
      toast.error("All required fields must be filled.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("url", url);
    formData.append("description", description);
    formData.append("long_description", longDescription);
    if (imageFile) formData.append("image", imageFile);

    if (id) {
      formData.append("id", id);
      updateBlog(formData);
    } else {
      addBlog(formData);
    }
  };

  const addBlog = async (data) => {
    try {
      const response = await axios.post(
        "https://api.leosagitrades.com/public/save_blog",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Blog added successfully!");
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      toast.error("Failed to add blog. Please try again.");
    }
  };

  const updateBlog = async (data) => {
    try {
      const response = await axios.post(
        "https://api.leosagitrades.com/public/edit_blog",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Blog updated successfully!");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog. Please try again.");
    }
  };

  if (loading)
    return (
      <div className="text-center mt-4">
        <h4>Loading...</h4>
      </div>
    );

  return (
    <div>
      <h1>{id ? "Update Blog" : "Add Blog"}</h1>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            defaultValue={blog.title}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUrl">
          <Form.Label>Url*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Url"
            defaultValue={blog.url}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formShortDescription">
          <Form.Label>Short Description*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Description"
            defaultValue={blog.description}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLongDescription">
          <Form.Label>Long Description*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Long Description"
            defaultValue={blog.long_description}
          />
        </Form.Group>

        <Form.Group controlId="formImage" className="mb-3">
          <Form.Label>Image{!id && "*"}</Form.Label>
          <Form.Control type="file" />
          {blog.imageFile && (
            <div className="mt-2">
              <strong>Current Image:</strong> {blog.imageFile}
            </div>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          {id ? "Update" : "Submit"}
        </Button>
      </Form>
    </div>
  );
};

export default AddBlog;
