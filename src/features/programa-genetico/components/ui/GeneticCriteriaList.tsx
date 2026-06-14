import { GENETIC_CRITERIA, SECTION_CONTENT } from "../../core/data";
import { GeneticCriteriaItem } from "./GeneticCriteriaItem";

export function GeneticCriteriaList() {
  const firstHalf = GENETIC_CRITERIA.slice(0, 5);
  const secondHalf = GENETIC_CRITERIA.slice(5, 10);

  return (
    <div>
      {/* Section label */}
      <span className="text-eyebrow block mb-6">
        {SECTION_CONTENT.criteriaTitle}
      </span>

      {/* Two-column grid — each column is an independent list with its own borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <div>
          {firstHalf.map((criterion, i) => (
            <GeneticCriteriaItem
              key={criterion.id}
              criterion={criterion}
              isFirst={i === 0}
            />
          ))}
        </div>
        <div>
          {secondHalf.map((criterion, i) => (
            <GeneticCriteriaItem
              key={criterion.id}
              criterion={criterion}
              isFirst={i === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
