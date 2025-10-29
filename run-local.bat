@echo off
REM ============================================
REM INOVALE Website - Local Development Server
REM ============================================

setlocal enabledelayedexpansion

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
    echo.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo npm version:
npm --version
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    echo This may take a few minutes on first run.
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install dependencies!
        echo Please check your internet connection and try again.
        echo.
        pause
        exit /b 1
    )
    echo.
    echo Dependencies installed successfully!
    echo.
) else (
    echo Dependencies already installed.
    echo.
)

REM Start the development server
echo ============================================
echo Starting development server...
echo ============================================
echo.
echo The website will be available at:
echo   http://localhost:8080
echo.
echo Opening browser in 3 seconds...
echo Press Ctrl+C to stop the server
echo.

REM Optional: Open browser (comment out if causes issues)
timeout /t 3 /nobreak
start http://localhost:8080

REM Run the development server
npm run dev

REM If npm run dev exits, show this message
echo.
echo ============================================
echo Development server stopped.
echo ============================================
echo.
pause
