import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch, Link, NavLink } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import { FaPowerOff } from "react-icons/fa";

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";

const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

const ImgUpload = ({ onChange, src }) => {
  return (
    <label>
      <div>
        <img
          for="photo-upload"
          src={src}
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        />
      </div>
      <input id="photo-upload" type="file" hidden onChange={onChange} />
    </label>
  );
};

const Status = ({ onChange }) => (
  <div className="field">
    <input
      id="status"
      type="text"
      onChange={onChange}
      maxLength="35"
      value="active"
      placeholder="It's a nice day!"
      hidden
    />
  </div>
);

const Profile = ({ onChange, src, status }) => (
  <div
    style={{
      backgroundColor: "#2F353A",
    }}
  >
    <form onSubmit={onChange}>
      <div>
        <button type="submit" className="edit">
          <img
            for="photo-upload"
            src={src}
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              backgroundColor: "#2F353A",
            }}
          />
        </button>
      </div>

      <div className="status">{status}</div>
    </form>
  </div>
);

const Edit = ({ onChange, children }) => (
  <form onSubmit={onChange}>{children}</form>
);

class DefaultLayout extends Component {
  state = {
    file: "",
    imagePreviewUrl: "https://source.unsplash.com/random",
    name: "",
    status: "",
    active: "edit",
  };

  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  editStatus = (e) => {
    const status = e.target.value;
    this.setState({
      status,
    });
  };

  handleonChange = (e) => {
    e.preventDefault();
    let activeP = this.state.active === "edit" ? "profile" : "edit";
    this.setState({
      active: activeP,
    });
  };

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  signOut(e) {
    e.preventDefault();
    this.props.history.push("/login");
  }

  render() {
    const { imagePreviewUrl, name, status, active } = this.state;

    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={(e) => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <br />
            <div style={{ textAlign: "center", backgroundColor: "#2F353A" }}>
              <div>
                {active === "edit" ? (
                  <Edit onChange={this.handleChanonChange}>
                    <ImgUpload
                      style={{
                        height: "100px",
                        width: "100px",

                        backgroundColor: "#2F353A",
                        borderRadius: "50%",
                      }}
                      onChange={this.photoUpload}
                      src={imagePreviewUrl}
                    />

                    <Status onChange={this.editStatus} value={status} />
                  </Edit>
                ) : (
                  <Profile
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: "#2F353A",
                    }}
                    onChange={this.handleChanonChange}
                    src={imagePreviewUrl}
                    name={name}
                    status={status}
                  />
                )}
              </div>

              <h5>Employee Name</h5>
              <NavLink to="/profile">
                <a> view Profile</a>
              </NavLink>
            </div>{" "}
            <br />
            <Suspense>
              <AppSidebarNav
                navConfig={navigation}
                {...this.props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter>
              <div style={{ textAlign: "center" }}>
                <a href={/login/}>
                  <button
                    type="submit"
                    style={{
                      width: "120px",
                      height: "40px",
                      borderRadius: "40px",
                      backgroundColor: "black",
                      color: "whiteSmoke",
                      border: "0",
                    }}
                  >
                    <FaPowerOff /> Logout
                  </button>
                </a>
              </div>
            </AppSidebarFooter>
            {/* <AppSidebarMinimizer /> */}
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    console.log(route.path);
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/login" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
