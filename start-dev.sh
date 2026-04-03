#!/bin/bash
export PATH="$HOME/.local/bin:$PATH"
cd "$(dirname "$0")"
npx vite --port 5173
