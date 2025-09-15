'use client'

interface NutritionalInfoProps {
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  sugar?: number;
  sodium?: number;
}

const NutritionalInfo = ({ 
  calories, 
  protein, 
  carbs, 
  fat, 
  sugar, 
  sodium 
}: NutritionalInfoProps) => {
  const hasNutritionalData = calories || protein || carbs || fat || sugar || sodium;

  if (!hasNutritionalData) {
    return null;
  }

  return (
    <div className="mb-4 sm:mb-6">
      <h3 className="text-base sm:text-lg font-semibold text-[var(--darkText)] mb-2 sm:mb-3">
        Información Nutricional (por porción)
      </h3>
      <div className="grid grid-cols-2 gap-3 text-sm">
        {calories && (
          <div className="flex justify-between">
            <span className="text-[var(--descriptionText)]">Calorías:</span>
            <span className="font-medium text-[var(--darkText)]">{calories} kcal</span>
          </div>
        )}
        {protein && (
          <div className="flex justify-between">
            <span className="text-[var(--descriptionText)]">Proteínas:</span>
            <span className="font-medium text-[var(--darkText)]">{protein}g</span>
          </div>
        )}
        {carbs && (
          <div className="flex justify-between">
            <span className="text-[var(--descriptionText)]">Carbohidratos:</span>
            <span className="font-medium text-[var(--darkText)]">{carbs}g</span>
          </div>
        )}
        {fat && (
          <div className="flex justify-between">
            <span className="text-[var(--descriptionText)]">Grasas:</span>
            <span className="font-medium text-[var(--darkText)]">{fat}g</span>
          </div>
        )}
        {sugar && (
          <div className="flex justify-between">
            <span className="text-[var(--descriptionText)]">Azúcares:</span>
            <span className="font-medium text-[var(--darkText)]">{sugar}g</span>
          </div>
        )}
        {sodium && (
          <div className="flex justify-between">
            <span className="text-[var(--descriptionText)]">Sodio:</span>
            <span className="font-medium text-[var(--darkText)]">{sodium}mg</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionalInfo;
