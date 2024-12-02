import { Link } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function forgotPwd() {
  return (
    <>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          flex: 1,
          alignItems: "center",
          paddingHorizontal: 28,
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            marginTop: 32,
            marginBottom: 68,
            gap: 12,
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoMedium",
              fontSize: 24,
              color: "#191D23",
            }}
          >
            Forgot Password
          </Text>
          <Text style={{ fontFamily: "RobotoRegular", fontSize: 14 }}>
            Enter the email address registered with your account. We'll send you
            a link to reset your password.
          </Text>
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
          ></TextInput>
        </View>

        <View style={{ width: "100%", marginVertical: 40 }}>
          <TouchableOpacity style={styles.login_btn}>
            <Text
              style={{
                fontFamily: "RobotoMedium",
                fontSize: 16,
                color: "#FEFEFE",
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.link_container}>
          <Text
            style={{
              fontFamily: "RobotoRegular",
              fontSize: 14,
              color: " #191D23",
            }}
          >
            Remembered password?
          </Text>
          <Link href={"/"}>
            <Text
              style={{
                color: "#1443C3",
                fontFamily: "RobotoRegular",
                fontSize: 14,
                alignContent: "center",
              }}
            >
              Login to your account
            </Text>
          </Link>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inp: {
    borderColor: "#CBD2E0",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
    padding: 12,
    borderRadius: 6,
  },
  login_btn: {
    backgroundColor: "#1443C3",
    borderRadius: 50,
    width: "100%",
    paddingVertical: 15.5,
    justifyContent: "center",
    alignItems: "center",
  },
  link_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
