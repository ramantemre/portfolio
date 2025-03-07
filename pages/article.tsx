import Link from "next/link";

const Articles = () => {
  return (
    <div>
      <div>Articles</div>
      {/* <div>
        Back to{" "}
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>Home</a>
        </Link>
      </div> */}
    </div>
  );
};
export default Articles;
