import { useEffect, useRef, useState } from "react";
import { Container, Card, Form, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddUser = () => {
  const formRef = useRef();
  const { id } = useParams();
  const [submitting, setSubmitting] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const name = form.elements.formBasicName.value;
    const email = form.elements.formBasicEmail.value;
    const phone = form.elements.formBasicPhone.value;
    const password = form.elements.formBasicPassword.value;

    if (!name || !email || !phone || (!id && !password)) {
      toast.error("All required fields must be filled.");
      setSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      setSubmitting(false);
      return;
    }

    if (id) {
      updateUser({ user_id: id, name, email, phone, password });
    } else {
      addUser({ name, email, phone, password });
    }
  };

  const addUser = async (data) => {
    try {
      const response = await axios.post(
        "https://api.leosagitrades.com/public/save_user",
        data
      );
      if (response?.status === 201) {
        toast.success("User added successfully.");
        formRef.current.reset();
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error?.response?.data?.errors?.email?.[0] ||
        "Internal server error occurred when adding user.";
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const updateUser = async (data) => {
    try {
      const response = await axios.post(
        `https://api.leosagitrades.com/public/edit_user`,
        data
      );
      if (response?.status === 201) {
        toast.success("User updated successfully.");
        getUserDetail();
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error?.response?.data?.errors?.email?.[0] ||
        "Internal server error occurred when updating user.";
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const getUserDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.leosagitrades.com/public/users_list/${id}`
      );
      if (response?.status === 201) {
        const data = response.data?.data[0];
        setUserData({
          name: data?.name || "",
          email: data?.email || "",
          phone: data?.phone || "",
          password: "",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load user details.");
    }
  };

  useEffect(() => {
    if (id) {
      getUserDetail();
    }
  }, [id]);

  return (
    <Container className="py-4">
      <Card className="shadow">
        <Card.Body>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name here"
                id="formBasicName"
                defaultValue={userData.name}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter valid email address"
                id="formBasicEmail"
                defaultValue={userData.email}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Phone*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                id="formBasicPhone"
                defaultValue={userData.phone}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Password*</Form.Label>
              <Form.Control
                type="password"
                placeholder={
                  id ? "Update password (optional)" : "Enter password"
                }
                id="formBasicPassword"
                required={!id}
              />
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
                    {id ? "Updating..." : "Adding..."}
                  </>
                ) : id ? (
                  "Update User"
                ) : (
                  "Add User"
                )}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddUser;
