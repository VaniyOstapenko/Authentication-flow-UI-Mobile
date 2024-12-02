import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Google from "../assets/images/google";
import { useState } from "react";
import { Link } from "expo-router";
import Shape from "../assets/images/shape";

export default function LogIn() {
  const [valueInp, setValueInp] = useState({
    email: "",
    password: "",
  });
  const [flag, setFlag] = useState(false);

  const changeValue = (e: any, str: string) => {
    setValueInp({ ...valueInp, [str]: e.nativeEvent.text });
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#ffffff",
          flex: 1,
          alignItems: "center",
          paddingHorizontal: 28,
        }}
      >
        <Text
          style={{ fontFamily: "RobotoBold", fontSize: 26, color: "#191D23" }}
        >
          LogIn
        </Text>

        <TouchableOpacity style={styles.btn_google}>
          <Google></Google>
          <Text
            style={{
              fontFamily: "RobotoMedium",
              fontSize: 16,
              color: "#131212",
            }}
          >
            Sign in with Google
          </Text>
        </TouchableOpacity>

        <View style={styles.signin}>
          <View
            style={{ backgroundColor: "#CBD2E0", height: 1, width: "30%" }}
          ></View>
          <Text
            style={{
              fontFamily: "RobotoMedium",
              fontSize: 16,
              color: "#4B5768",
            }}
          >
            or sign in with
          </Text>
          <View
            style={{ backgroundColor: "#CBD2E0", height: 1, width: "30%" }}
          ></View>
        </View>

        <View style={{ justifyContent: "flex-start", width: "100%", gap: 4 }}>
          <Text
            style={{
              fontFamily: "RobotoRegular",
              fontSize: 14,
              color: "#000000BF",
            }}
          >
            Email Addess
          </Text>
          <TextInput
            style={styles.inp}
            placeholder={"Rhebhek@gmail.com"}
            placeholderTextColor={"#BABABA"}
            onChange={(e) => changeValue(e, "email")}
          ></TextInput>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "RobotoRegular",
                fontSize: 14,
                color: "#000000BF",
              }}
            >
              Password
            </Text>
            <Link href={"/forgotPassword"}>
              <Text
                style={{
                  fontFamily: "RobotoRegular",
                  fontSize: 14,
                  color: "#1443C3",
                }}
              >
                Forgot Password
              </Text>
            </Link>
          </View>
          <TextInput
            style={styles.inp}
            placeholder="********"
            secureTextEntry={true}
            placeholderTextColor={"#BABABA"}
            onChange={(e) => changeValue(e, "password")}
          ></TextInput>

          <View
            style={{ width: "90%", flexDirection: "row", marginVertical: 20 }}
          >
            <TouchableOpacity
              onPress={() => setFlag(!flag)}
              style={styles.checkbox}
            >
              {flag ? (
                <Shape style={{ width: 18, height: 18 }}></Shape>
              ) : (
                <View style={styles.checkboxUnchecked} />
              )}
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "RobotoRegular",
                fontSize: 14,
                alignContent: "center",
              }}
            >
              Keep me signed in
            </Text>
          </View>

          <Link href={"/verifyEmail"}>
            <TouchableOpacity
              style={styles.login_btn}
              onPress={() => console.log(valueInp)}
            >
              <Text
                style={{
                  fontFamily: "RobotoMedium",
                  fontSize: 16,
                  textAlign: "center",
                  color: "#FEFEFE",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          <Text style={styles.link_text}>Don’t have an Account?</Text>
          <Link href={"/signup"}>
            <Text style={{ ...styles.link_text, color: "#1443C3" }}>
              Sign up here
            </Text>
          </Link>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btn_google: {
    backgroundColor: "#F4F7FF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    width: "100%",
    borderRadius: 8,
    paddingVertical: 16,
    marginTop: 72,
  },
  signin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
    width: "100%",
    gap: 15,
  },
  inp: {
    borderColor: "#CBD2E0",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
    padding: 12,
    borderRadius: 6,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxUnchecked: {
    borderWidth: 1,
    borderColor: "#12ae97",
    width: 18,
    height: 18,
    backgroundColor: "#FFF",
  },
  login_btn: {
    backgroundColor: "#1443C3",
    borderRadius: 50,
    width: "100%",
    paddingVertical: 15.5,
    marginTop: 16,
    marginBottom: 40,
  },
  link_text: {
    fontFamily: "RobotoRegular",
    fontSize: 14,
    color: " #191D23",
  },
});
