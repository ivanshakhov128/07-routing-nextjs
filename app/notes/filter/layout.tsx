export default function FilterLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: 24 }}>
      <aside>{sidebar}</aside>
      <section>{children}</section>
    </div>
  );
}
