@echo off
REM ============================================
REM INOVALE Website - Local Development Server
REM ============================================

echo.
echo ============================================
echo INOVALE - Local Development Server
echo ============================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js and npm are installed.
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    echo This may take a few minutes on first run.
    echo.
    call npm install
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies!
        pause
        exit /b 1
    )
    echo Dependencies installed successfully!
    echo.
) else (
    echo Dependencies already installed.
    echo.
)

REM Start the development server
echo Starting development server...
echo.
echo ============================================
echo The website will be available at:
echo   http://localhost:8080
echo ============================================
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
