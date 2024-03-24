const API_URL = import.meta.env.VITE_API_URL as string;

export async function getShortened(url: string) {
    const response = await fetch(`${API_URL}/relay/create/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
    });
    const data = await response.json();
    return data.shortened;
}

export async function getStats() {
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await response.json();
}

export async function getRedirect(short: string) {
    const response = await fetch(`${API_URL}/relay/${short}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await response.json();
}
