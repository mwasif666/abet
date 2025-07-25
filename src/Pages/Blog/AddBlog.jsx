import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

const AddBlog = () => {
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    const title = form.elements.formBasicTitle.value;
    const url = form.elements.formBasicUrl.value;
    const description = form.elements.formShortDescription.value;
    // const longDescription = form.elements.formLongDescription.value;
    const imageFile = form.elements.formImage.files[0];

    if (!title || !url || !description || !imageFile) {
      toast.error("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("url", url);
    // formData.append("long_description", longDescription);
    formData.append("description", description);
    formData.append("image", imageFile);

    addBlog(formData);
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

  return (
    <>
      <div>
        <h1>Add Blog</h1>
        <div>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title*</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUrl">
              <Form.Label>Url*</Form.Label>
              <Form.Control type="text" placeholder="Enter Url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formShortDescription">
              <Form.Label>Short Description*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLongDescription">
              <Form.Label>Long Description*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Description"
              />
            </Form.Group>
            <Form.Group controlId="formImage" className="mb-3">
              <Form.Label>Image*</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
