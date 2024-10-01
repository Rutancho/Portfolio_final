import GithubIcon from "@/assets/images/github.svg";
import WebIcon from "@/assets/images/web.svg";
import DownloadIcon from "@/assets/images/downloadIcon.svg"; 

const Links = ({ repoUrl, webUrl, downUrl }: { repoUrl: string; webUrl: string | undefined; downUrl: string | undefined }) => {
  return (
    <div className="flex gap-1">
      <a target="_blank" rel="noreferrer" href={repoUrl} className="w-fit" title="Github site">
        <GithubIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
      </a>
      {webUrl && (
        <a target="_blank" rel="noreferrer" href={webUrl} className="w-fit" title="Releases site">
          <WebIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
        )}
          <a target="_blank" rel="noreferrer" href={downUrl} className="w-fit" title="Download File">
            <DownloadIcon className="text-black dark:text-white w-6 h-6 fill-current" />
          </a>
    </div>
  );
};

export default Links;
