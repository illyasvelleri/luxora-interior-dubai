import connectDB from "@/lib/db";
import Project from "@/models/Project";
import EditProject from "./EditProject";

export default async function ProjectPage(props) {
  const { id } = await props.params;

  await connectDB();

  const projectDoc = await Project.findById(id).lean();

  if (!projectDoc) {
    return <div className="p-10 text-white">Project not found</div>;
  }

  const project = JSON.parse(JSON.stringify(projectDoc));

  return <EditProject project={project} />;
}
