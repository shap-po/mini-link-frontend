import "./ComponentBase.css";
import "./Authors.css";

export default function Authors() {
    return (
        <div className="component authors">
            <h2>Сторінка створена командою Вомбати з Мехмату</h2>
            <ul>
                <li>
                    Frontend/TeamLead: <a href="https://github.com/shap-po">Шаповалов В'ячеслав</a>
                </li>
                <li>
                    Backend/Data Base: <a href="https://github.com/CrazyDuck192">Пузанов Павло</a>
                </li>
                <li>
                    Backend/Data Base: <a href="https://github.com/amasyaska">Колесніков Богдан</a>
                </li>
                <li>
                    Designer: <a href="https://t.me/termos_chaiku">Дарія Чепкасова</a>
                </li>
            </ul>
        </div>
    );
}
