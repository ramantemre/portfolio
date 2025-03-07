import Link from "next/link";
// import Image from "next/image";
import Main from "./Main/main";
import style from "./navbar.module.css";
import "bootstrap/dist/css/bootstrap.css";
import mansvg from "./man.svg";

const Navbar = () => {
  return (
    <nav>
      <div className={style.navFirst}>
        <Link href="/">
          <div className="logo container navLink">
            {/* <Image
              //   src="/profile_pic.png"
              src={mansvg}
              alt="site logo"
              width={100}
              height={100}
            /> */}
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="75"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M2435 5114 c-16 -2 -65 -9 -109 -15 -246 -33 -541 -172 -741 -349
-253 -223 -432 -545 -486 -875 -20 -120 -17 -390 5 -500 71 -361 275 -695 550
-903 l68 -52 -28 -10 c-121 -46 -173 -69 -276 -120 -444 -223 -805 -560 -1062
-990 -210 -352 -328 -745 -352 -1180 l-7 -120 201 0 202 0 0 49 c0 339 141
807 330 1095 291 445 681 750 1156 905 452 148 896 148 1348 0 475 -155 865
-460 1156 -905 189 -288 330 -756 330 -1095 l0 -49 202 0 201 0 -7 120 c-24
435 -142 828 -352 1180 -257 430 -618 767 -1062 990 -103 51 -155 74 -276 120
l-28 10 68 52 c275 208 479 542 550 903 22 110 25 380 5 500 -43 263 -176 542
-352 742 -219 247 -527 421 -848 479 -77 14 -332 26 -386 18z m294 -409 c588
-96 990 -650 896 -1234 -96 -588 -650 -990 -1234 -896 -588 96 -990 650 -896
1234 96 588 650 990 1234 896z"
                />
              </g>
            </svg>
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
