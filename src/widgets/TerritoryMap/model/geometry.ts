// Регистрация прежней подложки 1320×1240 внутри широкой визуализации 1672×941.
// Коэффициенты сверены по кровлям большого зала, буфета и южного ряда зданий.
const planBounds = {
  left: 655 / 1672,
  top: 64 / 941,
  width: (1320 * 0.73) / 1672,
  height: (1240 * 0.73) / 941,
};

export const territoryFocus = { x: 0.62, y: 0.54 };
export const territoryMinScale = 1.7;

// Жёсткая область карты: исходный кадр комплекса при масштабе 170%.
export const territoryViewBounds = {
  left: territoryFocus.x - 0.5 / territoryMinScale,
  right: territoryFocus.x + 0.5 / territoryMinScale,
  top: territoryFocus.y - 0.5 / territoryMinScale,
  bottom: territoryFocus.y + 0.5 / territoryMinScale,
};

export const getTerritoryPosition = (x: number, y: number) => ({
  left: `${(planBounds.left + ((x - 110) / 660) * planBounds.width) * 100}%`,
  top: `${(planBounds.top + ((y - 200) / 620) * planBounds.height) * 100}%`,
});
