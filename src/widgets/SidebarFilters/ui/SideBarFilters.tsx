import { SearchQuestions } from '@/features/SearchQuestions';
import { ChooseSpecialization } from '@/features/ChooseSpecialization';
import { ChooseSkills } from '@/features/ChooseSkills';
import { СhooseComplexity } from '@/features/СhooseComplexity';
import { СhooseRate } from '@/features/СhooseRate';

function SideBarFilters() {
  return (
    <>
      <SearchQuestions />
      <ChooseSpecialization />
      <ChooseSkills />
      <СhooseComplexity />
      <СhooseRate />
    </>
  );
}

export default SideBarFilters;
