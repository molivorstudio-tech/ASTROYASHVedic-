import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";

// Load .env or .env.local manually
function loadEnv() {
  const envFiles = [".env", ".env.local"];
  for (const file of envFiles) {
    const envPath = path.resolve(process.cwd(), file);
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf8");
      for (const line of content.split("\n")) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
          const [key, ...valParts] = trimmed.split("=");
          const k = key.trim();
          const v = valParts.join("=").trim().replace(/^["']|["']$/g, "");
          if (k && v && !process.env[k]) {
            process.env[k] = v;
          }
        }
      }
    }
  }
}

loadEnv();

const prisma = new PrismaClient();

async function main() {
  const emailArg = process.argv[2];

  if (!emailArg) {
    console.error("❌ Error: Please specify the email address of the account to promote.");
    console.error("Usage: npx tsx scripts/promote-admin.ts <email>");
    process.exit(1);
  }

  const email = emailArg.toLowerCase().trim();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    console.error(`❌ Error: No user account found with email '${email}'.`);
    process.exit(1);
  }

  const updatedUser = await prisma.user.update({
    where: { email },
    data: { isAdmin: true },
  });

  console.log(`🎉 Success! Account '${updatedUser.email}' (${updatedUser.name}) is now an Admin (isAdmin: true).`);
}

main()
  .catch((err) => {
    console.error("❌ Admin promotion failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
