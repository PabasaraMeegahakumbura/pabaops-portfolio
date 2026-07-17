import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  RESUME_FILE,
} from "../config/site";

export function SiteFooter() {
  return (
    <footer className="container footer">
      <div className="footer-links">
        <a className="mini-btn" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">GitHub</a>
        <a className="mini-btn" href={LINKEDIN_PROFILE} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="mini-btn" href="mailto:prpabasara512@gmail.com">Email</a>
        <a className="mini-btn" href={RESUME_FILE} target="_blank" rel="noreferrer">Resume</a>
      </div>
      <div className="footer-copyright">
        © PabaOps • Pabasara Meegahakumbura. All rights reserved.
      </div>
    </footer>
  );
}
