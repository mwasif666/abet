import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EditorContent, useEditor } from "@tiptap/react";
import { Container, Card, Form, Button, Spinner, Modal } from "react-bootstrap";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AddBlog = () => {
  const formRef = useRef();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(true);
  const [password, setPassword] = useState("");

  const [blog, setBlog] = useState({
    title: "",
    url: "",
    short_description: "",
    long_description: "",
    imageFile: "",
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content: "",
  });

  useEffect(() => {
    const storedAuth = localStorage.getItem("blogAuth");
    if (storedAuth === "true") {
      setAuthenticated(true);
      setShowPasswordModal(false);

      if (id) {
        getBlogDetail();
      } else {
        setLoading(false);
      }
    }
  }, [id]);

  const showSuccessAlert = (message) => {
    MySwal.fire({
      title: "Success!",
      text: message,
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "btn btn-primary",
      },
      buttonsStyling: false,
    });
  };

  const showErrorAlert = (message) => {
    MySwal.fire({
      title: "Error!",
      text: message,
      icon: "error",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
  };

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
          short_description: data.short_description || "",
          long_description: data.long_description || "",
          imageFile: data.original_name || "",
        });

        if (data.long_description) {
          editor?.commands.setContent(data.long_description);
        }
      }
    } catch (error) {
      showErrorAlert("Failed to fetch blog details. Please try again.");
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "yourPassword") {
      setAuthenticated(true);
      setShowPasswordModal(false);
      localStorage.setItem("blogAuth", "true");

      if (id) {
        getBlogDetail();
      } else {
        setLoading(false);
      }
    } else {
      showErrorAlert("Incorrect password");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setSubmitting(true);

    const form = event.currentTarget;
    const title = form.elements.formBasicTitle.value;
    const url = form.elements.formBasicUrl.value;
    const imageFile = form.elements.formImage.files[0];
    const shortDescription = form.elements.formShortDescription.value;
    const longDescription = editor?.getHTML() || "";

    if (!title || !url || !shortDescription || !longDescription || (!id && !imageFile)) {
      showErrorAlert("All required fields must be filled.");
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("url", url);
    formData.append("short_description", shortDescription);
    formData.append("long_description", longDescription);
    if (imageFile) formData.append("image", imageFile);

    try {
      if (id) {
        formData.append("id", id);
        await updateBlog(formData);
      } else {
        await addBlog(formData);
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
    } finally {
      setSubmitting(false);
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
      if (response) {
        showSuccessAlert("Blog added successfully!");
        formRef.current.reset();
        editor?.commands.clearContent();
      }
    } catch (error) {
      showErrorAlert("Failed to add blog. Please try again.");
      throw error;
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
        showSuccessAlert("Blog updated successfully!");
      }
    } catch (error) {
      showErrorAlert("Failed to update blog. Please try again.");
      throw error;
    }
  };

  if (!authenticated) {
    return (
      <Modal show={showPasswordModal} centered backdrop="static">
        <Modal.Header className="bg-primary text-white">
          <Modal.Title>Authentication Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePasswordSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Card className="shadow">
        <Card.Header className="bg-primary text-white">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-0">
              {id ? "Update Blog Post" : "Create New Blog Post"}
            </h3>
            <Button
              variant="light"
              size="sm"
              onClick={() => {
                localStorage.removeItem("blogAuth");
                setAuthenticated(false);
                setShowPasswordModal(true);
              }}
            >
              Logout
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Title*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter blog title"
                defaultValue={blog.title}
                id="formBasicTitle"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">URL Slug*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter URL (e.g., my-blog-post)"
                defaultValue={blog.url}
                id="formBasicUrl"
                required
              />
              <Form.Text className="text-muted">
                This will be used in the blog's web address
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Short Description*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter a brief description"
                defaultValue={blog.short_description}
                id="formShortDescription"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Long Description*</Form.Label>
              <div
                className="border rounded p-3 bg-white"
                style={{ minHeight: "300px" }}
              >
                <EditorContent editor={editor} />
              </div>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">
                Featured Image{!id && "*"}
              </Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                id="formImage"
                className="py-2"
              />
              {blog.imageFile && (
                <div className="mt-2">
                  <strong>Current Image:</strong> {blog.imageFile}
                </div>
              )}
              <Form.Text className="text-muted">
                Recommended size: 1200x630 pixels (Only required for new posts)
              </Form.Text>
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={submitting}
                className="px-4"
              >
                {submitting ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    {id ? "Updating..." : "Submitting..."}
                  </>
                ) : (
                  <>{id ? "Update Blog" : "Publish Blog"}</>
                )}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddBlog;
