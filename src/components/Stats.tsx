import { useState, useEffect } from "react";

import "./ComponentBase.css";
import "./Stats.css";
import { getStats } from "../utils/api";

type Entry = {
    url: string;
    short: string;
    visits: number;
};

export default function Stats() {
    const [stats, setStats] = useState<Entry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    function fetchStats() {
        setLoading(true);
        getStats()
            .then((stats) => {
                setStats(stats);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }

    // Load stats on component mount
    useEffect(() => {
        fetchStats();
    }, []);

    return (
        <div className="component stats">
            <h2>Статистика посилань</h2>
            {loading ? (
                <p>Завантаження...</p>
            ) : stats.length === 0 ? (
                <p>Немає статистики</p>
            ) : (
                <ul>
                    {stats.map((entry) => (
                        <li key={entry.short}>
                            {entry.short} - {entry.visits} переходів
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
