import { Link } from 'react-router-dom'; // 引入 Link 組件
import "../style/Navigation.css";

export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="nav-title">
                <Link to="/" className="home-link">學生管理系統</Link> 
            </div>
            <div className="nav-links">
                <Link to="/add" className="nav-button">新增學生</Link> 
                <Link to="/delete" className="nav-button">刪除學生</Link> 
                <Link to="/update" className="nav-button">更新學生</Link> 
            </div>
        </nav>
    );
}
