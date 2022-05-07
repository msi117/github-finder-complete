import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <div>
        <Link to="/ " className="btn btn-ghost btn-outline">
          Back to Home
        </Link>
      </div>
      <h1 className="text-6xl text-sky-50 my-5">About</h1>
      <p className="m-5">
        This site is created by Mir Sameer. <br />
        Tutorial from Traversy media!
      </p>
    </div>
  );
}

export default About;
