@echo off

REM Navigate to the directory where Procfile.dev is located
cd /d "C:\Users\Tega\RubymineProjects\Expense Tracker\tracker"

REM Start foreman with Procfile.dev and pass along all command-line arguments
foreman start -f Procfile.dev "$@"
