import { useParams, redirect } from "react-router-dom";
import { getRedirect } from "../utils/api";

import "./ComponentBase.css";
import "./Loading.css";

export default function Loading() {
    // Get the slug from the URL
    const { slug } = useParams();

    // should never happen
    if (!slug) {
        redirect("/404");
    }

    getRedirect(slug!)
        .then((url) => {
            redirect(url);
        })
        .catch(() => {
            redirect("/404");
        });

    return (
        <div className="component loading">
            <p>Сторінка завантажується..</p>
            <p>Дякуємо за ваше очікування!</p>
        </div>
    );
}
