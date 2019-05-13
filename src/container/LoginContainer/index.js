// @flow
import * as React from "react";
import { Item, Input, Icon, Toast, Form } from "native-base";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import Login from "../../stories/screens/Login";
import DeviceInfo from "react-native-device-info";
import { loginRequest } from "../../actions/api";
const DeviceUUID = DeviceInfo.getUniqueID();

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(1);
const email = value =>
  value && false
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && false
    ? "Only alphanumeric characters"
    : undefined;


class LoginForm extends React.Component{

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <Item error={error && touched}>
        <Icon active name={input.name === "login" ? "person" : "unlock"} />
        <Input
          ref={c => (this.textInput = c)}
          placeholder={input.name === "login" ? "login" : "Password"}
          secureTextEntry={input.name === "password" ? true : false}
          {...input}
        />
      </Item>
    );
  }

  login = async () => {
    const { username, password } = this.props;
    if (this.props.valid) {
        const res = await this.props.login({username, password});
        if (res.status == 200){
          this.props.navigation.navigate("FilterOfDepartment");
        } else {
          Toast.show({
            text: res.data.message,
            duration: 2000,
            position: "top",
            textStyle: { textAlign: "center" }
          });
        }

      } else {
      Toast.show({
        text: "Enter Valid Username & password!",
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    const form = (
      <Form>
        <Field
          name="login"
          component={this.renderInput}
          validate={[email, required]}
        />
        <Field
          name="password"
          component={this.renderInput}
          validate={[alphaNumeric, minLength8, maxLength15, required]}
        />
      </Form>
    );
    return (
      <Login
        navigation={this.props.navigation}
        loginForm={form}
        onLogin={() => this.login()}
      />
    );
  }
}
const LoginContainer = reduxForm({
  form: "login"
})(LoginForm);
const selector = formValueSelector("login");
const mapStateToProps = (state) => {
  return {
      username: selector(state, "login"),
      password: selector(state, "password")
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (params) => dispatch(loginRequest(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
