import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

const avatarAddUrl = require("../assets/icons/avatarAdd.png");
const avatarDelUrl = require("../assets/icons/avatarDel.png");

export default RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(null);
  const [avatar, setAvatar] = useState(false);

  const handleSubmit = () => {
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    Keyboard.dismiss();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS == "ios" ? "-140" : "-400"}
        >
          <ImageBackground
            style={styles.authBgImage}
            source={require("../assets/images/PhotoBG.jpg")}
          >
            <View style={styles.form}>
              <View style={styles.avatarWrapper}>
                <TouchableOpacity style={styles.avatarBtn} activeOpacity={0.5}>
                  {avatar ? (
                    <Image source={avatarDelUrl} />
                  ) : (
                    <Image source={avatarAddUrl} />
                  )}
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Registration</Text>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    marginTop: 33,
                    borderColor: isFocused === "login" ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Login"
                  onChangeText={setLogin}
                  value={login}
                  onFocus={() => setIsFocused("login")}
                  onBlur={() => setIsFocused(null)}
                  selectionColor={"#1B4371"}
                />
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocused === "email" ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Email"
                  onChangeText={setEmail}
                  value={email}
                  keyboardType="email-address"
                  onFocus={() => setIsFocused("email")}
                  onBlur={() => setIsFocused(null)}
                  selectionColor={"#1B4371"}
                />
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor:
                        isFocused === "password" ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    onChangeText={setPassword}
                    value={password}
                    onFocus={() => setIsFocused("password")}
                    onBlur={() => setIsFocused(null)}
                    selectionColor={"#1B4371"}
                  />
                  <TouchableOpacity
                    onPress={toggleShowPassword}
                    style={styles.showBtn}
                    activeOpacity={0.5}
                  >
                    <Text style={styles.loginText}>
                      {showPassword ? "Hide" : "Show"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={handleSubmit}
                  activeOpacity={0.5}
                >
                  <Text style={styles.btnTitle}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} activeOpacity={0.4}>
                  <Text style={styles.loginText}>
                    Already have an account? Log in
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authBgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#FFF",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrapper: {
    position: "absolute",
    alignSelf: "center",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatarBtn: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  title: {
    marginTop: 92,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    height: 50,
    paddingLeft: 16,
    marginHorizontal: 16,
    marginTop: 16,
    color: "#212121",
    disableUnderline: true,
  },
  btn: {
    backgroundColor: "#FF6C00",
    marginTop: 43,
    marginHorizontal: 16,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontSize: 16,
    lineHeight: 18.75,
    color: "#FFFFFF",
  },
  loginBtn: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
  },
  showBtn: {
    position: "absolute",
    right: 32,
    top: 30,
  },
});
