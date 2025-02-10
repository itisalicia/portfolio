import { Download } from "lucide-react";

const Cv = () => {
  return (
    <a href="/CV.pdf" download="CV_Alicia.pdf">
      <Download size={20} />
      Télécharger mon CV
    </a>
  );
};

export default Cv;
