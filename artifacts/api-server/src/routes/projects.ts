import {
  CreateProjectBody,
  CreateProjectResponse,
  DeleteProjectParams,
  ListProjectsResponse,
} from "@workspace/api-zod";
import { db, projectsTable } from "@workspace/db";
import { and, desc, eq } from "drizzle-orm";
import { Router, type IRouter, type Request, type Response } from "express";
import { ObjectStorageService } from "../lib/objectStorage";

const router: IRouter = Router();
const objectStorageService = new ObjectStorageService();

router.get("/projects", async (_req, res): Promise<void> => {
  const projects = await db
    .select()
    .from(projectsTable)
    .orderBy(desc(projectsTable.createdAt));

  res.json(ListProjectsResponse.parse(projects));
});

router.post("/projects", async (req: Request, res: Response): Promise<void> => {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const parsed = CreateProjectBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Missing or invalid project fields" });
    return;
  }

  const { assetPath } = parsed.data;
  if (assetPath?.startsWith("/objects/")) {
    await objectStorageService.trySetObjectEntityAclPolicy(assetPath, {
      owner: req.user.id,
      visibility: "public",
    });
  }

  const [project] = await db
    .insert(projectsTable)
    .values({
      ...parsed.data,
      ownerId: req.user.id,
    })
    .returning();

  res.status(201).json(CreateProjectResponse.parse(project));
});

router.delete(
  "/projects/:id",
  async (req: Request, res: Response): Promise<void> => {
    if (!req.isAuthenticated()) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const params = DeleteProjectParams.safeParse(req.params);
    if (!params.success) {
      res.status(400).json({ error: "Invalid project id" });
      return;
    }

    const [project] = await db
      .delete(projectsTable)
      .where(
        and(
          eq(projectsTable.id, params.data.id),
          eq(projectsTable.ownerId, req.user.id),
        ),
      )
      .returning();

    if (!project) {
      res.status(404).json({ error: "Project not found" });
      return;
    }

    res.sendStatus(204);
  },
);

export default router;