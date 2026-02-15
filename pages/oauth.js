export default function OAuth() {
  const clientKey = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_KEY;
  const redirectUri = "https://booster-uploader.vercel.app/callback";
  const scope = "user.info.profile";
  const state = "sandbox_test";

  const authUrl =
    "https://www.tiktok.com/v2/auth/authorize/?" +
    new URLSearchParams({
      client_key: clientKey || "",
      response_type: "code",
      scope,
      redirect_uri: redirectUri,
      state,
      disable_auto_auth: "1",
    }).toString();

  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h2>/oauth debug</h2>
      <div>clientKey: <b>{String(clientKey)}</b></div>
      <p>
        <a href={authUrl} target="_blank" rel="noreferrer">
          Continue with TikTok (opens new tab)
        </a>
      </p>
      <p>
        Si el link no abre, copia esta URL y pégala en la barra:
      </p>
      <pre style={{ whiteSpace: "pre-wrap" }}>{authUrl}</pre>
    </main>
  );
}
