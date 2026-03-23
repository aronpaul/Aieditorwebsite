# Cleanup Notes

These are safe cleanup items identified after copying the project into the workspace.

## Removable generated / junk files
- `.next/` — local Next.js build output; should not be treated as source
- `.DS_Store` files — macOS junk metadata
- `public/.DS_Store`
- `public/images/.DS_Store`
- `__MACOSX/` if present above or alongside the copied project tree

## Why not removed yet
These are safe to clean, but they are still file deletions. Holding until Aron confirms or until cleanup is bundled into a broader polish pass.

## Next technical checks
- Verify the local dev command and dependency health
- Confirm whether ESLint is installed locally or if the copied node_modules should be regenerated with a fresh install
- Add or confirm `.gitignore` coverage for `.next/`, OS junk, and transient files
