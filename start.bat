@echo off
cd /d "%~dp0"
if not exist node_modules\vite\package.json ( echo Installing dependencies... & call npm install --no-audit --no-fund )
echo Starting on http://localhost:5175  (Ctrl+C to stop)
call npm run dev
pause
