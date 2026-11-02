import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/app/lib/site";

export const alt = `${SITE_NAME}: supporting Somali Bantu youth and families in Alberta`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STRIPES = ["#138a44", "#f2b01e", "#7b2d2d", "#4189dd", "#f2b01e", "#0b4d2c", "#d52b1e", "#f2b01e"];

const asset = async (name, type) => `data:${type};base64,${(await readFile(join(process.cwd(), "public/assets", name))).toString("base64")}`;

export default async function OpengraphImage() {
  const [logo, photo] = await Promise.all([asset("logo.png", "image/png"), asset("sport1.jpeg", "image/jpeg")]);

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", flexDirection: "column", backgroundColor: "#07331d" }}>
        <div style={{ display: "flex", flex: 1 }}>
          <div
            style={{
              display: "flex",
              width: 660,
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 64px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <img src={logo} width={112} height={104} alt="" style={{ backgroundColor: "#ffffff", borderRadius: 999, padding: 6 }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 44, fontWeight: 700, color: "#ffffff" }}>{SITE_NAME}</span>
                <span style={{ fontSize: 20, color: "#f2b01e", maxWidth: 380 }}>Somali Bantu Jareer Weyne Society of Alberta</span>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 44, fontSize: 40, lineHeight: 1.25, fontWeight: 700, color: "#ffffff" }}>From the Jubba valley to Alberta, we rise together.</div>
            <div style={{ display: "flex", marginTop: 20, fontSize: 24, color: "rgba(255,255,255,0.78)" }}>Education · Advocacy · Youth sport · Family support</div>
          </div>
          <div style={{ display: "flex", flex: 1, position: "relative" }}>
            <img src={photo} alt="" width={540} height={616} style={{ objectFit: "cover", objectPosition: "60% 18%", width: "100%", height: "100%" }} />
            <div style={{ display: "flex", position: "absolute", left: 24, bottom: 24, padding: "10px 20px", borderRadius: 999, fontSize: 22, fontWeight: 700, color: "#07331d", backgroundColor: "#f2b01e" }}>
              Edmonton, Canada
            </div>
          </div>
        </div>
        <div style={{ display: "flex", height: 14 }}>
          {STRIPES.map((color, index) => (
            <div key={index} style={{ display: "flex", flex: index % 2 === 0 ? 4 : 1, backgroundColor: color }} />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
