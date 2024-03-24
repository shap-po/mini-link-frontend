import { useState } from "react";
import { getShortened } from "../utils/api";

import "./ComponentBase.css";
import "./Input.css";

export default function Input() {
    // Create hooks for all necessary states
    const [shortened, setShortened] = useState<string>("");
    const [valid, setValid] = useState<boolean>(true);

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const value = event.currentTarget.input.value;
        if (!value) {
            setValid(false);
            return;
        }

        fetchShortened(value);
    }

    function fetchShortened(value: string) {
        setLoading(true);
        getShortened(value)
            .then((shortened) => {
                setShortened(shortened);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message);
            });
    }

    return (
        <form className="component shorten-form" onSubmit={handleSubmit}>
            <h2>Скоротити довге посилання</h2>
            <input type="text" name="input" placeholder="Вставте посилання" />
            <button type="submit" className={valid ? "" : "invalid"} onAnimationEnd={() => setValid(true)}>
                Скоротити
            </button>
            <div className={"shortened" + (shortened || loading || error ? " visible" : "")}>
                {loading ? (
                    <p>Завантаження...</p>
                ) : error ? (
                    <p className="error">Сталася помилка :(</p>
                ) : (
                    <>
                        <p>Скорочене посилання:</p> <a href={shortened}>{shortened}</a>
                    </>
                )}
            </div>
        </form>
    );
}
