import { Link } from 'react-router-dom';
import { menu } from '../../exampleData'
import "./menu.scss"

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
    return (
        <div className="menu">
            {menu.map(menuItem => (
                <div className="item" key={menuItem.id}>
                    <div className="title">{menuItem.title}</div>
                    {menuItem?.listItems.map(listItem => (
                        <Link to={'/'} className="listItem" key={listItem.id}>
                            <img src={listItem.icon} alt="icon" />
                            <span className="listItemTitle">{listItem.title}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Menu;