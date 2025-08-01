import { useRef, useState } from "react";
import { Container, Card, Form, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const formRef = useRef();
  const { loginUser } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const email = form.elements.formBasicEmail.value;
    const password = form.elements.formBasicPassword.value;

    if (!email || !password) {
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

    try {
      const response = await loginUser({ email, password });
      if (response?.status === 200) {
        toast.success("Login successful!");
      } else {
        toast.error("Invalid credentials.");
      }
    } catch (error) {
      toast.error("An error occurred while logging in. Please try again.");
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="py-4">
      <Card className="shadow">
        <Card.Body>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Email*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your valid email address"
                id="formBasicEmail"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Password*</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password here"
                id="formBasicPassword" 
                required
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
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
