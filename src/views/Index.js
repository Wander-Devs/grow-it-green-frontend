import { useEffect, useState } from 'react';
import Chart from 'chart.js';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from 'reactstrap';

import { chartOptions, parseOptions, } from 'variables/charts.js';

import Header from 'components/Headers/Header.js';

import http from 'services/http';

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [users, setUsers] = useState("users");

  useEffect(() => {
    http.get('/users').then((res) => {
      console.log('response = ' + res.data[0].firstName + ' ' + res.data[0].lastName);
      setUsers(res.data);
    });
  }, []);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt-4" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="header bg-gradient-white">
              <CardHeader className="bg-white">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-uppercase text-black ls-1 mb-1">
                      WELCOME TO GROW-IT-GREEN FARMING ASSISTANT
                    </h2>
                    <h3>Users</h3>
                    <ol>
                      {users.map(user => <li>{user.firstName} {user.lastName}</li>)}
                    </ol>
                    {/* <h3 className="text-black mb-0">2022</h3> */}
                  </div>
                  {/* <div className="col">
                    <Nav className="justify-content-end" pills>
                    <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                    <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div> */}
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}

                <div className="chart" align="center">
                  <img
                    src={
                      "https://www.hipi.info/wp-content/uploads/2014/04/2014-twitter-header-dimensions-16-1024x341.jpg"
                    }
                  />
                  {/* <img
                    src={
                      "https://th.bing.com/th/id/OIP.p191RQnQ1DQMj9CObpDP6AAAAA?pid=ImgDet&rs=1"
                    }
                  /> */}

                  {/* <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  /> */}
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">UNDER DEVELOPMENT.......</h3>
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">UNDER DEVELOPMENT.....</h3>
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
