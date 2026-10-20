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