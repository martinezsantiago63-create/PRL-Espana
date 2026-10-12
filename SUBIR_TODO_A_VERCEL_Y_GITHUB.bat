@echo off
title Subir Actualizaciones a GitHub y Vercel
color 0b
echo ======================================================================
echo    SUBIENDO PLATAFORMA COMPLETA A GITHUB Y VERCEL (PRL + CATALA)
echo ======================================================================
echo.

echo 1. Comprobando y enviando cambios a GitHub...
cd /d "%~dp0"
git add -A
git commit -m "Actualizacion de plataforma PRL"
git push origin main
echo.

echo 2. Desplegando plataforma completa en Vercel...
cd /d "%~dp0.."
call npx vercel --prod --yes
echo.

echo ======================================================================
echo    SUBIDA COMPLETADA CON EXITO!
echo    GitHub y Vercel (https://appestudiosprlespa-a.vercel.app) estan actualizados.
echo ======================================================================
echo.
pause
exit
