import { ImageResponse } from "next/og";

export const alt =
  "Cham'élo Couture, retouches et cours de couture à Châlons-en-Champagne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "62px 72px",
          background: "#fbf7f1",
          color: "#281f27",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ width: 690, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#a83258",
              fontFamily: "Arial, sans-serif",
              fontSize: 19,
              letterSpacing: 5,
              marginBottom: 30,
            }}
          >
            ATELIER DE COUTURE · CHÂLONS-EN-CHAMPAGNE
          </div>
          <div style={{ fontSize: 77, lineHeight: 1.02, letterSpacing: -3 }}>
            Cham’élo Couture
          </div>
          <div
            style={{
              marginTop: 25,
              fontSize: 37,
              lineHeight: 1.2,
              color: "#6b465d",
            }}
          >
            Retouches soignées, cours de couture & broderie
          </div>
          <div
            style={{
              marginTop: 36,
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              color: "#765c6e",
            }}
          >
            Un savoir-faire artisanal depuis 2021
          </div>
        </div>
        <div
          style={{
            width: 330,
            height: 390,
            borderRadius: 170,
            background: "#51364a",
            border: "12px solid #efd8d0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff8f0",
            boxShadow: "0 18px 50px rgba(81,54,74,0.16)",
          }}
        >
          <div style={{ fontSize: 120, lineHeight: 1, color: "#f2c3b8" }}>C</div>
          <div style={{ fontSize: 54, marginTop: 8, color: "#fff8f0" }}>✳</div>
          <div
            style={{
              marginTop: 22,
              fontFamily: "Arial, sans-serif",
              fontSize: 16,
              letterSpacing: 4,
              color: "#f2c3b8",
            }}
          >
            FAIT MAIN
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
