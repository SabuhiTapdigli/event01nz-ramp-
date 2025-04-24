import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/vercel-postgres";

const newZealand = [
  {
    name: "Legiano",
    url: "https://www.traffiqtraq.com/track/0e02273f-03f5-4153-8e86-b4c2ecc727f3?type=ppc&s1=NZ01VG&s4=",
    bonus: "100% up to NZ$1,000 + 200 FS + 1 Bonus Crab",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/legiano-jCL6fvIdwA7GYCVD7lKjrNl1lUxY99.svg",
  },
  {
    name: "Bassbet",
    url: "https://bsbt.fynkelto.com/?mid=64877_1531937&subid=NZ01VG&clickid=",
    bonus: "100%  up to  NZ$1,000 + 200 FS + 1 Bonus Crab",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/bassbet-vytWHPquRs5yTjPvU6QrsUPvSgNFxc.svg",
  },
  {
    name: "RollXO",
    url: "https://rollxo.media/n102ad7fb4?subid=NZ01VG&visit_id=",
    bonus: "UP TO $22,500+ 350 FS",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/rollxo-iK67GT6BY0zsIwRx1rEcOyGHr3lx61.svg",
  },
  {
    name: "Tikitaka",
    url: "https://www.traffiqtraq.com/track/34a026fa-d8f4-4a99-9a1e-54e879e10623?type=ppc&s1=NZ01VG&s4=",
    bonus: "100% up to $1,000 + 200 FS + 1 Bonus Crab",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/tikitaka-FLNOrxfcRWcVcE8mqRV2hAXYzu4JST.svg",
  },
  {
    name: "Spinfever",
    url: "https://www.traffiqtraq.com/track/d27eed03-e200-47de-bc45-0bb9d05a5bf9?type=ppc&s1=NZ01VG&s4=",
    bonus: "UP TO NZ$2,000 + 200 FREE SPINS",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/spinfever-6b58sD2eAGk3s241AjzyLIcS48m6mK.svg",
  },
  {
    name: "Dream Vegas",
    url: "https://www.traffiqtraq.com/track/d62576d5-6380-4a47-b0b1-a6dfeff53c6e?type=ppc&s1=NZ01VG&s4=",
    bonus: "200% Match Bonus Up to NZ$2500 + 50 Free Spins",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/dreamvegas-9JlgdPKy3bsz2DjKc9hNpLThrDm3fZ.svg",
  },

  {
    name: "Casino Bello",
    url: "https://www.traffiqtraq.com/track/e78157c6-5a47-429f-bb03-da6e9055d48c?type=ppc&s1=NZ01VG&s4=",
    bonus: "NZ$1000 Welcome Bonus + 150 FreeSpins",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/casinobella-EWq4AVTbnVhgWhDPMDjpI05nXzfPVw.svg",
  },

  {
    name: "Malina",
    url: "https://www.traffiqtraq.com/track/5df81e6c-790f-4217-a5de-51b1bbfbfe59?type=ppc&s1=NZ01VG&s4=",
    bonus: "100% up to NZ$1,000 + 200 FS + 1 Bonus Crab",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/maline-QaKaDS1rT54AZdEOq1iZ0ZBMYeJ37h.svg",
  },
  {
    name: "Luckywins",
    url: "https://www.traffiqtraq.com/track/d8b7afe3-c066-490c-b315-f1c197cb0aeb?type=ppc&s1=NZ01VG&s4=",
    bonus: "Welcome Bonus Up to NZ$3,000 +300 Free Spins",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/luckywin-YA9Tgblg3Pt2f47PvfGX09WdlPK3M2.svg",
  },
  {
    name: "Spinz",
    url: "https://www.traffiqtraq.com/track/c11cd886-6f43-4f80-8b34-d3f9bcc65148?type=ppc&s1=NZ01VG&s4=",
    bonus: "BONUS UP TO NZ$1000 + 200 Free Spins",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/spinz-De1CWqpHoD1p00XIhGpnYKuBOuTkZU.svg",
  },
  {
    name: "Neon54",
    url: "https://www.traffiqtraq.com/track/b76650b4-cc36-439c-a709-643ff5fe0df6?type=ppc&s1=NZ01VG&s4=",
    bonus: "100% up to NZ$1,000 + 200 FS + 1 Bonus Crab",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/neon54-A6SZMdY6ze66wnjlQLfKWPIUi8NSlc.svg",
  },
  // {
  //   name: "Winsane",
  //   url: "https://media1.bosspartners.com/redirect.aspx?pid=9033&lpid=286&bid=1762&clickid=",
  //   bonus: "Deposit NZ$50. Play NZ$100!",
  //   image_url:
  //     "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/winsane-2EVGEvJw5npOYoBNrbJHqRLw6MqUuJ.svg",
  // },
  // {
  //   name: "Cashwin",
  //   url: "https://media1.bosspartners.com/redirect.aspx?pid=9047&lpid=6&bid=1478&clickid=",
  //   bonus: "100% up to NZ$1,000 + 50 FreeSpins",
  //   image_url:
  //     "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/cashwin-EYsSY2U90o0aKua4oJ28A8Clvh8LDk.svg",
  // },

  {
    name: "Wildz",
    url: "https://www.traffiqtraq.com/track/683d443a-f3a5-4270-a047-763bdb88b7ab?type=ppc&s1=NZ01VG&s4=",
    bonus: "BONUS UP TO $1000 +200 Free Spins",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/wildz-NqVxR01dU1hu0Jiko7BEZAPwR4fbX2.svg",
  },
  {
    name: "NovaJackpot",
    url: "https://www.traffiqtraq.com/track/26589254-95c2-47a3-949b-26879df42467?type=ppc&s1=NZ01VG&s4=",
    bonus: "100% up to $1,000 + 200 FS",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/novajackpot-53xkHuJn1ZiQt37E2mtqOmkTmQRpA0.svg",
  },
  {
    name: "AllySpins",
    url: "https://www.traffiqtraq.com/track/3568ada9-0446-4a07-8982-c265a3a71a90?type=ppc&s1=NZ01VG&s4=",
    bonus: "Up to $2,000 in 3 bonuses",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/legiano-jCL6fvIdwA7GYCVD7lKjrNl1lUxY99.svg",
  },

  {
    name: "Lucky ones",
    url: "https://www.traffiqtraq.com/track/5b5c441e-5191-49e4-a4ce-06fecf6d5aa9?type=ppc&s1=NZ01VG&s4=",
    bonus: "Up to NZ$20,000 + 300 Free Spins",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/luckyones-Ok4XQ0Ltam5czer0LkFwVnotaLqaW9.svg",
  },
  {
    name: "Club House",
    url: "https://www.traffiqtraq.com/track/759f9186-7fa4-4873-a42f-f7c624048db5?type=ppc&s1=NZ01VG&s4=",
    bonus: "Get up to NZ$5,000 Bonus +200 free spins",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/theclubhouse-pIavhGc7ygrJVFtEkH3AiQjkWTBRf0.svg",
  },
  {
    name: "Lukki",
    url: "https://www.traffiqtraq.com/track/e40186e3-12f0-410d-b6c6-e6240f16a4e2?type=ppc&s1=NZ01VG&s4=",
    bonus: "Up to NZ$4,000 + 300 Free Spins",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/lukki-DbrIvLJ5PWDs2JJGIAqJxO3TKG66mT.svg",
  },

  {
    name: "Casilime",
    url: "https://www.traffiqtraq.com/track/b0cddd75-b5af-4c0f-9839-b49f4ccbe5bd?type=ppc&s1=NZ01VG&s4=",
    bonus: "100% MATCH BONUS UP TO NZ$250 + 50 FREE SPINS",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/casilime-yh1fJnM7Cf5iMn7YMbklF5gTdz4yxd.svg",
  },
  {
    name: "Casinia",
    url: "https://csn.servclick1move.com/?mid=64877_1415763&subid=NZ01VG&clickid=",
    bonus: "100% up to NZ$1,000 + 200 FS + 1 Bonus Crab",
    image_url:
      "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/casinia-m66GmGSK0I2KisH9qy22lXumYFQn9y.svg",
  },
  // {
  //   name: "GoldSpin",
  //   url: "https://media1.bosspartners.com/redirect.aspx?pid=9040&lpid=511&bid=2223&clickid=",
  //   bonus: "100% up to NZ$1,000 + 50 FreeSpins",
  //   image_url:
  //     "https://mhb5kfuypoedw0xy.public.blob.vercel-storage.com/nz/goldspn-4T4Zq23h4akShzXBjqaIUeqZbUfcHj.svg",
  // },
];

