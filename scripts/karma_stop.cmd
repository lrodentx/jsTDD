@echo off

set DIR=%~dp0

for /f "skip=1 tokens=*" %%i in ('wmic process where name^="node.exe" get Processid') do (start /b "" %DIR%/"sendsignal" "%%i">nul)
