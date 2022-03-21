import Link from "next/link"


export const Layout: React.FC = ({children}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand" >FabuBlog</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/first-article">
                  <a className="nav-link">First Article</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/second-article">
                  <a className="nav-link">Second Article</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <article>
        {children}
      </article>

    </div>
  )
}
