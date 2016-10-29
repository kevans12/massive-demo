-- select incidents.id,
--   incidents.us_state,
--   injuries.name as injury_name,
--   affected_areas.name as affected_area_name,
--   causes.name as cause_name
select *
from incidents
-- join injuries
--   on incidents.injury_id = injuries.id
-- join affected_areas
--   on injuries.affected_areas_id = affected_areas.id
-- join causes
--   on causes.id = incidents.cause_id;
