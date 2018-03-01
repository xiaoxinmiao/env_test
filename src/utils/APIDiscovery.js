export default (key) => {
  return process.env.API_ENV[process.env.STAGE_ENV][key];
}
