import config from '../config/index.js';
import http from '../utils/apiRequest.js';

export const getTeam = async (teamId) => {
  const team = await http.get(`${config.baseUrl}/teams/${teamId}`);
  return team;
};

export const getTeamList = async () => {
  const teams = await http.get(`${config.baseUrl}/teams`);
  return teams;
};

export const addTeam = async (name) => {
  const teams = await http.post(
    `${config.baseUrl}/teams`,
    JSON.stringify({ name })
  );
  return teams;
};

export const deleteTeam = async (teamId) => {
  const team = await http.delete(`${config.baseUrl}/teams/${teamId}`);
  return team;
};

export const addTeamMember = async (teamId, memberName) => {
  const team = await http.post(
    `${config.baseUrl}/teams/${teamId}/members`,
    JSON.stringify({ name: memberName })
  );
  return team;
};
