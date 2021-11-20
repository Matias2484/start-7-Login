export default async function userLogin(data) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const user = await fetch(
      "https://api-flordeemprendedora.start-7.com/api/auth/login/ ",
      requestOptions
    );
    const res = await user.json();
    const token = res.token;
    window.localStorage.setItem("token", token);
    return res;
  } catch (error) {
    console.log(error);
  }
}
