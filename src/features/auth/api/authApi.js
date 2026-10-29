const BASE_URL = "https://dummyjson.com";

async function request(endpoint, options = {}) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
}

export async function loginUser({ username, password }) {
    // First, check accounts created through our Register form.
    const registeredUsers = JSON.parse(
        localStorage.getItem("registeredUsers") || "[]"
    );

    const registeredUser = registeredUsers.find(
        (user) =>
        user.emailOrPhone.toLowerCase() === username.trim().toLowerCase() &&
        user.password === password
    );

    if (registeredUser) {
        return {
            id: `local-${registeredUser.emailOrPhone}`,
            username: registeredUser.emailOrPhone,
            firstName: registeredUser.name,
            email: registeredUser.emailOrPhone,
        };
    }

    // Otherwise, try the existing DummyJSON demo login.
    return request("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
    });
}

export async function registerUser({ name, email, password }) {
    return request("/users/add", {
        method: "POST",
        body: JSON.stringify({
            firstName: name,
            email,
            password,
        }),
    });
}