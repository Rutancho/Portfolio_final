import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { WorkExperienceProps } from "@/types";



const WorkExperienceItem = ({
  company,
  position,
  description,
  period,
  markdown,
}: WorkExperienceProps) => {
  const markdownDescription = Array.isArray(description)
    ? description.join("\n")
    : description || "No description available";

  return (
    <div className="work-experience-item">
      <h3 className="text-xl font-bold">
        {position} at {company}
      </h3>
      <p className="text-sm text-gray-600">{period || "Period not available"}</p>

      <div className="whitespace-pre-wrap mt-2">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown ?? markdownDescription}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