export async function POST(req: NextRequest) {
  try {
    const db = drizzle();
    const requestData = await req.json();
    const { ip, gclid, page, parser, referrer } = requestData;
    console.log("parser", parser);

    const IpRegisteryUrl = `https://api.ipregistry.co/${
      ip === "::1" ? "192.0.2.1" : ip
    }?key=ira_224NYn2P1QoLO6cmt6LVg6lEtoJPUb4AUd5s`;

    const IpRegisteryResult = await fetch(IpRegisteryUrl);

    if (!IpRegisteryResult.ok) {
      throw new Error(`IP Registry API error: ${IpRegisteryResult.status}`);
    }

    const IpRegisteryData = await IpRegisteryResult.json();

    const user: any = {
      ip,
      country: IpRegisteryData.location?.country?.name || "Unknown",
      city: IpRegisteryData.location?.city || "Unknown",
      company_domain: IpRegisteryData.company?.domain || null,
      connection_domain: IpRegisteryData.connection?.domain || null,
      gclid,
      referrer,
      code: "test06fi",
      page,
      device_type: parser?.device?.type || "Unknown",
      device_model: parser?.device?.model || "Unknown",
      device_vendor: parser?.device?.vendor || "Unknown",
      browser_name: parser?.browser?.name || "Unknown",
      browser_version: parser?.browser?.version || "Unknown",
      engine_name: parser?.engine?.name || "Unknown",
      engine_version: parser?.engine?.version || "Unknown",
      os_name: parser?.os?.name || "Unknown",
      os_version: parser?.os?.version || "Unknown",
      security: JSON.stringify(IpRegisteryData.security || {}),
    };

    // Insert data into the database
    // await db.insert(usersTable).values(user);
    if (true) {
      if (true) {
        return NextResponse.json(newZealand);
      }
    } else if (
      !user.company_domain?.includes("google") &&
      !user.connection_domain?.includes("google")
    ) {
      return NextResponse.json([]);
    }

    return NextResponse.json([]);
  } catch (error) {
    console.error("Error in tracking route:", error);
    return NextResponse.json({ error: "Tracking failed" }, { status: 500 });
  }
}
