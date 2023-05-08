-- This query reports the name, population, and area of the big countries.
-- The result table is ordered by name.

SELECT name, population, area
FROM world
WHERE COALESCE(area >= 3000000, false) OR COALESCE(population >= 25000000, false)
ORDER BY name;
