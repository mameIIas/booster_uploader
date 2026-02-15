export default function OAuth() {
  const clientKey = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_KEY;
  const redirectUri = "https://booster-uploader.vercel.app/callback";
  const scope = "user.info.profile,video.upload"; // lo que tienes aprobado/seleccionado
  const state = Math.random().toString(36).slice(2);

  const authUrl =
    "https://www.tiktok.com/v2/auth/authorize/?" +
    new URLSearchParams({
      client_key: clientKey,
      response_type: "code",
      scope,
      redirect_uri: redirectUri,
      state,
    }).toString();

  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h2>Login with TikTok</h2>
      <a href={authUrl}>Continue with TikTok</a>
    </main>
  );
}
