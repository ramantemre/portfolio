import Link from "next/link";
// import Image from "next/image";
import Main from "./Main/main";
import style from "./navbar.module.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav>
      <div className={style.navFirst}>
        <Link href="/">
          <div className="logo container navLink">
            <img
              src="/profile_pic.png"
              alt="site logo"
              width={100}
              height={100}
            />
          </div>
        </Link>
        <div className="container header">
          <Link href="/">
            <span className="navLink">
              <h3>Raman Temre</h3>
            </span>
          </Link>
          <span className={style.dashLine}></span>
          <div>
            <Link href="/work">
              <a className={style.navBtn}>Work</a>
              {/* <h3>
                <small className="text-muted navLink">Work</small>
              </h3> */}
            </Link>
            <Link href="/about">
              <a className={style.navBtn}>About</a>

              {/* <h3>
                <small className="text-muted navLink">About</small>
              </h3> */}
            </Link>

            <Link href="/contact">
              <a className={style.navBtn}>Contact</a>

              {/* <h3>
                <small className="text-muted navLink">Contact</small>
              </h3> */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
