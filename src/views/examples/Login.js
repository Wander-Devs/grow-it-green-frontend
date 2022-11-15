// reactstrap components
import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container,
} from "reactstrap";
import * as authService from "../../services/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setLoginForm({
      ...loginForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const navigate = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      authService.login(loginForm).then((response) => {
        console.log(response);
        if (response.data && response.data.body === "Login successful") {
          navigate.push("/admin/index");
        } else {
          console.log(response.data.body);
        }
      });
    } catch (error) {}
  };

  return (
    <>
      <Container className="d-flex justify-content-center mt-5">
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Log in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/icons/common/google.svg")
                          .default
                      }
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      name="username"
                      type="text"
                      autoComplete="new-email"
                      value={loginForm.username}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      value={loginForm.password}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="success" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault(e)}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Login;
