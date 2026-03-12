import Link from "next/link";

export default function UserHeader({ toggleSidebar }) {
  return (
    <div className="header d-flex justify-content-between align-items-center px-4 py-3">
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <ul className="header-right">
        <li>
          <Link href="" className="bell-btn">
            <img src="/images/bell-icon.svg" />
            <span></span>
          </Link>
        </li>
        <li>
          <Link href="" className="avtr-btn">
            <img
              src="/images/user-avtar.png"
              className="rounded-circle"
              width="35"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
