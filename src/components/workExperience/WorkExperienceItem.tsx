interface WorkExperienceItemProps {
    company: string;
    position: string;
    description?: string;
    duration?: string[];  
  }
  
  const WorkExperienceItem = ({ company, position, description, duration }: WorkExperienceItemProps) => {
    return (
      <div className="work-experience-item">
        <h3 className="text-xl font-bold">{position} at {company}</h3>
        <p className="text-sm text-gray-600"></p>
        <p className="text-sm text-gray-600">{duration || "Period not available"}</p> 

        <p className="whitespace-pre-wrap mt-2">
        {Array.isArray(description) ? description.join("\n") : description || "No description available"}</p>
      </div>
    );
  };
  
  export default WorkExperienceItem;
  