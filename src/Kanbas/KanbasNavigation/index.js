import { Link, useLocation } from "react-router-dom";
function KanbasNavigation() {
    const links = [
        {linkName: "Account", icon: "fa-regular fa-user text-danger"},
        {linkName: "Dashboard", icon: "fa-solid fa-table-columns text-danger"},
        {linkName: "Courses", icon: "fa-brands fa-discourse text-danger"}];
    const { pathname } = useLocation();
    console.log(pathname.includes('Dashboard'));
    console.log(`text-light ${pathname.includes('Dashboard') ? "bg-light" : ""}`);
    return (
        <div className="d-flex flex-column bg-dark text-light navbarouter"
            style={{ paddingRight: '0px', width: '85px', fontSize: 'small' }}>
            <div className="list-group list-group-flush">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/${link.linkName}`}
                        style={{ paddingBottom: '5px' }}
                        className={`${pathname.includes(link) === true ? `text-light  bg-light` : `text-light`}`}>
                        <div className={`d-flex flex-column align-items-center`}>
                            <i className={link.icon} style={{ paddingBottom: '5px' }}></i>
                            <p className={`${pathname.includes(link) ? "text-danger" : 'text-light'}`}>{link.linkName}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default KanbasNavigation;