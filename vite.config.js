import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

try {
  const srcPath = "C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\bf01ace7-af87-4654-841e-de5f5ed75edf\\financial_growth_1779864157582.png";
  const destPath = "./src/assets/images/growing_wealth_bg.png";
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log("Successfully placed growing_wealth_bg.png in assets!");
  }

  const srcPathAbout = "C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\bf01ace7-af87-4654-841e-de5f5ed75edf\\about_us_bg_1779868149172.png";
  const destPathAbout = "./src/assets/images/about_us_bg.png";
  if (fs.existsSync(srcPathAbout)) {
    fs.copyFileSync(srcPathAbout, destPathAbout);
    console.log("Successfully placed about_us_bg.png in assets!");
  }
} catch (err) {
  console.error("Auto-copy failed:", err);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
