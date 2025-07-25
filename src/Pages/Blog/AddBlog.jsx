import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const AddBlog = () => {
  const formRef = useRef();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    const title = form.elements.formBasicTitle.value;
    const url = form.elements.formBasicUrl.value;
    const description = form.elements.formShortDescription.value;
    const imageFile = form.elements.formImage.files[0];
    const longDescription = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );

    if (!title || !url || !description || !imageFile || !longDescription) {
      toast.error("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("url", url);
    formData.append("long_description", longDescription);
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
        setEditorState(EditorState.createEmpty());
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      toast.error("Failed to add blog. Please try again.");
    }
  };

  return (
    <Container className="py-4">
      <Card className="p-4 shadow">
        <h1 className="mb-4 text-center">Add New Blog Post</h1>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Form.Group className="mb-4" controlId="formBasicTitle">
            <Form.Label className="fw-bold">Title*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter blog title"
              className="py-2"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicUrl">
            <Form.Label className="fw-bold">URL Slug*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter URL slug (e.g., my-blog-post)"
              className="py-2"
            />
            <Form.Text className="text-muted">
              This will be used in the blog's web address
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formShortDescription">
            <Form.Label className="fw-bold">Short Description*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter a brief description for the blog listing"
              className="py-2"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formLongDescription">
            <Form.Label className="fw-bold">Long Description*</Form.Label>
            <div className="border rounded p-2" style={{ minHeight: "300px" }}>
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "fontSize",
                    "list",
                    "textAlign",
                    "colorPicker",
                    "link",
                    "embedded",
                    "emoji",
                    "image",
                    "remove",
                    "history",
                  ],
                }}
                editorClassName="px-2"
                placeholder="Write your blog content here..."
              />
            </div>
          </Form.Group>

          <Form.Group controlId="formImage" className="mb-4">
            <Form.Label className="fw-bold">Featured Image*</Form.Label>
            <Form.Control type="file" accept="image/*" className="py-2" />
            <Form.Text className="text-muted">
              Recommended size: 1200x630 pixels
            </Form.Text>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className="py-2 fw-bold"
            >
              Publish Blog Post
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AddBlog;
