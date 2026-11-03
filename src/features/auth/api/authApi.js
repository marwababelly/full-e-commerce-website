import { Axios } from "../../../Hooks/Axios";
import { privateAxios } from "../../../Hooks/Axios";
// Register
export async function registerUser({
    first_name,
    last_name,
    email,
    phone_number,
    password,
    password_confirmation,
    address,
}) {
    const formData = new FormData();

    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("phone_number", phone_number);
    formData.append("password", password);
    formData.append("password_confirmation", password_confirmation);
    formData.append("address", address);

    const response = await Axios.post("register", formData);

    return response.data;
}

// Login
export async function loginUser({ email, phone_number, password }) {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("phone_number", phone_number);
    formData.append("password", password);

    const response = await Axios.post("login", formData);

    return response.data;
}

export async function updateProfile(profileData) {
    const response = await privateAxios.put("profile/edit", profileData, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-HTTP-Method-Override": "PUT",
        },
    });

    return response.data;
}