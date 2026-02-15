export default function Callback({ query }) {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h2>TikTok OAuth Callback</h2>
      <p>Query params recibidos:</p>
      <pre>{JSON.stringify(query, null, 2)}</pre>
      <p>Copia el <b>code</b> si aparece arriba.</p>
    </main>
  );
}

export async function getServerSideProps({ query }) {
  return { props: { query } };
}
