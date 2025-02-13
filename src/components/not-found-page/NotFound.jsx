export default function NotFound() {
    return (
        <div
            className="not-found flex"
            style={{ flexDirection: "column", justifyContent: "center" }}
        >
            <img
                src="/public/icons/error404.jpg"
                alt="error 404"
                style={{ width: "300px" }}
            />
            <p style={{ fontSize: "30px" }}>
                عذرًا، الصفحة التي تبحث عنها غير موجودة
            </p>
        </div>
    );
}
