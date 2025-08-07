import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Form, Button, Spinner } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MySwal = withReactContent(Swal);

const AddBlog = () => {
  const formRef = useRef();
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [blog, setBlog] = useState({
    id: "",
    title: "",
    url: "",
    short_description: "",
    long_description: "",
    imageFile: "",
    category: "",
    sub_category: "",
    slug: "",
    meta_title: "",
    meta_description: "",
    status: "draft",
    tags: ""
    // image_alt_text: "",
    // image_name: "",
    // h2: "",
    // h3: "",
    // h4: "",
    // h5: "",
  });

  const getDetailFromLocalStorage = () => {
  const data = localStorage.getItem('userDetails');
  if (data) {
    setUserDetail(JSON.parse(data));
  }
};


  useEffect(() => {
    if (slug) {
      getBlogDetail();
    } else {
      setLoading(false);
    }
    getDetailFromLocalStorage();
  }, [slug]);

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
        `https://api.leosagitrades.com/public/blogs_list/${slug}`
      );
      const data = response?.data?.data?.[0];
      if (data) {
        setBlog({
          id:data.id || "",
          title: data.title || "",
          url: data.url || "",
          short_description: data.short_description || "",
          long_description: data.long_description || "",
          imageFile: data.original_name || "",
          category: data.category || "",
          sub_category: data.sub_category || "",
          slug: data.slug || "",
          meta_title: data.meta_title || "",
          meta_description: data.meta_description || "",
          status: data.status || "draft",
          tags: data.tags || "",
          // image_alt_text: data.image_alt_text || "",
          // image_name: data.image_name || "",
          // h2: data.h2 || "",
          // h3: data.h3 || "",
          // h4: data.h4 || "",
          // h5: data.h5 || "",
        });
      }
    } catch (error) {
      showErrorAlert("Failed to fetch blog details. Please try again.");
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
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
    const longDescription = blog.long_description || "";
    const category = form.elements.formCategory.value;
    const subCategory = form.elements.formSubCategory.value;
    const slug = form.elements.formSlug.value;
    const metaTitle = form.elements.formMetaTitle.value;
    const metaDescription = form.elements.formMetaDescription.value;
    const status = form.elements.formStatus.value;
    const tags = "";
    // const status = form.elements.formStatus.value;
    // const imageAltText = form.elements.formImageAltText.value;
    // const imageName = form.elements.formImageName.value;
    // const h2 = form.elements.formH2.value;
    // const h3 = form.elements.formH3.value;
    // const h4 = form.elements.formH4.value;
    // const h5 = form.elements.formH5.value;

    if (
      !title ||
      !url ||
      !shortDescription ||
      !longDescription ||
      !slug ||
      !metaTitle ||
      !category || 
      !subCategory ||
      (!slug && !imageFile)
    ) {
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
    formData.append("category", category);
    formData.append("sub_category", subCategory);
    formData.append("slug", slug);
    formData.append("meta_title", metaTitle);
    formData.append("meta_description", metaDescription);
    formData.append("status", status);
    formData.append("tags", tags);
    formData.append("image_alt_text", " ");
    formData.append("image_name", "");
    formData.append("h2", "");
    formData.append("h3", "");
    formData.append("h4", "");
    formData.append("h5", "");
    formData.append("h6", "");
    // formData.append("image_alt_text", imageAltText);
    // formData.append("image_name", imageName);
    // formData.append("h2", h2);
    // formData.append("h3", h3);
    // formData.append("h4", h4);
    // formData.append("h5", h5);

    try {
      if (slug) {
        formData.append("blog_id", blog?.id);
        formData.append("user_id", userDetail.id);
        await updateBlog(formData);
      } else {
        formData.append("user_id", userDetail.id);
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
        setBlog((prev) => ({ ...prev, long_description: "" }));
      }
    } catch (error) {
      showErrorAlert(
        error?.response?.data?.errors?.url ||
          error?.response?.data?.errors?.image ||
          "Failed to add blog. Please try again."
      );
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
              {slug ? "Update Blog Post" : "Create New Blog Post"}
            </h3>
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
              <CKEditor
                editor={ClassicEditor}
                data={blog.long_description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setBlog((prev) => ({ ...prev, long_description: data }));
                }}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">
                Featured Image{!slug && "*"}
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
                Recommended size: 1200x630 pixels
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Category Type</Form.Label>
              <Form.Select
                id="formCategory"
                defaultValue={blog.category}
                required
              >
                <option value="">Select Category</option>
                <option value="news">News</option>
                <option value="blog">Blog</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Sub Category*</Form.Label>
              <Form.Control
                type="text"
                id="formSubCategory"
                defaultValue={blog.sub_category}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Slug*</Form.Label>
              <Form.Control
                type="text"
                id="formSlug"
                defaultValue={blog.slug}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Meta Title</Form.Label>
              <Form.Control
                type="text"
                id="formMetaTitle"
                defaultValue={blog.meta_title}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Meta Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                id="formMetaDescription"
                defaultValue={blog.meta_description}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Status</Form.Label>
              <Form.Select id="formStatus" defaultValue={blog.status}>
                <option value="draft">Draft</option>
                <option value="publish">Published</option>
                {/* <option value="scehdule">Scehdule</option> */}
              </Form.Select>
            </Form.Group>

            {/* <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Image Alt Text</Form.Label>
              <Form.Control
                type="text"
                id="formImageAltText"
                defaultValue={blog.image_alt_text}
              />
            </Form.Group> */}

            {/* <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Image Name</Form.Label>
              <Form.Control
                type="text"
                id="formImageName"
                defaultValue={blog.image_name}
              />
            </Form.Group> */}

            {/* {[2, 3, 4, 5].map((num) => (
              <Form.Group className="mb-4" key={`h${num}`}>
                <Form.Label className="fw-bold">{`H${num} Heading`}</Form.Label>
                <Form.Control
                  type="text"
                  id={`formH${num}`}
                  defaultValue={blog[`h${num}`]}
                />
              </Form.Group>
            ))} */}

            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      className="me-2"
                    />
                    {slug ? "Updating..." : "Submitting..."}
                  </>
                ) : (
                  <>{slug ? "Update Blog" : "Publish Blog"}</>
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
