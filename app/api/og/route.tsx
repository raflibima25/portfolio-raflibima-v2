import { ImageResponse } from "next/og";

export const runtime = "edge";

async function loadGoogleFont(font: string, weight: number): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&display=swap`;
  // Use a non-browser UA so Google Fonts returns truetype (.ttf) instead of woff2
  const css = await (
    await fetch(url, { headers: { "User-Agent": "Next.js OG Image" } })
  ).text();

  const match = css.match(/src: url\((.+?)\) format\('truetype'\)/);
  if (!match) throw new Error(`Could not load font: ${font} ${weight}`);

  return await (await fetch(match[1])).arrayBuffer();
}

export async function GET() {
  const [poppinsRegular, poppinsSemiBold] = await Promise.all([
    loadGoogleFont("Poppins", 400),
    loadGoogleFont("Poppins", 600),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d1117",
          fontFamily: "Poppins",
          padding: "60px",
          gap: "50px",
        }}
      >
        {/* Profile photo */}
        <div
          style={{
            display: "flex",
            flexShrink: 0,
            width: 260,
            height: 260,
            borderRadius: 30,
            border: "4px solid #008080",
            overflow: "hidden",
          }}
        >
          <img
            src="https://raflibima.vercel.app/images/PP_Bima_cleanup.jpg"
            width={260}
            height={260}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "6px",
            flex: 1,
          }}
        >
          <div style={{ fontSize: 22, color: "#8b9cb3", fontWeight: 400 }}>
            Hi dear, I am
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: "#f0f4f8",
              lineHeight: 1.1,
            }}
          >
            Rafli Bima Pratandra
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#008080",
              fontWeight: 600,
              marginTop: "4px",
            }}
          >
            Software Engineer | Backend Developer
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 4,
              backgroundColor: "#008080",
              borderRadius: 2,
              marginTop: "16px",
              marginBottom: "16px",
            }}
          />

          {/* CTA Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#008080",
                color: "#ffffff",
                fontSize: 22,
                fontWeight: 600,
                padding: "14px 32px",
                borderRadius: 12,
              }}
            >
              {"Let's Connect →"}
            </div>
          </div>

          {/* Domain hint */}
          <div
            style={{
              fontSize: 16,
              color: "#8b9cb3",
              marginTop: "14px",
            }}
          >
            raflibima.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Poppins", data: poppinsRegular, weight: 400 },
        { name: "Poppins", data: poppinsSemiBold, weight: 600 },
      ],
    }
  );
}
