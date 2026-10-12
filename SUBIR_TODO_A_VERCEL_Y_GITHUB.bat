@echo off
title Subir Actualizaciones a GitHub y Vercel
color 0b
echo ======================================================================
echo    SUBIENDO PLATAFORMA COMPLETA A GITHUB Y VERCEL (PRL + CATALA)
echo ======================================================================
echo.
cd /d "%~dp0"
echo 1. Comprobando archivos y cambios...
git add -A
git commit -m "Actualizacion completa con estilos, podcasts y catalan integrado"
echo.
echo 2. Enviando todos los archivos a GitHub (para que Vercel actualice)...
git push origin main
echo.
echo ======================================================================
echo    SUBIDA COMPLETADA CON EXITO!
echo    Vercel actualizara la web en 15-20 segundos automaticamente.
echo ======================================================================
echo.
pause
exit
