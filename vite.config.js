import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

// Content hash of the resume, used as a ?v= query on its link so phones and
// browsers fetch the new file whenever the PDF changes (instead of a cached copy).
const resumeVersion = createHash("sha1")
  .update(readFileSync("public/assets/Shantanu_Saraf_Resume.pdf"))
  .digest("hex")
  .slice(0, 8);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __RESUME_VERSION__: JSON.stringify(resumeVersion),
  },
});
