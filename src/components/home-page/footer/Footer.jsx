import "./footer.css";
export default function Footer() {
    return (
        <footer >
            <div className="footer-content flex">
                <div className="right-line"></div>
                <img
                    src="/icons/logo.png"
                    alt="Logo"
                    style={{ width: "120px" }}
                />
                <div className="left-line"></div>
            </div>
        </footer>
    );
}
