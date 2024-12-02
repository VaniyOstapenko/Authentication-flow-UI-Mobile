import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ImgGoogle from "../assets/images/google";
import Shape from "../assets/images/shape";
import { useState } from "react";
import { Link } from "expo-router";

export default function signup() {
  const [flag, setFlag] = useState(true);
  const [valueInp, setValueInp] = useState({
    email: "",
    name: "",
    pwd: "",
    repeatPwd: "",
  });

  const getValueInp = (e: any, id: string) => {
    setValueInp({ ...valueInp, [id]: e.nativeEvent.text });
  };

  const checkEmail = () => {
    try {
      if (!/^\w+@[a-z]+\.[a-z]{2,5}/gm.test(valueInp.email))
        throw new Error("this email invalid");
      console.log(valueInp);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Text style={{ fontFamily: "RobotoBold", fontSize: 24 }}>Singup</Text>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity style={styles.btn_google}>
          <ImgGoogle></ImgGoogle>
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

        <View style={styles.wrapperSingIn}>
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
      </View>

      <View style={styles.wrapperBtn}>
        <View style={{ width: "90%", gap: 25 }}>
          <View style={{ width: "100%", flexDirection: "column", gap: 4 }}>
            <Text
              style={{
                fontFamily: "RobotoRegular",
                fontSize: 14,
                color: "#000000BF",
              }}
            >
              Full Name
            </Text>
            <TextInput
              placeholder="Becca Ade"
              placeholderTextColor={"#BABABA"}
              style={styles.inp}
              onChange={(e) => getValueInp(e, "name")}
            ></TextInput>
          </View>

          <View style={{ width: "100%", flexDirection: "column", gap: 4 }}>
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
              placeholder="Email"
              placeholderTextColor={"#BABABA"}
              style={styles.inp}
              onChange={(e) => getValueInp(e, "email")}
            ></TextInput>
          </View>

          <View style={{ width: "100%", flexDirection: "column", gap: 4 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
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
            </View>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={"#BABABA"}
              style={styles.inp}
              onChange={(e) => getValueInp(e, "pwd")}
            ></TextInput>
          </View>

          <View style={{ width: "100%", flexDirection: "column", gap: 4 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontFamily: "RobotoRegular",
                  fontSize: 14,
                  color: "#000000BF",
                }}
              >
                Confirm Password
              </Text>
            </View>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor={"#BABABA"}
              style={styles.inp}
              onChange={(e) => getValueInp(e, "repeatPwd")}
            ></TextInput>
          </View>
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={{ width: "90%", flexDirection: "row", margin: 20 }}>
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
              fontSize: 15,
              alignContent: "center",
            }}
          >
            By Creating an Account, i accept Hiring Hub terms of Use and Privacy
            Policy
          </Text>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={checkEmail}>
          <Text style={{ color: "#FEFEFE" }}>Signup</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: "RobotoRegular",
            fontSize: 14,
            color: " #191D23",
          }}
        >
          Don’t have an Account?{" "}
        </Text>
        <Link href={"/"}>
          <Text
            style={{
              fontFamily: "RobotoRegular",
              fontSize: 14,
              color: "#1443C3",
            }}
          >
            Have an Account?
          </Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#ffffff",
    gap: 40,
  },
  wrapperBtn: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 24,
  },
  btn_google: {
    backgroundColor: "#F4F7FF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    width: "90%",
    borderRadius: 8,
    paddingVertical: 16,
  },
  wrapperSingIn: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  inp: {
    width: "100%",
    padding: 16,
    borderColor: "#CBD2E0",
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: 500,
    color: "#323232",
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
  btnLogin: {
    backgroundColor: "#1443C3",
    color: "#FEFEFE",
    flexDirection: "row",
    width: "90%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
});
