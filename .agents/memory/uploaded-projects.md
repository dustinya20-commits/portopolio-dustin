---
name: Uploaded portfolio projects
description: Durable constraints for authenticated project uploads and generated API hooks.
---

Uploaded portfolio files use direct-to-object-storage uploads, while project metadata belongs in PostgreSQL. The upload URL and project mutation endpoints must stay behind authentication; public project assets are served through the storage object route after the project is created.

**Why:** Browser uploads need persistence beyond React state, and allowing unauthenticated presigned URL creation would expose write access to the bucket.

**How to apply:** Keep the portfolio frontend wrapped in QueryClientProvider before using generated React Query hooks. Keep auth middleware mounted before storage and project routes, and add an owner allowlist before publishing the portfolio publicly.