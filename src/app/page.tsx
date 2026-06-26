export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "var(--font-geist-sans), sans-serif",
        gap: "1rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", margin: 0 }}>OG Image Test</h1>
      <p style={{ color: "#666", margin: 0 }}>
        Share this page link somewhere to see the OG preview.
      </p>
    </main>
  );
}
