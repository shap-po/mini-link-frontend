import Authors from "../components/Authors";
import Input from "../components/Input";
import Stats from "../components/Stats";

import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            <Input />
            <Stats />
            <Authors />
        </div>
    );
}
