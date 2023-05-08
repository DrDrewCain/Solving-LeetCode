-- This query reports the names of the customer that are not referred by the customer with id = 2.
-- The result table is ordered by name.

SELECT
  name
FROM customer
WHERE
  referee_id IS NULL
  OR referee_id <> 2
ORDER BY
  name;